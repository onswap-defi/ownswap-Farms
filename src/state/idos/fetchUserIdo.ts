import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import moment from 'moment'
import idoAbi from 'config/abi/ido.json'
import masterchefABI from 'config/abi/masterchef.json'
import ipfs from 'ipfs'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
// import farmsConfig from 'config/constants/farms'
import farmsConfig from 'config/constants/ido'
import { QuoteToken } from '../../config/constants/types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID


export const fetchIdoUserData = async (account: string) => {
    const calls = farmsConfig.map((farm) => {

        return { address: farm.contractAddress, name: 'purchases', params: [account] }
    })

    const rawLpAllowances = await multicall(idoAbi, calls)
    const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
        return new BigNumber(lpBalance).toJSON()
    })
    return parsedLpAllowances
}



export const fetchIdoAllowance = async (account: string) => {
    const calls = farmsConfig.map((farm) => {

        return { address: farm.buyingToken, name: 'allowance', params: [account,farm.contractAddress] }
    })

    const rawLpAllowances = await multicall(erc20, calls)
    const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
        return new BigNumber(lpBalance).toJSON()
    })
    return parsedLpAllowances
}
