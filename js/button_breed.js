

const $BUTTON = document.getElementById("ver-razas")
const $SECTION = document.querySelector(".todos")

let click = 0

export const BUTTON_ACTIVE =  () => {
    $BUTTON.addEventListener("click",(e)=>{
        $BUTTON.innerHTML = "<b>Ocultar razas</b>"
        $SECTION.style.display = "block"
        $SECTION.classList.add("animate__rotateInUpRight")
        click++;

        if (click === 2){
            $SECTION.style.display = "none"
            $SECTION.classList.remove("animate__rotateInUpRight")
            $BUTTON.innerHTML = "<b>Ver razas disponibles</b>";
            click = 0
            return
        }
    })
}

/*El código anterior es una función de flecha llamada BUTTON_ACTIVE que se exporta. Esta función se encarga de manejar el evento de clic en un botón. 

En primer lugar, se declara una variable llamada "click" y se le asigna el valor de 0. 

Luego, se agrega un evento de clic al elemento con el id "$BUTTON". Cuando se hace clic en este botón, se ejecuta una función de flecha que contiene el siguiente código: 

1. Se cambia el contenido del botón a "<b>Ocultar razas</b>" usando la propiedad innerHTML. 
2. Se muestra el elemento con el id "$SECTION" cambiando su propiedad display a "block". 
3. Se añade la clase "animate__rotateInUpRight" al elemento con el id "$SECTION". 
4. Se incrementa el valor de la variable "click" en 1. 

Después de esto, se verifica si el valor de "click" es igual a 2. Si es así, se ejecuta el siguiente código: 

1. Se oculta el elemento con el id "$SECTION" cambiando su propiedad display a "none". 
2. Se elimina la clase "animate__rotateInUpRight" del elemento con el id "$SECTION". 
3. Se cambia el contenido del botón a "<b>Ver razas disponibles</b>" usando la propiedad innerHTML. 
4. Se reinicia el valor de la variable "click" a 0. 
5. Se retorna de la función.  */


















