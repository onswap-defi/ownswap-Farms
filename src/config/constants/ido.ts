import moment from 'moment'
import contracts from './contracts'
import { IDOConfig } from './types'


const idos: IDOConfig[] = [
    {
        contractAddress: "0x3146959b7F7717303fBbb9641175F0e55C481fc3",
        tokenAddress: "0xc269204a6a159fbc1c6a24e82473d2c96d52bdf3",
        buyingToken: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
        
    },
    {
        contractAddress: "0x4262eF2cF8B0239e0E77db4B25f6fF687A92f3e2",
        tokenAddress: "0xc269204a6a159fbc1c6a24e82473d2c96d52bdf3",
        buyingToken: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
        
    },
    // {
    //     startDate: moment().format("YYYY-DD-MM"),
    //     endDate: moment().format("YYYY-DD-MM"),
    //     productName: "trail2",
    //     productLogo:"",
    //     contractAddress: "0xA48Ca10b0aEE1DE6832EF0264ee49D1D0d5b9444",
    //     tokenAddress: "0xF8F81c94592950f2F6F0C60c45E0742D876780A4",
    //     buyingToken: "0xF8F81c94592950f2F6F0C60c45E0742D876780A4",
    //     status: "NOT ACTIVE",
    //     price: 10,
    //     websiteLink: "https://www.google.com",
    //     description:"testDescription ciafii asufiysdh fuisdfy sdiudsyfh sudifysd fuidsyf sduifysd fusdyf sdf uidsyfs dfyuisdyf sdifya fyhidsjk suigyf sghsifjg fuidghs kjgh ",
    //     socialMedia: {
    //         telegram: "https://telegram.com",
    //         facebook: "",
    //         youtube: "",
    //         twitter: "",
    //         redit: "",
    //         medium: ""
    //     }
    // }
]

export default idos
