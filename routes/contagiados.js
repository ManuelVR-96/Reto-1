const {Router} = require('express');
const axios = require('axios').default;


const {getData} = require('../helpers/get_data')

const router = Router();

const {por_genero} = require("../helpers/discriminar")



// console.log(getData());

router.get("/", (req,res) => {

    const result = getData().then((data)=>{
        console.log(data[0])
        const data_discriminada = por_genero(data);
        try {
            res.status(200).json(data_discriminada)
        }
        catch(err){
            console.log(err);
            res.status(500).json({
                error:err
            })
        }
    })
})


module.exports = router;



