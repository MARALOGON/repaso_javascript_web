// Haciendo llamadas a urls desde Javascript

var folio = document.querySelector("#folio") //Creo la variable folio para pode añadir en el toda la informacion que queremos mostrar y que crearemos a continuacion. Como la referncia a folio va a cambiar, no puede ser una variable const,



function gestionaRespuestaAsincrona() {
    if (this.readyState === 4 && this.status === 200) { //Aqui el objeto this se utiliza como equivalente a quien invoca la funcion, que en este caso es xhr.
        console.log(this.responseText) //Atributo responseText: Contiene el cuerpo de lo que responde la petición
        const respuesta = JSON.parse(this.responseText) //JSON es un objeto de Javascript. El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis. Con esto conseguimos un objeto parecido a un diccionario Python que vamos a poder manejar.
    
        if(respuesta.Response === 'False') { //Si no hay respuesta para la peticion, emite el mensaje alert
            alert("No se han encontrado resultados")
            return
        }
        
        folio.innerHTML = "" //Limpio el contenido de folio (que corresponde al div id folio del fichero HTML) que contiene toda la información de la anteror pelicula, asi la borro cunado hago una nueva busqueda


        for (let i=0; i < respuesta.Search.length; i++) { //Recorro todas las respuestas obtenidas con la peticion, mientras el numero de peticiones sea el que ha proporcionado la busqueda (Search), es decir, mientras respuesta.Search.length
            const pelicula = respuesta.Search[i]

            const div = document.createElement("div") //Creo un div en el fichero HTML para mostrar los datos que a continuacion voy a crear e indicar que quiero mostrar de la pelicula para cada uno de los resultados de la busqueda
            const img = document.createElement("img")
            img.setAttribute("src", pelicula.Poster) //Con este atributo llamamos al elemento Poster de la pelicula que aparece como resultado, para que muestre la imagen que le corresponde, que hemos creado el elemento en la anterior linea
            img.setAttribute("alt", "Caratula de la pelicula") //Con este atributo, ponemos un mensaje alternativo en caso de que no haya poster para esa pelicula o este no cargue adecuadamente 
            
            const p = document.createElement("p") //creo la variable p que albergará crea el elemento p que contendrá los datos de la pelicula
            const textoP = `${pelicula.Title} (${pelicula.Year})` //Guardo en la varibale textoP el titulo y año de la pelicula resultado de la busqueda
            p.innerHTML = textoP //Creo el contenido del parrafo (innerHTML) con lo que he guardado en la variable textoP

            const btn = document.createElement("a") //creo una variable btn con un elemento a(enlace)
            btn.setAttribute("href", `https://www.imdb.com/title/${pelicula.imdbID}/`)
            btn.setAttribute("target", "_blank") //Esto sirve para que al pulsar el enlace que se crea con la variable btn, se abra en una nueva pestaña
            btn.className ="uk-button uk-button-primary" //Esta es la clase propia del framework Ulkit para la clase button, para darle estilo a los botones
            btn.classList.add("info") //Añado la clase info, creada por mi, a la clase button
            btn.innerHTML = "Más información" //Creo el contenido del botón (innerHTML) para enlazar a la web de imdb para mas informacion

            p.appendChild(btn)

            div.appendChild(img) 
            div.appendChild(p)

            folio.appendChild(div)

        
        
        } 
   
   
    }
    
}

const xhr = new XMLHttpRequest() // xhr es un manejador de peticiones que lanza peticiones de forma asincrona. XMLHttpRequest es un objeto clasico de JS para lanzar peticiones.
xhr.onload = gestionaRespuestaAsincrona //Cuando se ejecute onload, el xhr se queda esperando una respuesta, cuando la recibe, llama a su funcion onload, que apunta a la funcion gestionRespuestaAsincrona


document.querySelector("#buscar")
    .addEventListener("click", () => {
        const palabras = document.querySelector("#entrada").value //Selecciono el valor que ponga en el input, es decir el texto de la pelicula que quiero buscar
        xhr.open('GET', `http://www.omdbapi.com/?s=${palabras}&apikey=b8d84844`, true)   //xhr.open crea una peticin con el metodo open, LE DIGO QUE TIPO DE PETICIÓN VA A SER, en este caso un GET y a que url se hace la peticion. El parametro true lo ponemos para que nos indica si la respuesta trae resultados. SI la peticion no encuentra resultados, responsetext sera false.
        xhr.send() //xhr.send envia la peticion que se ha creado arriba, como la peticion es asincrona entonces xhr se queda esperando, hasta que la peticion devuleve algo. cuando devuelve algo, se va a xhr.onload
        console.log("He lanzado peticion")
    })