import { FIND_BREED } from "./find_breed.js"
const $INPUT = document.getElementById("input")
const $BUTTON = document.getElementById("search")
const $SECTION_DOGS = document.querySelector(".show-dogs")


let click = 0;

export const SEARCH_BREED = () => {
    $BUTTON.addEventListener("click", () => {
        click++;
        if (click >= 2) {
            $SECTION_DOGS.innerHTML = ""
        }
        FIND_BREED($INPUT.value)
        console.log(click)
    })
}

