import React, { useEffect, useState } from 'react'
import { Route, useRouteMatch, useParams } from 'react-router-dom'
import Container from 'components/layout/Container'
import { ethers } from 'ethers'
import moment from 'moment'
import { provider } from 'web3-core'
import { useIdoFromContract, useIDOs } from 'state/hooks'
import erc20 from 'config/abi/erc20.json'
import idoAbi from 'config/abi/ido.json'
import { CardBody, Card, BaseLayout, Heading, Flex, Text, Button, Progress, Input } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import GetImage from 'views/Ido/Components/GetImage'
import { useCurrentTime } from 'hooks/useTimer'
import { useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'
import { fetchIDOUserDataASYNC } from 'state/idos'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import { getContract } from 'utils/web3'
import { approve } from 'utils/callHelpers'
import BigNumber from 'bignumber.js'



const Cards = styled(BaseLayout)`
align-items: stretch;
justify-content: stretch;
margin-bottom: 0px;

& > div {
  grid-column: span 6;
  width: 100%;
}

${({ theme }) => theme.mediaQueries.sm} {
  & > div {
    grid-column: span 8;
    margin-bottom: 48px;
  }
}

${({ theme }) => theme.mediaQueries.lg} {
  & > div {
    grid-column: span 6;
    margin-bottom: 0px;

  }
}
`

const OneIdo = ({ contractAddress }) => {

    const Ido = useIdoFromContract(contractAddress);
    const [inputValue, setinputValue] = useState("");
    const [tokens, settokens] = useState("");

    const date = moment.now()

    // console.log(contractAddress);
    const currentMillis = useCurrentTime()
    const { account, ethereum }: { account: string; ethereum: provider } = useWallet()

    const BuyingTokenContract = getContract(erc20, Ido.buyingToken);
    const IDOContract = getContract(idoAbi, Ido.contractAddress);
    console.log(account, ethereum, "contract");


    const handleApproval = async () => {
        console.log(account.toLowerCase(), Ido.contractAddress, BuyingTokenContract, "account");
        const tx = await approve(BuyingTokenContract, IDOContract, account);
        console.log(tx, "transaction")
    }


    const CheckDate = async () => {


        if (Ido.nextClaim ) {
            // window.open(`/ido/${Ido.contractAddress}`)

            console.log("in If");

            return false

        }
        console.log("outside");

        return true
    }


    const handledepositAmount = async () => {
        if (inputValue) {
            const amount = parseInt(inputValue) * 10 ** 18;
            console.log(account, "handleDepositAmount")
            const finalAmount = amount.toString();
            await IDOContract.methods.buyToken(finalAmount).send({ from: account });
        }
        else {
            alert("Enter Input Value")
        }
    }


    const handleWithDrawlAllTokens = async () => {
        await IDOContract.methods.withdrawAllprojectToken().send({
            from: account
        })
    }

    const handleClaimInstallments = async () => {
        await IDOContract.methods.claimInstallments().send({
            from: account
        })
    }

    const handleWithdrawl = async () => {
        await IDOContract.methods.claimTokens().send({ from: account });

    }

    const calculateToken = async (value) => {
        // const amount = parseInt(value) * 10 ** 18;
        console.log(account, "handleDepositAmount")
        // const finalAmount = value.toString();
        // const tokensFetch = await IDOContract.methods.calculateToken(finalAmount).call();
        const tokensFetch = parseInt(value) * (Ido?.price / 10 ** 18)
        // const finalToken = new BigNumber(tokensFetch).toNumber() / 10 ** 18;
        settokens(tokensFetch.toString());
    }

    const dispatch = useDispatch()
    const { fastRefresh } = useRefresh()
    useEffect(() => {
        if (account) {
            dispatch(fetchIDOUserDataASYNC(account))
        }
    }, [account, dispatch, fastRefresh])

    return (
        <Page>

            {
                Ido &&

                <Card mb="30px" style={{ cursor: "pointer" }}>
                    <CardBody style={{ marginBottom: "0px" }}>
                        <Cards>
                            <div >
                                <div style={{ display: "block", marginRight: "auto", width: "200px" }}>
                                    <GetImage img={Ido?.productLogo} height="100px" />
                                </div>
                                <Heading >
                                    {Ido.productName}
                                </Heading>
                                <Flex mb="10px" style={{ width: "100%" }}>

                                    <Text>{Ido?.description || "This is a IDO"}</Text>
                                </Flex>
                            </div>
                            <div style={{ display: "grid" }}>
                                <Heading style={{ marginRight: "auto" }}>
                                    Social Media
                                </Heading>
                                <Flex style={{ width: "100%" }}>
                                    {Ido?.socialMedia?.telegram && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.telegram) }}>
                                        <img alt="telegram" src="https://cdn.icon-icons.com/icons2/2201/PNG/512/telegram_logo_circle_icon_134012.png" style={{ width: "40px" }} />
                                    </Text>}
                                    {Ido?.socialMedia?.facebook && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.facebook) }}>

                                        <img alt="facebook" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" style={{ width: "100%", marginTop: "5px" }} />
                                    </Text>}
                                    {Ido?.socialMedia?.youtube && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.youtube) }}>
                                        <img alt="youtube" src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png" style={{ width: "40px" }} />
                                    </Text>}
                                    {Ido?.socialMedia?.twitter && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.twitter) }}>
                                        <img alt="twitter" src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png" style={{ width: "40px" }} />
                                    </Text>}
                                    {Ido?.socialMedia?.redit && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.redit) }}>
                                        <img alt="redit" src="https://cdn.iconscout.com/icon/free/png-256/reddit-55-432536.png" style={{ width: "40px" }} />
                                    </Text>}
                                    {Ido?.socialMedia?.medium && <Text style={{ minWidth: "40px", maxWidth: "40px" }} onClick={() => { window.open(Ido.socialMedia.medium) }}>
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
                        <div style={{ marginTop: "30px" }}>
                            <Progress primaryStep={(Ido?.totalRaised / Ido?.target) * 100} />
                            {account && Ido?.idoSettled &&
                                <Flex mb="10px" style={{ width: "100%" }}>
                                    <Text style={{ width: "50%" }}>
                                        Next Claim
                                    </Text>
                                    {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                    <Heading style={{ marginLeft: "auto" }}>
                                        {
                                            Ido?.nextClaim
                                        }
                                    </Heading>
                                </Flex>

                            }
                            {/* {currentMillis} */}
                            {account && date.toString() < Ido.endDate && <Input style={{ marginTop: "20px" }} placeholder="Enter Value To Invest" onChange={(e) => { setinputValue(e.target.value); calculateToken(e.target.value) }} />}
                            {/* {tokens && <div>
                                you will get {tokens} amount of tokens by {inputValue} {Ido?.buyingTokenSymbol}
                            </div>
                            } */}
                            {account && date.toString() < Ido.endDate && Ido?.userData?.allowance.toString() !== "0" && <Button mt="30px" disabled={Ido?.idoSettled} fullWidth onClick={() => {
                                if (Ido?.idoSettled) {
                                    // handleWithdrawl()
                                } else {
                                    handledepositAmount()
                                }
                            }
                            }>
                                Deposit
                            </Button>}

                            {account &&
                                <Button mt="30px" disabled={!Ido?.idoSettled} fullWidth onClick={() => {
                                    if (Ido?.idoSettled) {
                                        handleWithdrawl()
                                    } else {
                                        // handledepositAmount()
                                    }
                                }
                                }>
                                    Withdraw
                                </Button>
                            }
                            {
                                date.toString() > Ido.endDate && <div className='' style={{ marginTop: "30px", fontSize: "2rem", textAlign: "center" }}>
                                    Ido Ended
                                </div>
                            }
                            {account && date.toString() < Ido.endDate && Ido?.userData?.allowance.toString() === "0" && <Button mt="30px" fullWidth onClick={() => handleApproval()}>
                                Approve Contract
                            </Button>}
                            {!account && <UnlockButton fullWidth mt="10px" />
                            }


                        </div>
                        <div>
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    Price
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    {Ido?.price / 10 ** 18}
                                </Heading>
                            </Flex>
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    To Raise
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    {Ido?.target}
                                </Heading>
                            </Flex>
                            {/* <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    Max Investment
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> 
                                <Heading style={{ marginLeft: "auto" }}>
                                    -
                                </Heading>
                            </Flex> */}
                            {/* <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    Naut Requirement
                                </Text>
                                // {/* <GetImage img={singleIDO.productLogo} height="100px" /> 
                                <Heading style={{ marginLeft: "auto" }}>
                                    -
                                </Heading>
                            </Flex> */}
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    Your Contribution
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    {Ido?.userData?.contribution / 10 ** 18}
                                </Heading>
                            </Flex>
                            <Flex mb="10px" style={{ width: "100%" }}>
                                <Text style={{ width: "50%" }}>
                                    Total Raised
                                </Text>
                                {/* <GetImage img={singleIDO.productLogo} height="100px" /> */}
                                <Heading style={{ marginLeft: "auto" }}>
                                    {Ido?.totalRaised}
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

            {
                account && Ido.projectOwner === account && <Card mt="20px">
                    <CardBody>
                        <Cards>
                            <div style={{ width: "100%" }}>
                                <Flex style={{ width: "100%", fontSize: "1.5rem" }}>
                                    <div>
                                        Total Token :
                                    </div>
                                    <div>
                                        {Ido?.totalFundLocked || 0}
                                    </div>
                                </Flex>
                                <Flex mt="10px" style={{ width: "100%", fontSize: "1.5rem" }}>
                                    <div>
                                        Total Claimed :
                                    </div>
                                    <div >
                                        {Ido?.totalFundClaimed || 0}
                                    </div>
                                </Flex>
                            </div>
                            <div style={{ width: "100%" }}>
                                <Flex style={{ width: "100%", fontSize: "1.5rem" }}>
                                    <div>
                                        Total LpTokens :
                                    </div>
                                    <div>
                                        {Ido?.totalLpLocked || 0}
                                    </div>
                                </Flex>
                                <Flex mt="10px" style={{ width: "100%", fontSize: "1.5rem" }}>
                                    <div>
                                        Total LpClaimed :
                                    </div>
                                    <div >
                                        {Ido?.totalLpClaimed || 0}
                                    </div>
                                </Flex>
                            </div>
                        </Cards>

                        <div style={{ textAlign: "center", width: "100%", fontSize: "1.2rem" }}>
                            {Ido.nextClaim ? moment(Ido.nextClaim).format("YYYY-MM-DD") : ""}
                        </div>
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <Button disabled={date.toString() < Ido.nextClaim} mt="20px" onClick={() => {
                                handleClaimInstallments()
                            }} fullWidth>
                                Claim Installments
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            }

            {
                account && Ido.owner === account && <Card mt="20px">
                    <CardBody>
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <Button onClick={() => {
                                handleWithDrawlAllTokens()
                            }} fullWidth>
                                Withdraw All Tokens
                            </Button>
                        </div>
                        {/* <Cards>
                            <div>
                                <Button onClick={() => {
                                    handleWithDrawlAllTokens()
                                }} fullWidth>
                                    Withdraw All Tokens
                                </Button>
                            </div>
                        </Cards> */}
                    </CardBody>
                </Card>
            }

        </Page>
    )
}

export default OneIdo
