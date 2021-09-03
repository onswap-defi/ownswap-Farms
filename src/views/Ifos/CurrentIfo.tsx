import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pancakeswap-libs/uikit'
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'
import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid #000;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;
  align-items:center;
  margin:auto;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`
const Takepart = styled.div`

background:${({ theme }) => theme.colors.textDisabled};
text-align:center;
background-image:url('/images/lightCount.png');
background-repeat:no-repeat;
background-size:100px;
background-position:center 64%;
${({ theme }) => theme.mediaQueries.lg} {
 padding:2%;
 background-image:url('/images/lightCount.png');
background-repeat:no-repeat;
background-size:82px;
background-position:center 64%;
 background-size:82px;
}
`;
const Box = styled.div`

border-radius:15px;
background:${({ theme }) => theme.colors.card};
box-shadow:0 0 12px 2px ${({ theme }) => theme.colors.textSubtle};
min-width:150px;
padding:5%;
vertical-align:middle;
text-align:left;
`;
const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const Ifo = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <IfoCards isSingle>
        <IfoCard ifo={activeIfo} />
      </IfoCards>
      <Takepart>
        <Text color="text" style={{ fontSize: "2.2em", marginBottom: "20px" }}>
          How To Take Part
        </Text>
        {/* <img src="/images/darkCount.png" alt="count" style={{ position: "absolute", display: "block", margin: "auto", marginLeft: `${"45%"}`, marginTop: "44px", height:"25%" }} /> */}

        <table style={{ width: "100%" }}>
          <tr style={{ width: "100%", height: "200px" }}>
            <td style={{ width: "33%" }} />
            <td />
            <td style={{ width: "33%", verticalAlign: "middle", paddingLeft: "2%" }}>
              <Box>
                <Text color="textSubtle" mb="10px">
                  Connect Bsc Wallet
                </Text>
                <Text color="textSubtle">
                  you&apos;ll need a Binance smart chain wallet to take part
                </Text>
                <UnlockButton size="sm" style={{ marginTop: "15px", minWidth: "128px", fontSize: "0.9em" }} />
              </Box>
            </td>
          </tr>
          <tr style={{ width: "100%", height: "200px" }}>
            <td style={{ width: "33%", verticalAlign: "middle", paddingRight: "2%" }}>
              <Box>
                <Text color="textSubtle" mb="10px">
                  Get BNB
                </Text>
                <Text color="textSubtle">
                  BNB is needed to take part in the token sale, if you do not have BNB you can purchase from the exchange.
                </Text>
                <Button onClick={() => window.open('https://exchange.pharmaswap.finance')} size="sm" style={{ marginTop: "15px", minWidth: "128px", fontSize: "0.9em" }}>Purchase BNB</Button>
              </Box>
            </td>
            <td />
            <td style={{ width: "33%" }} />

          </tr>
          <tr style={{ width: "100%", height: "200px" }}>
            <td style={{ width: "33%" }} />
            <td />
            <td style={{ width: "33%", verticalAlign: "middle", paddingLeft: "2%" }}>
              <Box>
                <Text color="textSubtle" mb="10px">
                  Deposit BNB
                </Text>
                <Text color="textSubtle">
                  Deposit BNB above only during a live sale. This sale segment we will only accept BNB please don&apos;t not commit any other token
                </Text>
              </Box>
            </td>
          </tr>
          <tr style={{ width: "100%", height: "200px" }}>
            <td style={{ width: "33%", verticalAlign: "middle", paddingRight: "2%" }}>
              <Box>
                <Text color="textSubtle" mb="10px">
                  Claim Your Tokens
                </Text>
                <Text color="textSubtle">
                  After the sale finishes, you can claim your tokens
                </Text>
              </Box>
            </td>
            <td />
            <td style={{ width: "33%" }} />

          </tr>
        </table>
      </Takepart>
      <LaunchIfoCallout>
        {/* <div>
          <Title as="h2">{TranslateString(592, 'How to take part')}</Title>
          <Heading mb="16px">{TranslateString(594, 'Before Sale')}:</Heading>
          <List>
            <li>{TranslateString(596, 'Buy CAKE and BNB tokens')}</li>
            <li>{TranslateString(598, 'Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity')}</li>
          </List>
          <Flex mb="16px">
            <LinkExternal href="https://exchange.pancakeswap.finance/#/swap" mr="16px">
              {TranslateString(999, 'Buy cake')}
            </LinkExternal>
            <LinkExternal href="https://exchange.pancakeswap.finance/#/add/ETH/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82">
              {TranslateString(999, 'Get LP tokens')}
            </LinkExternal>
          </Flex>
          <Heading mb="16px">{TranslateString(600, 'During Sale')}:</Heading>
          <List>
            <li>{TranslateString(602, 'While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens')}</li>
          </List>
          <Heading mb="16px">{TranslateString(604, 'After Sale')}:</Heading>
          <List>
            <li>{TranslateString(606, 'Claim the tokens you bought, along with any unspent funds.')}</li>
            <li>{TranslateString(608, 'Done!')}</li>
          </List>
          <Text as="div" pt="16px">
            <Button
              as="a"
              variant="secondary"
              href="https://docs.pancakeswap.finance/core-products/ifo-initial-farm-offering"
            >
              {TranslateString(610, 'Read more')}
            </Button>
          </Text>
        </div> */}
        <div style={{ width: "100%", display: "block", margin: "auto" }}>
          <Image src="/images/ifo-bunny.svg" alt="ifo bunny" width={436} height={406} responsive />
          <div>
            <Title as="h2">{TranslateString(512, 'Want to launch your own IFO?')}</Title>
            <Text mb={3} color="#000">
              {TranslateString(
                514,
                'Launch your project with PancakeSwap, Binance Smart Chain’s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.',
              )}
            </Text>
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLScGdT5rrVMr4WOWr08pvcroSeuIOtEJf1sVdQGVdcAOqryigQ/viewform"
              external
            >
              {TranslateString(516, 'Apply to launch')}
            </Button>
          </div>
        </div>
      </LaunchIfoCallout>
    </div>
  )
}

export default Ifo