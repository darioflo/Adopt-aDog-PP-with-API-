import { SHOW_BREED } from "./show_breed.js"
const $SECTION_DOGS = document.querySelector(".show-dogs")
const $LOADER = document.querySelector(".loader-1")

export const SHOW_ALL = async () =>{
    try {
        $LOADER.style.display = "block"
        let url = "https://dog.ceo/api/breeds/list/all"
        let res = await fetch(url)
        let json = await res.json()

        if(!res.ok) throw {Status: res.status, StatusText: res.statusText}

        SHOW_BREED(json)
        $LOADER.style.display = "none"
    } catch (error) {
        console.log(error)
        let message = error.statusText || "Ocurrio un error durante la peticion"
        $SECTION_DOGS.innerHTML = `<p><b>Error ${error.status}: ${message}</b></p>`
    }
} 

/*
El código exporta una función llamada SHOW_ALL. Esta función realiza una petición a la API "https://dog.ceo/api/breeds/list/all" para obtener una lista de todas las razas de perros.  

El código se ejecuta de la siguiente manera: 

1. Se muestra un elemento de carga en la página. 
2. Se define la variable "url" con el valor de la API a la que se va a realizar la petición. 
3. Se utiliza la función "fetch" para realizar la petición a la URL definida. 
4. Se utiliza la función "json" para convertir la respuesta de la petición en un objeto JSON. 
5. Si la respuesta de la petición no es exitosa, se lanza un error con el estado y el texto de estado de la respuesta. 
6. Se llama a la función SHOW_BREED con el objeto JSON obtenido como argumento. 
7. Se oculta el elemento de carga en la página. 
8. Si ocurre un error durante la ejecución de la función, se muestra un mensaje de error en el elemento $SECTION_DOGS. */