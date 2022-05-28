
// SHAPE ACCUEIL

const cards = document.querySelectorAll(".cards");
const nav_list = document.querySelectorAll("#nav-principal .list li");

const container_section = document.querySelector("#container-section");
const nav_About = document.querySelector("#profil");
const nav_Creations = document.querySelector("#creations");
const nav_Travaux = document.querySelector("#travaux");
const nav_ressources = document.querySelector("#ressources");
const nav_bonus = document.querySelector("#bonus");
const navSecondary = document.querySelector("#nav-secondary");

const about_profil = document.querySelector("#profil-2");
const about_competences = document.querySelector("#competences");
const about_formations = document.querySelector("#formations");
const about_interet = document.querySelector("#interet");

let switchSection = function (section) {
    for (let c = 0; c < cards.length; c++) {

        let  cardsClass = cards[c].classList.item(2);
        cards[c].classList.replace(cardsClass, section);
    }
    
    let  navSecondaryClass = navSecondary.classList.item(1);

    if(navSecondaryClass === null || undefined) {
        navSecondary.classList.add(section);
    } 
    // else if (navSecondaryClass === "creations" || "ressources" || "travaux") {
        // navSecondary.classList.remove(navSecondaryClass);
    // }
    
    else {
        navSecondary.classList.replace(navSecondaryClass, section);
    }

}

(function () {

    let contentAbout_profil = function () {
        let element = document.querySelector(".cards.a1");
        element.innerHTML= '<div></div>';
        element.firstElementChild.innerHTML='</div><div><img src="" alt=""> </div> <div> <h3></h3> <p></p> </div>'
    
        element.querySelector("h3").innerHTML = "C'est ok pour le titre"
        element.querySelector("p").innerHTML = "C'est ok pour faire le boulot"
    }

    nav_About.addEventListener("click", () => {
        let sectionClass = nav_About.getAttribute("id");
        switchSection(sectionClass)
        let child = cards[0].firstElementChild;
    
        for(let i = 0; i < cards.length; i++) {
            let el = cards[i].firstElementChild;
            if(el != null || undefined) {
                el.remove()
            }else {
                continue
            }
            console.log(el);
        }
    })

    about_profil.addEventListener("click", () => {
        contentAbout_profil();
    });

    about_competences.addEventListener();
    about_formations.addEventListener();
    about_interet.addEventListener();

}) ();

nav_Creations.addEventListener("click", () => {
    let sectionClass = nav_Creations.getAttribute("id");
    switchSection(sectionClass)
    
    for(let i = 0; i < cards.length; i++) {
        let el = cards[i].firstElementChild;
        if(el != null || undefined) {
            el.remove()
        }else {
            continue
        }
        console.log(el);
    }
})

nav_Travaux.addEventListener("click", () => {
    let sectionClass = nav_Travaux.getAttribute("id");
    switchSection(sectionClass)
})

nav_ressources.addEventListener("click", () => {
    let sectionClass = nav_ressources.getAttribute("id");
    switchSection(sectionClass)
})

nav_bonus.addEventListener("click", () => {
    let sectionClass = nav_bonus.getAttribute("id");
    switchSection(sectionClass)
})




/*
for(i = 0; i < nav_list.length; i++) {

    let li = nav_list[i];
    let sectionClass = li.getAttribute("id");
    
    li.addEventListener("click", () => {
        switchSection(sectionClass);
    })
}

// ABOUT NAV

about_profil.addEventListener("click", () => {
    let element = document.querySelector(".cards.a1");
    element.innerHTML= 
    '<div><img src="" alt=""> </div> <div> <h3></h3> <p></p> </div>';

    element.querySelector("h3").innerHTML = "C'est ok pour le titre"
    element.querySelector("p").innerHTML = "C'est ok pour faire le boulot"
})
*/

