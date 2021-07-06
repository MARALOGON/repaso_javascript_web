
document.querySelector("#btn-aceptar")
    .addEventListener("click", () => { 
    laEntrada = document.querySelector("#entrada")
    parrafo = document.createElement("p")
    elfolio = document.createElement("#folio")
    elfolio.appendChild(parrafo)
    parrafo.innerHTML = laEntrada.value

    })