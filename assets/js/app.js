
// SHAPE ACCUEIL

// CARDS

const cards = document.querySelectorAll(".cards");
const card_a1 = document.querySelector(".cards.a1");
const card_a2 = document.querySelector(".cards.a2");
const card_a3 = document.querySelector(".cards.a3");
const card_a4 = document.querySelector(".cards.a4");
const card_a5 = document.querySelector(".cards.a5");
const card_a6 = document.querySelector(".cards.a6");

// HEADER

const container_logo = document.querySelector("#container-logo");

// NAV PRINCIPAL

const nav_list = document.querySelectorAll("#nav-principal .list li");

const container_section = document.querySelector("#container-section");
const nav_principal = document.querySelector("#nav-principal");
const nav_About = document.querySelector("#profil");
const nav_Creations = document.querySelector("#creations");
const nav_Travaux = document.querySelector("#travaux");
const nav_ressources = document.querySelector("#ressources");
const nav_bonus = document.querySelector("#bonus");

// NAV SECONDARY

const navSecondary = document.querySelector("#nav-secondary");

// ABOUT NAV

const about_profil = document.querySelector("#profil-2");
const about_competences = document.querySelector("#competences");
const about_formations = document.querySelector("#formations");
const about_interet = document.querySelector("#interet");
const about_exp_pro = document.querySelector("#exp-pro");
const about_contact = document.querySelector("#contact");
const about_social = document.querySelector("#resaux");

// ANIMATIONS

let fondu = function (element) {
    
        element.animate([
            {opacity:'0'},
            {opacity:'1'},
        ], 
        {
            duration:600
        });

};

// ARRAY

// ABOUT ME

let tab_competences = [
    
    {   texte :"HTML",
        Image:"./assets/img/svg/about/icons8-html-5-96.svg"
},

    {   texte :"CSS",
        Image:"./assets/img/svg/about/icons8-css3-96.svg"
},

    {   texte :"jascript",
        Image:"./assets/img/svg/about/icons8-javascript-96.svg"
},

    {   texte :"SASS",
        Image:"./assets/img/svg/about/icons8-sass-96.svg"
},

    {   texte :"bootstrap",
        Image:"./assets/img/svg/about/icons8-bootstrap-96.svg"
},

    {   texte :"Wordpress",
        Image:"./assets/img/svg/about/icons8-wordpress-96.svg"
},

    {   texte :"a.Illustrator",
        Image:"./assets/img/svg/about/icons8-adobe-illustrator-96.svg"
},

    {   texte :"a.phtoshop",
        Image:"./assets/img/svg/about/icons8-adobe-photoshop-96.svg"
},

    {   texte :"a.afther effect",
        Image:"./assets/img/svg/about/icons8-adobe-after-effects-96.svg"
},

    {   texte :"a.premier pro",
        Image:"./assets/img/svg/about/icons8-adobe-premiere-pro-96.svg"
},

    {   texte :"a.indesign",
        Image:"./assets/img/svg/about/icons8-adobe-indesign-96.svg"
},

    {   texte :"a.XD",
        Image:"./assets/img/svg/about/icons8-adobe-xd-96.svg"
},

    {   texte :"figma",
        Image:"./assets/img/svg/about/icons8-figma-96.svg"
},

    {   texte :"git / github",
        Image:"./assets/img/svg/about/icons8-git-96.svg"
},

    "assets/img/svg/about/competences.svg"

];

let tab_formations = [
    {   texte :"Openclassroom",
        Image:"./assets/img/svg/about/openclassroom.svg"
},
    {   texte :"Concepteur designer UI",
        Image:"./assets/img/svg/about/designer.svg"
},
    {   texte :"BTS (Management des Unitées commercial)",
        Image:"assets/img/svg/about/management.svg"
},

    "./assets/img/svg/about/formations.svg"

]

let tab_interet = [

    {   texte :"Gastronomie",
        Image:"./assets/img/svg/about/gastronomie.svg"
},
    {   texte :"Manga (BD Japonais)",
        Image:"./assets/img/svg/about/manga.svg"
},

    {   texte :"Jeux vidéos",
        Image:"./assets/img/svg/about/icons8-steam-96.svg"
},

    {   texte :"Running",
        Image:"./assets/img/svg/about/wooman_run.svg"
},
    {   texte :"Musculation",
        Image:"./assets/img/svg/about/musculation.svg"
},

    "assets/img/svg/about/interets.svg"

];

let tab_exp_pro = [
    
    {   texte :"Gastronomie",
        Image:"./assets/img/svg/about/gastronomie.svg"
},

        "assets/img/svg/about/exp_pro.svg"

];

let tab_social = [
    
    {   texte :"linkedin",
        Image:"./assets/img/svg/about/icons8-linkedin-96.svg"
},
    
    {   texte :"instagram",
        Image:"./assets/img/svg/about/icons8-instagram-96.svg"
},
    
    {   texte :"twitter",
        Image:"./assets/img/svg/about/icons8-twitter-96.svg"
},

        "assets/img/svg/about/social.svg"

];

// OBJETS

// DESIGNE DEV

let tabDesigne_dev = {
    designe : "./assets/img/svg/divers/designe.svg",
    dev : "./assets/img/svg/divers/dev.svg"
};

// FUNCTIONS

let eraser = function () {
    
    for(let i = 0; i < cards.length; i++) {
        let el = cards[i].firstElementChild;
        if(el != null || undefined) {
            el.remove()
        }else {
            continue
        }
    };

    if (card_a1.classList.contains("bloom") || card_a1.classList.contains("fade")) {
        card_a1.classList.remove(card_a1.classList.item(3));
        card_a2.classList.remove(card_a2.classList.item(3));
        card_a3.classList.remove("place");
        card_a4.classList.remove("place");
        card_a5.classList.remove("place");
        card_a6.classList.remove("place");
    };

    let verif = navSecondary.parentNode.querySelector(".nav_title.v2");
    if (verif != null || undefined) {
        verif.classList.remove("v2");
    };

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

        function switchDesigneDev(elememt,array) {
            let designe = document.createElement("div");
            designe.className = "designe_dev";
            elememt.appendChild(designe);
            let designe_image = document.createElement("img");
            designe.appendChild(designe_image);
            designe_image.src = array;
        };

        switchDesigneDev(card_a1,tabDesigne_dev.designe);
        switchDesigneDev(card_a2,tabDesigne_dev.dev);
    };

};

let selection = function (element) {
    
    let li_active = nav_principal.querySelector("li.active");

    if (li_active === null || undefined) {
        element.classList.add("active");
        
    } else if ((li_active != null || undefined) && element === container_logo) {
        li_active.classList.remove("active");
    } 
    else {
        li_active.classList.remove("active");
        element.classList.add("active");
    }
};

let bloom = function (card_1, card_2) {
    card_1.classList.add("fade");
    card_2.classList.add("bloom");

    for(let i = 2; i < cards.length; i++) {
        cards[i].classList.add("place");
    };

};

let nav_title_v2 = function () {
    navSecondary.parentNode.querySelector(".nav_title").classList.add("v2");
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
    illustration.querySelector('img').src = './assets/img/svg/accueil/accueil.svg';
    
    
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
        selection(container_logo);

        // ANIMATIOS
        fondu(document.querySelector(".nav_title"));
    });

}) ();

// ABOUT ME

(function () {

    let cards_a1 = document.querySelector(".cards.a1");

    let contentAbout_profil = function () {

        cards_a1.innerHTML= '<div class="container"></div>';

        const container = cards_a1.querySelector(".container");
        container.innerHTML='<div class="profil_illustration"><img src="" alt="Illustration"> </div> <article> <h3></h3> <p></p> </article>';
    
        container.querySelector("img").src = './assets/img/svg/about/presentation.svg';
        container.querySelector("h3").innerHTML = "Présentation";
        let paragraph = container.querySelector("p");
        paragraph.innerHTML = 
        'Esprit d’équipe, Sociable et Dynamique.\
        Intégrer une entreprise telle que la vôtre serais pour moi une chance de bien débuter dans le métier et d\'améliorer mes compétences.\
        Actuellement en formation Concepteur designer UI, je me permets de de vous soumettre ma candidature de stage.\
        </br>';
        
        let cv = document.createElement("span");
        paragraph.parentNode.appendChild(cv);
        let cv_lien = document.createElement("a");
        cv.appendChild(cv_lien);
        cv_lien.innerText = "Télécharger mon CV";
        cv_lien.className = "btn";
        cv_lien.href = "./assets/docs/CV_Faizdine_TOUMBOU.pdf";

    };

    let contentAbout_list = function (array) {
        // console.log(params1);
        let container = cards_a1.querySelector(".container");
        const article = cards_a1.querySelector(".container article");
        let paraph = article.querySelector("p");

        if(paraph != null || undefined) {
            paraph.remove();
        };
        article.innerHTML = '<ul></ul>';
        const list = article.querySelector("ul");
        
        for(let i = 0; i < array.length - 1; i++) {
            let competence = array[i].texte;
            let el = document.createElement("li");
            el.innerHTML = '<span>' + competence + '</span>';
            list.appendChild(el);
            
            let img = document.createElement("img");
            img.src = array[i].Image;
            el.prepend(img);
        };
        
        container.querySelector("img").src = array[array.length - 1];
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
        // ANIMATIOS
        fondu(document.querySelector(".nav_title"));

        let li_active = navSecondary.querySelector("li.active");

        li_active === null || undefined ? about_profil.classList.add("active") : 
        li_active.classList.remove("active"), about_profil.classList.add("active");
    });

    about_profil.addEventListener("click", () => {
        contentAbout_profil();
        active(about_profil);
    });

    about_competences.addEventListener("click", () => {
        contentAbout_list(tab_competences);
        active(about_competences);
    });

    about_formations.addEventListener("click", () => {
        contentAbout_list(tab_formations);
        active(about_formations);
    });

    about_interet.addEventListener("click", () => {
        contentAbout_list(tab_interet)
        active(about_interet);
    });

    about_exp_pro.addEventListener("click", () => {
        contentAbout_list(tab_exp_pro)
        active(about_exp_pro);
    });

    /*
    about_contact.addEventListener("click", () => {
        contentAbout_list(tab_interet)
        active(about_contact);
    });
    */

    about_social.addEventListener("click", () => {
        contentAbout_list(tab_social)
        active(about_social);
    });

}) ();

// NAV PRICIPAL

(function () {

    nav_Creations.addEventListener("click", () => {
        let sectionClass = nav_Creations.getAttribute("id");
        eraser();
        switchSection(sectionClass);
        selection(nav_Creations);
        // ANIMATIOS
        fondu(document.querySelector(".nav_title"));
    });
    
    nav_Travaux.addEventListener("click", () => {
        let sectionClass = nav_Travaux.getAttribute("id");
        eraser();
        switchSection(sectionClass);
        selection(nav_Travaux);
        // ANIMATIOS
        fondu(document.querySelector(".nav_title"));
    });
    
    nav_ressources.addEventListener("click", () => {
        let sectionClass = nav_ressources.getAttribute("id");
        eraser();
        switchSection(sectionClass);
        selection(nav_ressources);
        // ANIMATIOS
        fondu(document.querySelector(".nav_title"));
    });
    
    nav_bonus.addEventListener("click", () => {
        let sectionClass = nav_bonus.getAttribute("id");
        eraser();
        switchSection(sectionClass);
        selection(nav_bonus);
        // ANIMATIOS
        fondu(document.querySelector(".nav_title"));
    });
    
}) ();

// DESIGNE DEV

(function () {
    
    card_a1.addEventListener("click", () => {

        let clause = card_a1.classList.item(2);

        switch (clause) {

            case "creations":
                eraser();
                nav_title_v2();
                bloom(card_a2,card_a1);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));

                break;
            case "travaux":

                eraser();
                nav_title_v2();
                bloom(card_a2,card_a1);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));
                
                break;
            case "ressources":

                eraser();
                nav_title_v2();
                bloom(card_a2,card_a1);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));
                
                break;
        
            default:
                break;
        };

    });

    
    card_a2.addEventListener("click", () => {

        eraser();
        
        let clause = card_a2.classList.item(2);

        switch (clause) {

            case "creations":

                eraser();
                nav_title_v2();
                bloom(card_a1,card_a2);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));

                break;
            case "travaux":

                eraser();
                nav_title_v2();
                bloom(card_a1,card_a2);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));
                
                break;
            case "ressources":

                eraser();
                nav_title_v2();
                bloom(card_a1,card_a2);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));
                
                break;
        
            default:
                break;
        };

    });
    
}) ();



