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
      ]

      const [
        projectURI,
        startDate,
        endDate,
        price,
        paymentToken,
        raisedTotal,
        idoSettled,
        nextClaim
      ] = await multicall(idoAbi, calls)

      console.log(projectURI, startDate, paymentToken[0], "metadata");

      const response = await ipfs.get(`/ipfs/${projectURI[0]}`);
      const dataIdo = response[0].content;
      console.log(JSON.parse(dataIdo.toString('utf8')), "response")
      const obj = JSON.parse(dataIdo.toString('utf8'));
      console.log(new BigNumber(price).toNumber(), "obj");
      if (obj.socialMedia) {
        obj.socialMedia = JSON.parse(obj.socialMedia);

      }
      obj.price = new BigNumber(price).toNumber();
      obj.startDate = new BigNumber(startDate).toNumber()
      obj.endDate = new BigNumber(endDate).toNumber()
      obj.totalRaised = new BigNumber(raisedTotal).toNumber()
      obj.idoSettled = idoSettled[0];
      obj.nextClaim = new BigNumber(nextClaim).toNumber()
      const call = [
        {
          address:paymentToken[0],
          name:"symbol",
          params: [],
        },
        
      ]

      const [symbol] = await multicall(erc20,call);
      
      console.log(symbol[0],"symbol")

      obj.buyingTokenSymbol = symbol[0];

      return {
        ...obj,
      }
    }),
  )
  return data
}

export default fetchIdo
