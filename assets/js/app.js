
// SHAPE ACCUEIL

const cards = document.querySelectorAll(".cards");
const card_a1 = document.querySelector(".cards.a1");
const card_a2 = document.querySelector(".cards.a2");
const card_a3 = document.querySelector(".cards.a3");
const card_a4 = document.querySelector(".cards.a4");
const card_a5 = document.querySelector(".cards.a5");
const card_a6 = document.querySelector(".cards.a6");
const nav_list = document.querySelectorAll("#nav-principal .list li");

const container_logo = document.querySelector("#container-logo");
const container_section = document.querySelector("#container-section");
const nav_principal = document.querySelector("#nav-principal");
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


let eraser = function () {
    
    for(let i = 0; i < cards.length; i++) {
        let el = cards[i].firstElementChild;
        if(el != null || undefined) {
            el.remove()
        }else {
            continue
        }
    };

    if (card_a1.classList.contains("bloom" || "fade")) {
        card_a1.classList.remove(card_a1.classList.item(3));
        card_a2.classList.remove(card_a2.classList.item(3));
        card_a3.classList.remove("place");
        card_a4.classList.remove("place");
        card_a5.classList.remove("place");
        card_a6.classList.remove("place");
    }
};

let switchSection = function (section) {
    for (let c = 0; c < cards.length; c++) {

        let  cardsClass = cards[c].classList.item(2);
        cards[c].classList.replace(cardsClass, section);
    }
    
    let  navSecondaryClass = navSecondary.classList.item(1);

    if(navSecondaryClass === null || undefined) {
        navSecondary.classList.add(section);
    } 
    
    else {
        navSecondary.classList.replace(navSecondaryClass, section);
    };

    
    
    if (section === "profil") {
        let section = "about";
        navSecondary.parentNode.querySelector("h2").textContent = section + "   |";
    } else {
        navSecondary.parentNode.querySelector("h2").textContent = section;
    };

};

let selection = function (element) {
    
    let li_active = nav_principal.querySelector("li.active");

    li_active === null || undefined ? element.classList.add("active") : li_active.classList.remove("active"),element.classList.add("active");
}

let bloom = function (card_1, card_2) {
    card_1.classList.add("fade");
    card_2.classList.add("bloom");
};

// ACCUEIL

(function () {

    let defaultPage = function () {
        
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
    };

    defaultPage();

    container_logo.addEventListener("click", () => {
        let sectionClass = "accueil";
        eraser();
        switchSection(sectionClass);
        defaultPage();
    });

}) ();

// ABOUT ME

(function () {

    let cards_a1 = document.querySelector(".cards.a1");

    let competences = [
        {   texte :"javascript",
            Image:"./assets/img/Fichier 1.svg"
    },
        {   texte :"bootstrap",
            Image:"./assets/img/Fichier 1.svg"
    },
        {   texte :"SASS",
            Image:"./assets/img/Fichier 1.svg"
    }, 
        {   texte :"html/css",
            Image:"./assets/img/Fichier 1.svg"
    }
    ];

    let contentAbout_profil = function () {

        cards_a1.innerHTML= '<div class="container"></div>';

        const container = cards_a1.querySelector(".container");
        container.innerHTML='<div class="profil_illustration"><img src="" alt="Illustration"> </div> <article> <h3></h3> <p></p> </article>';
    
        container.querySelector("img").src = './assets/img/Fichier 1.svg';
        container.querySelector("h3").innerHTML = "Présentation"
        container.querySelector("p").textContent = 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta enim repellendus tempora magni quod consectetur magnam fuga repellat necessitatibus ab aliquam"
    };

    let contentAbout_list = function (params1) {
        // console.log(params1);
        const article = cards_a1.querySelector(".container article");
        let paraph = article.querySelector("p");

        if(paraph != null || undefined) {
            paraph.remove();
        };
        article.innerHTML = '<ul></ul>';
        const list = article.querySelector("ul");

        for(let i = 0; i < params1.length; i++) {
            let competence = params1[i].texte;
            let el = document.createElement("li");
            el.innerHTML = '<span>' + competence + '</span>';
            list.appendChild(el);

            let img = document.createElement("img");
            img.src = params1[i].Image;
            el.prepend(img);
        }

    };

    let active = function (element) {
        
        if(element.classList.contains("active")) {
            return false
        } else {
            element.parentNode.querySelector(".active").classList.remove("active");
            element.classList.add("active");
        };
    };

    nav_About.addEventListener("click", () => {
        let sectionClass = nav_About.getAttribute("id");
        eraser();
        switchSection(sectionClass);
        selection(nav_About);
        contentAbout_profil();

        let li_active = navSecondary.querySelector("li.active");

        li_active === null || undefined ? about_profil.classList.add("active") : 
        li_active.classList.remove("active"), about_profil.classList.add("active");
    });

    about_profil.addEventListener("click", () => {
        contentAbout_profil();
        active(about_profil);
    });

    about_competences.addEventListener("click", () => {
        contentAbout_list(competences);
        active(about_competences);
    });

    about_formations.addEventListener("click", () => {
        contentAbout_list(competences);
        active(about_formations);
    });

    about_interet.addEventListener("click", () => {
        contentAbout_list(competences)
        active(about_interet);
    });

}) ();

// NAV PRICIPAL

(function () {

    nav_Creations.addEventListener("click", () => {
        let sectionClass = nav_Creations.getAttribute("id");
        eraser();
        switchSection(sectionClass);
        selection(nav_Creations);
    });
    
    nav_Travaux.addEventListener("click", () => {
        let sectionClass = nav_Travaux.getAttribute("id");
        eraser();
        switchSection(sectionClass);
        selection(nav_Travaux);
    });
    
    nav_ressources.addEventListener("click", () => {
        let sectionClass = nav_ressources.getAttribute("id");
        eraser();
        switchSection(sectionClass);
        selection(nav_ressources);
    });
    
    nav_bonus.addEventListener("click", () => {
        let sectionClass = nav_bonus.getAttribute("id");
        eraser();
        switchSection(sectionClass);
        selection(nav_bonus);
    });
    
}) ();

// DESIGNE DEV

(function () {
    
    card_a1.addEventListener("click", () => {

        let clause = card_a1.classList.item(2);
        // console.log(clause1, clause2);
        switch (clause) {
            case "creations":
                card_a1.innerHTML= "CREATIONS"
                
                break;
            case "travaux":
                card_a1.innerHTML= "TRAVAUX"
                
                break;
            case "ressources":
                card_a1.innerHTML= "RESSOURCES"
                
                break;
        
            default:
                break;
        };
        bloom(card_a2,card_a1);

        for(let i = 2; i < cards.length; i++) {
            cards[i].classList.add("place");
        }
    });

    /*
    card_a2.addEventListener("click", () => {
        bloom(card_a2,card_a1);
    });
    */
}) ();

