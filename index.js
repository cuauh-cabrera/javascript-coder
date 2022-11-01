function calculoImc(){
    let peso = parseInt(prompt('Ingrese su peso en kilogramos'))
    let talla = parseFloat(prompt('Ingrese su talla en metros'))
    let resultado = peso/talla**2
    if(resultado <= 18.5){
        alert(`Tu IMC es ${resultado.toFixed(0)} y tienes bajo peso`)
    }else if(resultado >= 18.5 && resultado <= 24.9 ){
        alert(`Tu IMC es ${resultado.toFixed(0)} y tienes peso normal`)
    }else if(resultado >= 25 && resultado <= 29.9){
        alert(`Tu IMC es ${resultado.toFixed(0)} y tienes sobrepeso`)
    }else if(resultado >= 30){
        alert(`Tu IMC es ${resultado.toFixed(0)} y tienes obesidad`)
    }else{
        alert(`Los valores ingresados no son correctos`)
    }
}

calculoImc()