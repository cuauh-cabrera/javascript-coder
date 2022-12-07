const divContenedor = document.getElementById('contenedor');
const nombrePaciente = document.getElementById('paciente');
const datosPeso = document.getElementById('peso');
const datosTalla = document.getElementById('talla');
const botonEnviar = document.getElementById('enviar');
const divResultado = document.getElementById('notificacion')


botonEnviar.onclick = () => {
    const resultadoImc = datosPeso.value/datosTalla.value**2
    const paciente =  {
        nombre: nombrePaciente.value,
        peso: datosPeso.value,
        talla: datosTalla.value,
        resultado: resultadoImc.toFixed(0)
    }
    localStorage.setItem('paciente', JSON.stringify(paciente))

    const notifResultado = document.createElement('h3')
    notifResultado.innerText = `Hola ${paciente.nombre}, tu IMC es ${paciente.resultado}`
    divResultado.append(notifResultado)
}