import { SHOW_DOGS } from "./show_dogs.js"
const $SECTION_DOGS = document.querySelector(".show-dogs")
const $LOADER = document.querySelector(".loader")

export const FIND_BREED = async (breed) => {
    try {
        $LOADER.style.display = "block"
        let url = `https://dog.ceo/api/breed/${breed}/images`
        let res = await fetch(url)
        let json = await res.json()

        if (!res.ok) throw { Status: res.status, StatusText: res.statusText }

        $LOADER.style.display = "none"
        SHOW_DOGS(json.message, breed)
    } catch (error) {
        let message = error.statusText || "Ocurrio un error durante la peticion"
        $SECTION_DOGS.innerHTML = `<p><b>Error ${error.status}: ${message}</b></p>`
    }
}

/*El código exporta una función llamada FIND_BREED que realiza una búsqueda de imágenes de perros de una raza específica. La función toma como parámetro "breed", que es el nombre de la raza de perro que se desea buscar. 

A continuación, se explica paso a paso el código: 
1. Se define la función FIND_BREED como una función asíncrona (async) que toma como parámetro "breed". 
2. Dentro de la función, se establece la propiedad "display" del elemento $LOADER como "block", lo que hace que se muestre un indicador de carga en la pantalla. 
3. Se construye la URL de la API para buscar las imágenes de la raza de perro específica. La URL se forma concatenando la variable "breed" en la parte correspondiente de la URL. 
4. Se realiza una solicitud (fetch) a la URL utilizando el método "await" para esperar la respuesta. La respuesta se asigna a la variable "res". 
5. Se convierte la respuesta en formato JSON utilizando el método "await res.json()". El resultado se asigna a la variable "json". 
6. Se verifica si la respuesta no es exitosa (res.ok es false). Si no es exitosa, se lanza una excepción con un objeto que contiene el estado de la respuesta (res.status) y el texto del estado (res.statusText). 
7. Se establece la propiedad "display" del elemento $LOADER como "none", lo que oculta el indicador de carga. 
8. Se llama a la función SHOW_DOGS pasando como argumentos el arreglo de imágenes (json.message) y el nombre de la raza de perro (breed). 
9. Si ocurre algún error durante el proceso, se captura en el bloque catch y se asigna a la variable "message" el texto del estado del error, o en su defecto, se asigna un mensaje genérico de error. 
10. Se modifica el contenido HTML del elemento $SECTION_DOGS para mostrar un mensaje de error con el código y mensaje del error capturado.  */