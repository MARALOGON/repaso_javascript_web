
document.querySelector("#btn-aceptar") //Devuelve una instancia del objeto tipo HTMLinputElement
    .addEventListener("click", () => { //Añade un escuchador de eventos, que es otra instancia de un objeto eventListener(). Este escuchador escuche el 'click' del #btn-aceptar. Cuanod lo escucha lo que va a hacer es todo lo que viene entre llaves, lo que pertence a la arrow function
        laEntrada = document.querySelector("#entrada") //Instancia, y selecciona el node #entrada del fichero HTML para guardarlo cuando quiera recurrir a el. El node #entrada hace referencia al campo input
        parrafo = document.createElement("p") //Crea un elemento nuevo en la memoria del ordenador, se guarda en "parrafo" la referencia a ese elemento creado
        elfolio = document.createElement("#folio") //Crea un nuevo elemento que va a ir anclado, refernciado al div id folio del fichero HTML, 
        elfolio.appendChild(parrafo) //Coloca el elemento "parrafo", que habia sido creado y guardado en un espacio de la memoria, en el elemento "elfolio", que a su vez es la referencia al div id folio del fichero HTML
        parrafo.innerHTML = laEntrada.value //Le mete contenido al elemento parrafo en el atributo innerHTMl (el espacio entre la etiqeuta de apertura y cierre) del elemento <p> nuevo que hemos creado en el fichero HTML y guardado en la variable parrafo. Ese contenido es el que entrará como valor en laEntrada (laEntrada.value), es decir en el input que aparece en el navegador para meter texto

    })

   