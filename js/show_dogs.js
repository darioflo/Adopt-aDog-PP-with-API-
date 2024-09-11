const $SECTION_DOGS = document.querySelector(".show-dogs")
const $TEMPLATE = document.getElementById("template").content
const FRAGMENT = document.createDocumentFragment();


export const SHOW_DOGS = (array, name) => {
    array.forEach((img, index) => {
        if (index >= 31) {
            return;
        }
        $TEMPLATE.querySelector("img").src = img
        $TEMPLATE.querySelector("figcaption h3").textContent = name
        $TEMPLATE.querySelector("figure").classList.add("animate__backInRight")
        let clone = document.importNode($TEMPLATE, true)
        FRAGMENT.appendChild(clone);
    });
    $SECTION_DOGS.style.opacity = "1";
    $SECTION_DOGS.appendChild(FRAGMENT)
}

/*El siguiente código exporta una función llamada SHOW_DOGS que recibe un array de imágenes y un nombre como parámetros. La función itera sobre el array y agrega cada imagen al HTML utilizando un template. Luego, agrega el template clonado al fragmento y finalmente lo agrega al HTML. Al final, cambia la opacidad de la sección de perros a 1. 

Explicación paso a paso: 
1. Se define una función llamada SHOW_DOGS que recibe dos parámetros: un array y un nombre. 
2. La función utiliza el método forEach para iterar sobre cada elemento del array. 
3. Si el índice es mayor o igual a 31, la función retorna y no hace nada. 
4. Si el índice es menor a 31, la función continúa y utiliza el método querySelector para seleccionar el elemento img, h3 y figure del template. 
5. Luego, se agrega la imagen y el nombre al template utilizando los métodos src y textContent. 
6. Se agrega la clase animate__backInRight al elemento figure del template. 
7. Se clona el template utilizando el método importNode y se agrega al fragmento. 
8. Una vez que se han clonado todos los templates, se agrega el fragmento a la sección de perros utilizando el método appendChild. 
9. Se cambia la opacidad de la sección de perros a 1. */