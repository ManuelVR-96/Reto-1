
const por_genero = (data) => {
    const result = {
        Masculino:{
            cero_a_veinte:[],
            veinte_a_cuarentena:[],
            cuarenta_o_mas:[]
        },
        Femenino:{
            cero_a_veinte:[],
            veinte_a_cuarentena:[],
            cuarenta_o_mas:[]
        },
    }
    data.map((item)=> {
        if(item.sexo==='M'){
            if (item.edad>=0 && item.edad<20)
                result.Masculino.cero_a_veinte.push(item)
            else if (item.edad>=20 && item.edad<40)
                result.Masculino.veinte_a_cuarentena.push(item)
            else
                result.Masculino.cuarenta_o_mas.push(item)
        }
        else{
            if (item.edad>=0 && item.edad<20)
                result.Femenino.cero_a_veinte.push(item)
            else if (item.edad>=20 && item.edad<40)
                result.Femenino.veinte_a_cuarentena.push(item)
            else
                result.Femenino.cuarenta_o_mas.push(item)
        }
    })
    return result;
}



module.exports = {
    por_genero:por_genero
} 