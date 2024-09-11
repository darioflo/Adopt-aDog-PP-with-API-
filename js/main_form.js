
const $CANCEL = document.querySelector(".cancelar")
const $INPUTS = document.querySelectorAll("input[required]")
const $ENVIO = document.querySelector(".enviar")
const $FORM = document.querySelector("form")

$CANCEL.addEventListener("click",()=>{
    $INPUTS.forEach((input) => {
        input.value = ""
    });
})


$ENVIO.addEventListener("click",(e)=>{
    let correo = document.querySelector("input[type='email']")
    console.log(correo.value)
    $FORM.action = `https://formsubmit.co/${correo.value}`
    console.log($FORM.action)
})




