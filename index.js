function batchImc(){
class Paciente {
    constructor(peso, talla, agregar) {
        this.peso = parseInt(peso);
        this.talla = parseFloat(talla);
        this.agregar = agregar.toUpperCase()
    }
}

const datosPacientes = [];
const resultados = [];
datosPacientes.push(new Paciente(prompt('Ingrese su peso en kilogramos'), prompt('Ingrese su talla en metros'), prompt('¿Desea capturar otro paciente? SI/NO')));

for (i = 0; i < datosPacientes.length; i++) {
    if (datosPacientes[i].agregar == 'SI') {
        datosPacientes.push(new Paciente(prompt('Ingrese su peso en kilogramos'), prompt('Ingrese su talla en metros'), prompt('¿Desea capturar otro paciente? si/no')));
    } else if (datosPacientes[i].agregar == 'NO') {
        for (i in datosPacientes) {
            let imc = datosPacientes[i].peso / datosPacientes[i].talla ** 2
            resultados.push(imc.toFixed(0));
        }
    }else{
        alert('Por favor indica "SI" si quieres ingresar más datos ó "NO" si ya has cargado todos los datos y quieres proceder al cálculo de los resultados');
    }
}
alert(` A continuación se muestran los valores de IMC de cada paciente separados por una coma y presentados en el mismo orden en el que fueron ingresados a la calculadora ===> ${resultados}`);
}

batchImc();