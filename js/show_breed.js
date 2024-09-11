const $TEMPLATE = document.querySelector(".razas").content
const FRAGMENTO = document.createDocumentFragment()
const $SECTION = document.querySelector(".todos")


export const SHOW_BREED = razas => {
    let subrazas = razas.message

    for(let subraza in subrazas){
        if(subrazas[subraza].length > 0){
        $TEMPLATE.querySelector("h3").textContent = `${subraza.toUpperCase()}:`
        subrazas[subraza].forEach((subrazas) => {
            let li = document.createElement("li")
                li.textContent = subrazas
                li.classList.add("li-razas")
                $TEMPLATE.querySelector("ul").appendChild(li)
        });
        let clone = document.importNode($TEMPLATE,true)
        FRAGMENTO.appendChild(clone)
        $SECTION.appendChild(FRAGMENTO)
    }
    }
}

/*El código exporta una función llamada SHOW_BREED que recibe un objeto con información de razas y subrazas de perros. La función crea una lista de subrazas para cada raza y las muestra en la página web. 

Explicación paso a paso: 

1. Se define la función SHOW_BREED que recibe un objeto llamado razas como parámetro. 
2. Se crea una variable llamada subrazas que almacena la propiedad message del objeto razas. 
3. Se inicia un bucle for...in que recorre cada una de las subrazas del objeto razas. 
4. Si la subraza tiene al menos una subraza, se crea un encabezado h3 en el HTML con el nombre de la subraza en mayúsculas. 
5. Se utiliza un forEach para recorrer cada una de las subrazas de la subraza actual. 
6. Se crea un elemento li en el HTML con el nombre de la subraza actual. 
7. Se le añade una clase "li-razas" al elemento li. 
8. Se añade el elemento li a la lista ul del HTML. 
9. Se clona el elemento $TEMPLATE. 
10. Se añade la copia del $TEMPLATE al fragmento FRAGMENTO. 
11. Se añade el fragmento FRAGMENTO al elemento $SECTION del HTML. 
12. Se repite el proceso para todas las subrazas del objeto razas. 
13. La función termina. */