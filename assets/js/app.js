
// SHAPE ACCUEIL

const cards = document.querySelectorAll(".cards");
const nav_list = document.querySelectorAll("#nav_principal .list li");

const container_section = document.querySelector("#container_section");
const nav_About = document.querySelector("#about");
const nav_Creations = document.querySelector("#creations");
const nav_Travaux = document.querySelector("#travaux");
const nav_ressources = document.querySelector("#ressources");
const nav_bonus = document.querySelector("#bonus");


let switchSection = function (section) {
    for (let c = 0; c < cards.length; c++) {
        let  cardsClass = cards[c].classList.item(2);
        cards[c].classList.replace(cardsClass, section);

        console.log(cardsClass);
    }
}

for(i = 0; i < nav_list.length; i++) {

    let li = nav_list[i];
    let sectionClass = li.getAttribute("id");
    
    li.addEventListener("click", () => {switchSection(sectionClass);})
}
