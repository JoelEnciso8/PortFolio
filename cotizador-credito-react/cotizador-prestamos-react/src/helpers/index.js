const formatearDinero = (valor) =>{
    const formatear = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency: 'USD'
    })
    return formatear.format(valor)
}


const calcularTotalPagar = (cantidad,plazo)=>{  
    let total ;

    // Mientras mayor la cantidad menor el interes
    if (cantidad < 5000) {
        total = cantidad * 1.5;

    } else if(cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.4;

    }else if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3;

    }else{
        total = cantidad * 1.2;
    }


    // Mientras mayor plazo mayor interes
    if (plazo === 6) {
        total+=1.1

    }else if (plazo === 12) {
        total+= 1.2
        
    } else if (plazo === 18) {
        total+= 1.3
        
    }else if (plazo === 24) {
        total+= 1.4
        
    } else {
        total = 1.5
    }

        return total

}

export{
    formatearDinero,
    calcularTotalPagar
}