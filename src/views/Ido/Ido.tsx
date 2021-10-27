import React from 'react'
import moment from 'moment'
import { Route, useRouteMatch } from 'react-router-dom'
import Container from 'components/layout/Container'
import { useIDOs } from 'state/hooks'
import { CardBody, Card, BaseLayout, Heading, Flex, Text, Button, Progress } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import GetImage from './Components/GetImage'




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
const status = (ido) => {
  const date = moment.now()
  // return (if (date.toString() > singleIDO.startDate && date.toString() < singleIDO.endDate) { "Active" } else { date.toString() < singleIDO.startDate ? "Upcoming" : "" }
  if (date.toString() > ido.startDate && date.toString() < ido.endDate) {
    return "Active"
  }

  if (date.toString() < ido.startDate) {
    return "Upcoming"
  }
  return "Ended"

}


const Idos = () => {





  const Ido = useIDOs()
  const date = moment.now()






  return (
    <Page>
      <Cards>
        {Ido && Ido.length > 0 && Ido.map((singleIDO) => {
          // console.log(singleIDO,"single Ido")
          return (
            <Card >
              <CardBody>
                <Flex mb="10px" style={{ width: "100%" }}>
                  <div style={{ width: "100px" }}>
                    <GetImage img={singleIDO.productLogo} height="100px" />
                  </div>
                  <Heading style={{ marginLeft: "auto" }}>
                    {singleIDO.productName}
                  </Heading>
                </Flex>

                <div style={{ marginBottom: "20px" }}>
                  <Progress primaryStep={singleIDO?.totalRaised / singleIDO?.totalRaised} />
                </div>
                <Flex mb="10px" style={{ width: "100%" }}>
                  <Heading style={{ marginRight: "auto" }}>
                    Buying Token
                  </Heading>
                  <Heading style={{ marginLeft: "auto" }}>
                    {singleIDO.buyingTokenSymbol}
                  </Heading>
                  {/* <Text>{singleIDO.description}</Text> */}
                </Flex>
                {/* <div>
                  Buying Token {singleIDO.buyingTokenSymbol}
                </div> */}
                <Flex mb="10px" style={{ width: "100%" }}>
                  <Heading style={{ marginRight: "auto" }}>
                    Start Date
                  </Heading>
                  <Heading style={{ marginLeft: "auto" }}>
                    {moment(singleIDO.startDate).format("YYYY-MM-DD hh:mm a")}
                  </Heading>
                  {/* <Text>{singleIDO.description}</Text> */}
                </Flex>
                <Flex mb="10px" style={{ width: "100%" }}>
                  <Heading style={{ marginRight: "auto" }}>
                    End Date
                  </Heading>
                  <Heading style={{ marginLeft: "auto" }}>
                    {moment(singleIDO.endDate).format("YYYY-MM-DD hh:mm a")}
                  </Heading>
                  {/* <Text>{singleIDO.description}</Text> */}
                </Flex>
                <Flex mb="10px" style={{ width: "100%" }}>
                  {/* <GetImage img="" height="200px" />
                  <Heading style={{marginLeft:"auto"}}>
                    {singleIDO.productName}
                  </Heading> */}
                  <Text>{singleIDO.description}</Text>
                </Flex>
                <Heading style={{ marginRight: "auto" }}>
                  Social Media
                </Heading>
                <Flex mb="10px" style={{ width: "100%" }}>
                  {singleIDO?.socialMedia?.telegram && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(singleIDO?.socialMedia.telegram) }}>
                    <img alt="telegram" src="https://cdn.icon-icons.com/icons2/2201/PNG/512/telegram_logo_circle_icon_134012.png" style={{ width: "40px" }} />
                  </Text>}
                  {singleIDO?.socialMedia?.facebook && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(singleIDO?.socialMedia.facebook) }}>
                    <img alt="facebook" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" style={{ width: "60px" }} />
                  </Text>}
                  {singleIDO?.socialMedia?.youtube && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(singleIDO?.socialMedia.youtube) }}>
                    <img alt="youtube" src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png" style={{ width: "40px" }} />
                  </Text>}
                  {singleIDO?.socialMedia?.twitter && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(singleIDO?.socialMedia.twitter) }}>
                    <img alt="twitter" src0-="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png" style={{ width: "40px" }} />
                  </Text>}
                  {singleIDO?.socialMedia?.redit && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(singleIDO?.socialMedia.redit) }}>
                    <img alt="redit" src="https://cdn.iconscout.com/icon/free/png-256/reddit-55-432536.png" style={{ width: "40px" }} />
                  </Text>}
                  {singleIDO?.socialMedia?.medium && <Text style={{ minWidth: "50px" }} onClick={() => { window.open(singleIDO?.socialMedia.medium) }}>
                    <img alt="medium" src="https://www.pinclipart.com/picdir/middle/195-1952407_medium-icons-waag-society-clipart.png" style={{ width: "40px" }} />
                  </Text>}
                  <Text style={{ minWidth: "50px" }} onClick={() => { window.open(singleIDO.websiteLink) }}>
                    <img alt="medium" src="http://cdn.onlinewebfonts.com/svg/img_542923.png" style={{ width: "40px" }} />
                  </Text>
                </Flex>
                <Button variant="primary" fullWidth as="a" onClick={() => { if (date.toString() > singleIDO.endDate) { alert("ido ended") } else { window.open(`/ido/${singleIDO.contractAddress}`, "_self") } }} style={{ cursor: "pointer" }} >
                  {status(singleIDO)}
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </Cards>
    </Page>
  )
}

export default Idos
