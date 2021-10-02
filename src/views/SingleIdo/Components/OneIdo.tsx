import React, { useEffect, useState } from 'react'
import { Route, useRouteMatch, useParams } from 'react-router-dom'
import Container from 'components/layout/Container'
import { useIdoFromContract, useIDOs } from 'state/hooks'
import { CardBody, Card, BaseLayout, Heading, Flex, Text, Button, Progress , Input} from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import GetImage from 'views/Ido/Components/GetImage'
import { useCurrentTime } from 'hooks/useTimer'


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

const OneIdo = ({ contractAddress }) => {

    const Ido = useIdoFromContract(contractAddress)
    // console.log(contractAddress);
    const currentMillis = useCurrentTime()


    return (
        <Page>

            {
                Ido &&

                <Card mb="30px" onClick={() => { window.open(`/ido/?contractAddress=${Ido.contractAddress}`) }} style={{ cursor: "pointer" }}>
                    <CardBody>
                        <Cards>
                            <div >
                                <div style={{ display: "block", marginRight: "auto", width: "200px" }}>
                                    <GetImage img={Ido.productLogo} height="100px" />
                                </div>
                                <Heading >
                                    {Ido.productName}
                                </Heading>
                                <Flex mb="10px" style={{ width: "100%" }}>

                                    <Text>{Ido.description}</Text>
                                </Flex>
                            </div>
                            <div style={{ display: "grid" }}>
                                <Heading style={{ marginRight: "auto" }}>
                                    Social Media
                                </Heading>
                                <Flex style={{ width: "100%" }}>
                                    {Ido.socialMedia.telegram && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.telegram) }}>
                                        <img alt="telegram" src="https://cdn.icon-icons.com/icons2/2201/PNG/512/telegram_logo_circle_icon_134012.png" style={{ width: "40px" }} />
                                    </Text>}
                                    {Ido.socialMedia.facebook && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.facebook) }}>

                                        <img alt="facebook" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" style={{ width: "100%", marginTop: "5px" }} />
                                    </Text>}
                                    {Ido.socialMedia.youtube && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.youtube) }}>
                                        <img alt="youtube" src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png" style={{ width: "40px" }} />
                                    </Text>}
                                    {Ido.socialMedia.twitter && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.twitter) }}>
                                        <img alt="twitter" src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png" style={{ width: "40px" }} />
                                    </Text>}
                                    {Ido.socialMedia.redit && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.redit) }}>
                                        <img alt="redit" src="https://cdn.iconscout.com/icon/free/png-256/reddit-55-432536.png" style={{ width: "40px" }} />
                                    </Text>}
                                    {Ido.socialMedia.medium && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.medium) }}>
                                        <img alt="medium" src="https://www.pinclipart.com/picdir/middle/195-1952407_medium-icons-waag-society-clipart.png" style={{ width: "40px" }} />
                                    </Text>}
                                </Flex>
                                <Button variant="primary" fullWidth as="a" href={Ido.websiteLink}>
                                    Visit website
                                </Button>
                            </div>
                        </Cards>

                    </CardBody>
                </Card>

            }
            {Ido && <Card>
                <CardBody>
                    <Cards>
                        <div style={{marginTop:"30px"}}>
                            <Progress />
                            {/* {currentMillis} */}
                            <Input style={{marginTop:"20px"}} placeholder="Enter Value To Invest"  />
                            <Button mt="30px" fullWidth>
                                Deposit
                            </Button>
                            <Button mt="30px" fullWidth>
                                Approve Contract
                            </Button>
                        </div>
                        <div>
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    For Sale
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    -
                                </Heading>
                            </Flex>
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    To Raise
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    -
                                </Heading>
                            </Flex>
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    Max Investment
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    -
                                </Heading>
                            </Flex>
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    Naut Requirement
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    -
                                </Heading>
                            </Flex>
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    Your Contribution
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    -
                                </Heading>
                            </Flex>
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    Total Raised (% of target)
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    -
                                </Heading>
                            </Flex>
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    Vesting Percentage
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    -
                                </Heading>
                            </Flex>
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    Vesting Time
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    -
                                </Heading>
                            </Flex>

                            <Flex>
                                <Text>
                                    Your one-stop DeFi Social Platform Track, trade, discover, analyse and more all on one platform.
                                </Text>
                            </Flex>
                        </div>
                    </Cards>
                </CardBody>
            </Card>}
        </Page>
    )
}

export default OneIdo
