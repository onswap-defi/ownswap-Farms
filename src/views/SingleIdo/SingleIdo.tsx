import React, { useEffect, useState } from 'react'
import { Route, useRouteMatch, useParams } from 'react-router-dom'
import Container from 'components/layout/Container'
import { useIdoFromContract, useIDOs } from 'state/hooks'
import { CardBody, Card, BaseLayout, Heading, Flex, Text, Button } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import GetImage from 'views/Ido/Components/GetImage'
import OneIdo from './Components/OneIdo'


const Cards = styled(BaseLayout)`
align-items: stretch;
justify-content: stretch;
margin-bottom: 48px;

& > div {
  grid-column: span 6;
  width: 100%;
}

${({ theme }) => theme.mediaQueries.sm} {
  & > div {
    grid-column: span 8;
  }
}

${({ theme }) => theme.mediaQueries.lg} {
  & > div {
    grid-column: span 6;
  }
}
`

const Idos = () => {

    // const Ido = useIDOs()
    // console.log(contractAddress);

    const [contractAddress, setcontractAddress] = useState("")

    useEffect(() => {
        
        const contractAdd = window.location.pathname.split("/")[2]
        // console.log(contractAdd,"cOntract");
        
        setcontractAddress(contractAdd)
        
    }, [])


    return (
        <Page>

            {contractAddress &&
                <OneIdo contractAddress={contractAddress} />

                //     <Card onClick={() => { window.open(`/ido/?contractAddress=${Ido.contractAddress}`) }} style={{ cursor: "pointer" }}>
                //         <CardBody>
                //             <Flex mb="10px" style={{ width: "100%" }}>
                //                 <GetImage img="" height="200px" />
                //                 <Heading style={{ marginLeft: "auto" }}>
                //                     {Ido.productName}
                //                 </Heading>
                //             </Flex>
                //             <Flex mb="10px" style={{ width: "100%" }}>
                //                 <Heading style={{ marginRight: "auto" }}>
                //                     Start Date
                //                 </Heading>
                //                 <Heading style={{ marginLeft: "auto" }}>
                //                     {Ido.startDate}
                //                 </Heading>

                //             </Flex>
                //             <Flex mb="10px" style={{ width: "100%" }}>
                //                 <Heading style={{ marginRight: "auto" }}>
                //                     End Date
                //                 </Heading>
                //                 <Heading style={{ marginLeft: "auto" }}>
                //                     {Ido.endDate}
                //                 </Heading>

                //             </Flex>
                //             <Flex mb="10px" style={{ width: "100%" }}>

                //                 <Text>{Ido.description}</Text>
                //             </Flex>
                //             <Heading style={{ marginRight: "auto" }}>
                //                 Social Media
                //             </Heading>
                //             <Flex mb="10px" style={{ width: "100%" }}>
                //                 {Ido.socialMedia.telegram && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(Ido.socialMedia.telegram) }}>
                //                     <img alt="telegram" src="https://cdn.icon-icons.com/icons2/2201/PNG/512/telegram_logo_circle_icon_134012.png" style={{ width: "40px" }} />
                //                 </Text>}
                //                 {Ido.socialMedia.facebook && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(Ido.socialMedia.facebook) }}>
                //                     <img alt="facebook" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" style={{ width: "60px" }} />
                //                 </Text>}
                //                 {Ido.socialMedia.youtube && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(Ido.socialMedia.youtube) }}>
                //                     <img alt="youtube" src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png" style={{ width: "40px" }} />
                //                 </Text>}
                //                 {Ido.socialMedia.twitter && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(Ido.socialMedia.twitter) }}>
                //                     <img alt="twitter" src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png" style={{ width: "40px" }} />
                //                 </Text>}
                //                 {Ido.socialMedia.redit && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(Ido.socialMedia.redit) }}>
                //                     <img alt="redit" src="https://cdn.iconscout.com/icon/free/png-256/reddit-55-432536.png" style={{ width: "40px" }} />
                //                 </Text>}
                //                 {Ido.socialMedia.medium && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(Ido.socialMedia.medium) }}>
                //                     <img alt="medium" src="https://www.pinclipart.com/picdir/middle/195-1952407_medium-icons-waag-society-clipart.png" style={{ width: "40px" }} />
                //                 </Text>}
                //             </Flex>
                //             <Button variant="primary" fullWidth as="a" href={Ido.websiteLink}>
                //                 Visit website
                //             </Button>
                //         </CardBody>
                //     </Card>

            }

        </Page>
    )
}

export default Idos
