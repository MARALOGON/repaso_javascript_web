//En este ejercicio vamos a crear dos botones de submit y sacar un mensaje de alert en funcion del boton que se pulse

let botones = document.querySelectorAll(".boton")

for (let i=0; i< botones.length; i++) {
    botones[i].addEventListener("click", (evento) => {
        origen = evento.target.innerHtTML //Aqui el atributo target señala cual de los dos botones creados en HTML (pega o pon), va a producir el evento
        entrada = document.querySelector("#entrada")
        parrafo = document.createElement("p")
        folio = document.querySelector("#folio")
        folio.appendChild(parrafo)
        parrafo.innerHtTML = `${origen} dice ${entrada.value}`
    })
}