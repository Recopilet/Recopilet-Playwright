import{currentTime} from '../utils/util'

export const loginData= {
    email:"reitudev@gmail.com",
    password:"Test123!"
}
export const AccountData = {
    instituteName:"Bank Of america"+currentTime,
    streetName:"Street",
    unit:"123",
    zipCode:"12345",
    cityName:"Los agenelis",
    accountName:"Test Account"+currentTime,
    fourDigit:(Math.floor(Math.random() * (9999 - 1001 + 1) + 1001)).toString(),
    amount: (Math.floor(Math.random() * (19999 - 1001 + 1) + 1001)).toString()

}