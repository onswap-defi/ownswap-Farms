/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
// import farmsConfig from 'config/constants/farms'
import idos from 'config/constants/ido'
import { IDOConfig } from 'config/constants/types'

import { IDOState, IDO } from '../types'

const initialState: IDOState = { data: [...idos] }

export const idoSlice = createSlice({
    name: 'IDOS',
    initialState,
    reducers: {
        setIdosPublicData: (state, action) => {
            const liveFarmsData: IDOConfig[] = action.payload
            state.data = state.data.map((ido) => {
                const liveFarmData = liveFarmsData.find((f) => f.tokenAddress === ido.tokenAddress)
                return { ...ido, ...liveFarmData }
            })
        },
        // setIdoUserData: (state, action) => {
        //   const { arrayOfUserDataObjects } = action.payload
        //   arrayOfUserDataObjects.forEach((userDataEl) => {
        //     const { index } = userDataEl
        //     state.data[index] = { ...state.data[index], userData: userDataEl }
        //   })
        // },
    },
})

// Actions
export const { setIdosPublicData } = idoSlice.actions

// Thunks
export const fetchIdoPublicDataAsync = () => async (dispatch) => {
    // fetch data from contract
    //   const farms = await fetchFarms()
    dispatch(setIdosPublicData(idos))
}
// export const fetchFarmUserDataAsync = (account) => async (dispatch) => {
//   const userFarmAllowances = await fetchFarmUserAllowances(account)
//   const userFarmTokenBalances = await fetchFarmUserTokenBalances(account)
//   const userStakedBalances = await fetchFarmUserStakedBalances(account)
//   const userFarmEarnings = await fetchFarmUserEarnings(account)

//   const arrayOfUserDataObjects = userFarmAllowances.map((farmAllowance, index) => {
//     return {
//       index,
//       allowance: userFarmAllowances[index],
//       tokenBalance: userFarmTokenBalances[index],
//       stakedBalance: userStakedBalances[index],
//       earnings: userFarmEarnings[index],
//     }
//   })

//   dispatch(setFarmUserData({ arrayOfUserDataObjects }))
// }

export default idoSlice.reducer
