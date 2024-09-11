const $TARJETAS = document.querySelectorAll(".box-serv")
const $DIVS = document.querySelectorAll(".movement")

const OBSERVADOR = new IntersectionObserver(tarjetas =>{
    tarjetas.forEach(tarjeta => {
        if (tarjeta.isIntersecting) {
            tarjeta.target.classList.add("animate__backInRight")
        }
        else{
            const TIME = setInterval(function(){
                tarjeta.target.classList.remove("animate__backInRight")
                clearInterval(TIME)
            },2000)
            TIME
        }
    })
},{threshold:0.05})

const OBSERVADOR_TWO = new IntersectionObserver(divs => {
    divs.forEach(div =>{
        if (div.isIntersecting) {
            div.target.classList.add("animate__jackInTheBox")
        }
        else{
            const TIME = setInterval(function(){
                div.target.classList.remove("animate__jackInTheBox")
                clearInterval(TIME)
            },2000)
            TIME
        }
    })
},{threshold:0.05})



export const INTERSECTION_OBSERVER = () => {
    $TARJETAS.forEach(tarjeta=>{
        OBSERVADOR.observe(tarjeta)
    })
    $DIVS.forEach(div=>{
        OBSERVADOR_TWO.observe(div)
    })
}


/*El código anterior utiliza el objeto IntersectionObserver para observar cuando ciertos elementos en la página son visibles en la ventana del navegador. Luego, aplica una animación a estos elementos cuando son visibles y elimina la animación cuando ya no son visibles. 

El código se puede explicar de la siguiente manera: 

1. Se define una constante llamada OBSERVADOR que crea una nueva instancia de IntersectionObserver. Esta instancia se utiliza para observar las tarjetas en la página. 
2. La instancia de IntersectionObserver tiene un callback que se ejecuta cada vez que una tarjeta se intersecta con la ventana del navegador. 
3. Dentro del callback, se verifica si la tarjeta está intersectando con la ventana (es decir, si es visible). Si es así, se agrega la clase "animate__backInRight" a la tarjeta para aplicar una animación. 
4. Si la tarjeta ya no está intersectando con la ventana, se crea un temporizador que espera 2 segundos y luego elimina la clase "animate__backInRight" de la tarjeta para detener la animación. 
5. Se define otra constante llamada OBSERVADOR_TWO que crea otra instancia de IntersectionObserver. Esta instancia se utiliza para observar los divs en la página. 
6. La instancia de IntersectionObserver tiene un callback similar al anterior, pero esta vez aplica la clase "animate__jackInTheBox" a los divs cuando son visibles. 
7. Si los divs ya no son visibles, se crea un temporizador similar al anterior para eliminar la clase "animate__jackInTheBox" y detener la animación. 
8. Finalmente, se exporta una función llamada INTERSECTION_OBSERVER que utiliza los métodos observe() de las instancias de IntersectionObserver para observar las tarjetas y los divs en la página. */