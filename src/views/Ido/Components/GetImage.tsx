import React, { useEffect, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import Container from 'components/layout/Container'
import { useIDOs } from 'state/hooks'
import { CardBody, Card, BaseLayout, Heading } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import ipfs from 'ipfs'

const GetImage = ({ img, height }) => {


    const [Image, setImage] = useState("")
    const [loading, setloading] = useState(false);


    const getImage = async(hash) => {
        const result = await ipfs.get(`/ipfs/${hash}`);
        setloading(false)
        setImage(result[0].content);
    }


    useEffect(() => {
        setloading(true)
        if (img) {console.log(img); getImage(img) }

    }, [img])

    return (
        <>
            {
                loading && <div>Loading...</div>
            }
            {!loading && <img alt="idologo" src={Image} style={{ display: "block", margin: "auto", height: `${height}`, maxHeight: "500px" }} />}
        </>
    )
}

export default GetImage
