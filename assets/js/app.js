
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

};

// ACCUEIL

(function () {

    const cards_a1 = document.querySelector(".cards.a1");
    cards_a1.innerHTML = '<div class="container"></div>';

    const container = cards_a1.querySelector(".container");
    container.innerHTML = '<article class="accueil_article"></article> <div class="accueil_article_illustration"></div>';

    const article = container.querySelector(".accueil_article");
    article.innerHTML = '<div class="accueil_article_profil"></div> <p></p>';

    const profil = article.querySelector(".accueil_article_profil");
    profil.innerHTML = '<img src="" alt="Image de profil"> <h2></h2>';
    profil.querySelector("img").src = './assets/img/logo/logo.svg';
    profil.querySelector("h2").innerHTML = "faizdine";

    article.querySelector("p").textContent = 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta enim repellendus tempora magni quod consectetur magnam fuga repellat necessitatibus ab aliquam";

    const illustration = container.querySelector(".accueil_article_illustration");
    illustration.innerHTML = '<img src="" alt="Illustration de l\'article">';
    illustration.querySelector('img').src = './assets/img/Fichier 1.svg';
    
    
    const cards_a2 = document.querySelector(".cards.a2");
    cards_a2.innerHTML = '<img src="" alt="Illustration de la card">'
    cards_a2.querySelector('img').src = './assets/img/Fichier 1.svg';
    
    const cards_a3 = document.querySelector(".cards.a3");
    cards_a3.innerHTML = '<img src="" alt="Illustration de la card">'
    cards_a3.querySelector('img').src = './assets/img/Fichier 1.svg';
    
    const cards_a4 = document.querySelector(".cards.a4");
    cards_a4.innerHTML = '<img src="" alt="Illustration de la card">'
    cards_a4.querySelector('img').src = './assets/img/Fichier 1.svg';
}) ();

// ABOUT ME

(function () {

    let contentAbout_profil = function () {

        let cards_a1 = document.querySelector(".cards.a1");
        cards_a1.innerHTML= '<div class="container"></div>';

        const container = cards_a1.querySelector(".container");
        container.innerHTML='<div class="profil_illustration"><img src="" alt="Illustration"> </div> <article> <h3></h3> <p></p> </article>';
    
        container.querySelector("img").src = './assets/img/Fichier 1.svg';
        container.querySelector("h3").innerHTML = "Présentation"
        container.querySelector("p").textContent = 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta enim repellendus tempora magni quod consectetur magnam fuga repellat necessitatibus ab aliquam"
    }

    let contentAbout_competences = function () {
        
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
        }
        contentAbout_profil();
        about_profil.classList.add("active");
    })

    about_profil.addEventListener("click", () => {
        contentAbout_profil();
    });

    about_competences.addEventListener("click", () => {

    });
    // about_formations.addEventListener();
    // about_interet.addEventListener();

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
});

nav_Travaux.addEventListener("click", () => {
    let sectionClass = nav_Travaux.getAttribute("id");
    switchSection(sectionClass)
});

nav_ressources.addEventListener("click", () => {
    let sectionClass = nav_ressources.getAttribute("id");
    switchSection(sectionClass)
});

nav_bonus.addEventListener("click", () => {
    let sectionClass = nav_bonus.getAttribute("id");
    switchSection(sectionClass)
});




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

