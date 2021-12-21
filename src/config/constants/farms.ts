import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'TOKEN',
    lpAddresses: {
      97: '0xC269204a6a159FbC1C6a24E82473D2C96D52Bdf3',
      56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0', // AUTO-BNB LP
    },
    tokenSymbol: 'TOKEN',
    tokenAddresses: {
      97: '0xC269204a6a159FbC1C6a24E82473D2C96D52Bdf3',
      56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'TOKEN-BNB',
    lpAddresses: {
      97: '0xfd377f7cda76a3521b39e45a13ef904258863d48',
      56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0', // AUTO-BNB LP
    },
    tokenSymbol: 'TOKEN',
    tokenAddresses: {
      97: '0xC269204a6a159FbC1C6a24E82473D2C96D52Bdf3',
      56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 1,
  //   risk: 5,
  //   isTokenOnly: false,
  //   lpSymbol: 'TOKEN-BUSD',
  //   lpAddresses: {
  //     97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
  //     56: '0x0b54E1D5aD36569d4Da613043A2ae23EBf88Ceb1', // AUTO-BNB LP
  //   },
  //   tokenSymbol: 'TOKEN',
  //   tokenAddresses: {
  //     97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
  //     56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 2,
  //   risk: 5,
  //   isTokenOnly: false,
  //   lpSymbol: 'TOKEN-BNB',
  //   lpAddresses: {
  //     97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
  //     56: '0xC85f610DfacBF32d7173c4E53a56426F8313e479', // AUTO-BNB LP
  //   },
  //   tokenSymbol: 'TOKEN',
  //   tokenAddresses: {
  //     97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
  //     56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 3,
  //   risk: 5,
  //   isTokenOnly: false,
  //   lpSymbol: 'TOKEN-USDT',
  //   lpAddresses: {
  //     97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
  //     56: '0x2e57946720ba9e891854A7BB3E767bf8008559A8', // AUTO-BNB LP
  //   },
  //   tokenSymbol: 'TOKEN',
  //   tokenAddresses: {
  //     97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
  //     56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 4,
  //   risk: 5,
  //   isTokenOnly: false,
  //   lpSymbol: 'BUSD-USDT',
  //   lpAddresses: {
  //     97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
  //     56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00', // AUTO-BNB LP
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   risk: 5,
  //   isTokenOnly: false,
  //   lpSymbol: 'BUSD-BNB',
  //   lpAddresses: {
  //     97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // AUTO-BNB LP
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
