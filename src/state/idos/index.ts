/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { createSlice } from '@reduxjs/toolkit'
// import farmsConfig from 'config/constants/farms'
import idos from 'config/constants/ido'
import ipfs from 'ipfs';
import { IDOConfig } from 'config/constants/types';
import data1 from './config';

import { IDOState, IDO } from '../types'
import fetchIdo from './fetchIdo';
import {fetchIdoAllowance, fetchIdoUserData} from './fetchUserIdo';


let idodata = [];
const initialState: IDOState = { data: [...idos] }

async function getDataByHash(hash, array, dispatch) {
    const response = await ipfs.get(`/ipfs/${hash}`);
    const data = response[0].content;
    console.log(JSON.parse(data.toString('utf8')), "response")
    const obj = JSON.parse(data.toString('utf8'));
    console.log(obj, "obj");

    if (obj.socialMedia) {
        obj.socialMedia = JSON.parse(obj.socialMedia);
    }
    array.push(obj);
    console.log(array, "ido");

    dispatch(setIdosPublicData(array));

    await (idodata = array);
    // return JSON.parse(data.toString('utf8'));
    // return array;

}


async function getData(dispatch) {
    const array = [];
    for (let i = 0; i < data1.length; i++) {
        getDataByHash(data1[i], array, dispatch);
        // array.push(response);
    }
    return array;

}

export const idoSlice = createSlice({
    name: 'IDOS',
    initialState,
    reducers: {
        setIdosPublicData: (state, action) => {
            console.log(action.payload, "action ido")
            const liveFarmsData: IDOConfig[] = action.payload



            state.data = state.data.map((ido) => {


                const liveFarmData = liveFarmsData.find((f) => f.tokenAddress === ido.tokenAddress)

                console.log(liveFarmData, "live data")
                return { ...ido, ...liveFarmData }
            })
        },
        setLiveIdoUserData: (state, action) => {
            const { arrayOfUserDataObjects } = action.payload
            console.log(arrayOfUserDataObjects, "array in userdata")
            //   console.log(state.data,"dtaat");

            arrayOfUserDataObjects.forEach((userDataEl) => {
                const { index } = userDataEl;

                state.data[index] = { ...state.data[index], userData: userDataEl }
            })
        },
    },
})

// Actions
export const { setIdosPublicData, setLiveIdoUserData } = idoSlice.actions

// Thunks
export const fetchIdoPublicDataAsync = () => async (dispatch) => {
    // fetch data from contract
    //   const farms = await fetchFarms()
    // const response = await getData(dispatch);
    const response = await fetchIdo();
    console.log(response, "response ido")
    dispatch(setIdosPublicData(response))
}
export const fetchIDOUserDataASYNC = (account) => async (dispatch) => {
    const userFarmAllowances = await fetchIdoUserData(account);
    const idoAllowance = await fetchIdoAllowance(account);
    const arrayOfUserDataObjects = userFarmAllowances.map((farmAllowance, index) => {
        return {
            index,
            contribution: userFarmAllowances[index],
            allowance:idoAllowance[index],
        }
    });

    dispatch(setLiveIdoUserData({ arrayOfUserDataObjects }))
}

export default idoSlice.reducer
