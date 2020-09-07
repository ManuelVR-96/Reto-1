const axios = require('axios').default;

const getData = () => {
    return axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json')
    .then( response => {
        return response.data
    })
   
}
module.exports = {
    getData : getData
}