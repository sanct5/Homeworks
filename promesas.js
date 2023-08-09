const getPromesa = () => {
    return new Promise((resolve, reject) => {
        const x = prompt("Ingrese primer numero")
        const y = prompt("Ingrese el segundo numero")
        if (y != 0) {
            resolve(x/y)
        }else{
            reject("No se puede dividir entre 0")
        }
    })
}

getPromesa()
.then(resultado => {console.log(resultado)})
.catch(err => {console.log(err)})

const getSincrona = async () => {
    try{
        const msg = await getPromesa()
        console.log(msg)
    }
    catch(err){
        console.log(err)
    }
}

getSincrona()