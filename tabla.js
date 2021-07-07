/* Tarea 20210604. Ejercicio: Utilizando el archivo tabla.html
Hacer una página que cree una tabla de multiplicar
1.  Al pulsar Mostrar deberá mostrar la tabla de multiplicar indicada en el input,
2.  Si escribimos otra tabla en input y pulsamos mostrar debe volver a crear una tabla,
pero borrando la anterior, no debajo.
3. Añadirás un botón Reset que deje de nuevo la página vacía
4. Si el contenido del input no es un número entero (da igual si positivo o negativo) deberá dar
un alert indicando el error. La entrada debe ser un número entero
Puede quedar la tabla anterior informada
5. Dale algo de estilo a la tabla. Me interesa especialmente la alineación de los
números, que estén alineados a la derecha y que utilicen una fuente monospace
*/


//1º Creo una funcion para construir la tabla de multiplicar que se mostrará 
function pintaTabla(numero) {
    const anclaje = document.querySelector("#folio") // Capturo el anclaje donde lo voy a colocar, que es el div id folio, sobre este será sobre el que construya
    for (let i=1; i <= 10; i++) { //Creo un for para recorrer del 1 al 10
        const p = document.createElement("p") //Creo un parrafo en el fichero HTML para que guarde en etiquetas <p> lo que resulte de recorrer el bucle for
        const plantilla = `${i} x ${numero} = ${i * numero}` //Creo la variable plantilla que guarda la string que quiero mostrar
        p.innerHTML = plantilla // El contenido (innerHTML) que vaya en las etiquetas <p> será todo lo que resulte de la string que contiene la variable plantilla
        anclaje.appendChild(p) //Las etiquetas p, los parrafos, y su cotenido, los innerHMTL colgarán del div id folio, a traves de la variable anclaje, que en este caso es el parentNode  
    }
    
}

//2ª Creo una función para limpiar la tabla mostrada cuando introduzca un nuevo valor y tenga que mostrar una tabla nueva, que la sobreescriba, limpiando la anterior y no se escriba debajo

function limpiarFolio() {
    const items = document.querySelectorAll("#folio p") //Aqui le pido que seleccione todos los parrafos <p> del div id folio que se han creado con anterioridad cuando le he pedido que muetsre una tabla, que se han creado con la function pintaTabla
    for (let i=items.length - 1; i >= 0; i--) { //Aqui le digo que i es igual a la longitud de los items (nº de p) menos 1, que mientras i sea mayor que 0, vaya restando una i
        items[i].remove() // y que cada item i lo borre, saldra del bucle cuando no quede ninguna i
    }

}


//3º capturar el 'click' del boton Mostrar
document.querySelector("#btn-tabla")
    .addEventListener("click", () => { //Creo una arrow function que se ejecute cuando se produzca el click del boton, que ha sido escuchado como evento a traves del addEventListener
        const texto = document.querySelector("#numero_tabla").value //Selecciono el valor que se introduce en el campo imput y le asigno a la variable const texto
        limpiarFolio()
        pintaTabla(texto) //Llamo a la funcion pintaTabla y esta ejecuta lo que contiene sobre la variable const texto, que va a ser el valor que se le introduza en el input, segun indica la linea de arriba
    })


//4ª Dar funcionalidad al boton Reset para que borre la tabla anteriormente mostrada y muestre la del nuevo  valor que le introduzca

document.querySelector("#reset")
    .addEventListener("click", limpiarFolio) //Aqui le hago referencia a la funcion limpiarFolio, que se ejecutara cuando se escuche el evento click del boton reset