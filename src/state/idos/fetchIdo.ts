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

const fetchIdo = async () => {
  const data = await Promise.all(
    farmsConfig.map(async (farmConfig) => {
      const lpAdress = farmConfig.contractAddress;
      const calls = [
        {
          address: farmConfig.contractAddress,
          name: 'projectURI',
          params: [],
        },
        {
          address: farmConfig.contractAddress,
          name: 'startDate',
          params: [],
        },
        {
          address: farmConfig.contractAddress,
          name: 'endDate',
          params: [],
        },
        {
          address: farmConfig.contractAddress,
          name: 'price',
          params: [],
        },
        {
          address: farmConfig.contractAddress,
          name: 'paymentToken',
          params: [],
        },
        {
          address: farmConfig.contractAddress,
          name: 'raisedTotal',
          params: [],
        },
        {
          address: farmConfig.contractAddress,
          name: 'idoSettled',
          params: [],
        },
        {
          address: farmConfig.contractAddress,
          name: 'nextClaim',
          params: [],
        },
        {
          address: farmConfig.contractAddress,
          name: 'target',
          params: [],
        },
      ]

      const [
        projectURI,
        startDate,
        endDate,
        price,
        paymentToken,
        raisedTotal,
        idoSettled,
        nextClaim,
        targetToRaise
      ] = await multicall(idoAbi, calls)

      console.log(projectURI, new BigNumber(startDate).toNumber(), paymentToken[0], "metadata");

      const response = await ipfs.get(`/ipfs/${projectURI[0]}`);
      const dataIdo = response[0].content;
      console.log(JSON.parse(dataIdo.toString('utf8')), "response")
      const obj = JSON.parse(dataIdo.toString('utf8'));
      console.log(new BigNumber(price).toNumber(), "obj");
      if (obj.socialMedia) {
        obj.socialMedia = JSON.parse(obj.socialMedia);

      }
      obj.price = new BigNumber(price).toNumber();
      obj.startDate = new BigNumber(startDate).toNumber()*1000
      obj.endDate = new BigNumber(endDate).toNumber()*1000
      obj.totalRaised = new BigNumber(raisedTotal).toNumber()/10**18
      obj.idoSettled = idoSettled[0];
      obj.nextClaim = new BigNumber(nextClaim).toNumber()
      obj.target = new BigNumber(targetToRaise).toNumber()/10**18
      const call = [
        {
          address:paymentToken[0],
          name:"symbol",
          params: [],
        },
        
      ]

      const [symbol] = await multicall(erc20,call);
      
      console.log(startDate,"symbol")

      obj.buyingTokenSymbol = symbol[0];

      return {
        ...obj,
      }
    }),
  )
  return data
}

export default fetchIdo
