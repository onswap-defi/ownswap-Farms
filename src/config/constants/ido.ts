import moment from 'moment'
import contracts from './contracts'
import { IDOConfig } from './types'


const idos: IDOConfig[] = [
    {
        startDate: moment().format("YYYY-DD-MM"),
        productLogo:"Qme7tYgS2tjRn2JsEBEnkuqVrrCLTcgXJF9V966HqtjDsg",
        endDate: moment().format("YYYY-DD-MM"),
        productName: "trail1",
        contractAddress: "0x3A3AC376CE597BCb91925805645F91Bc164bae01",
        tokenAddress: "0x3A3AC376CE597BCb91925805645F91Bc164bae01",
        buyingToken: "0x3A3AC376CE597BCb91925805645F91Bc164bae01",
        status: "NOT ACTIVE",
        price: 10,
        websiteLink: "https://www.google.com",
        description:"testDescription jhdsg shhfggf shfgd<fh dsfjsdhfjskdhfydh gsfjkghsjkfh dskhfdsjkhgjfk hjdskghfhglsfkjdsjkl fhgkjfh sdkjhsdjkhn;alsksjdk sdjhfkj jkjj f sdjkhf jdfhds fdsf dskh dshfkjk f dlkf sd",
        socialMedia: {
            telegram: "https://telegram.com",
            facebook: "https://facebook.com",
            youtube: "",
            twitter: "https://facebook.com",
            redit: "https://facebook.com",
            medium: "https://facebook.com"
        }

    },
    {
        startDate: moment().format("YYYY-DD-MM"),
        endDate: moment().format("YYYY-DD-MM"),
        productName: "trail2",
        productLogo:"",
        contractAddress: "0xF8F81c94592950f2F6F0C60c45E0742D876780A4",
        tokenAddress: "0xF8F81c94592950f2F6F0C60c45E0742D876780A4",
        buyingToken: "0xF8F81c94592950f2F6F0C60c45E0742D876780A4",
        status: "NOT ACTIVE",
        price: 10,
        websiteLink: "https://www.google.com",
        description:"testDescription ciafii asufiysdh fuisdfy sdiudsyfh sudifysd fuidsyf sduifysd fusdyf sdf uidsyfs dfyuisdyf sdifya fyhidsjk suigyf sghsifjg fuidghs kjgh ",
        socialMedia: {
            telegram: "",
            facebook: "",
            youtube: "",
            twitter: "",
            redit: "",
            medium: ""
        }
    }
]

export default idos
