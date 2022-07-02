
window.addEventListener("load", function (event) {

    this.setTimeout(function () {
        const loader = document.querySelector("#container_loader");
        loader.classList.add("disactive");
        
        this.setTimeout(function () {
            loader.style.display ="none";
        },1000)

    },500);

(function () {

// SHAPE ACCUEIL

// CARDS

const card_a1 = document.querySelector(".cards.a1");
const card_a2 = document.querySelector(".cards.a2");
const card_a3 = document.querySelector(".cards.a3");
const card_a4 = document.querySelector(".cards.a4");
const card_a5 = document.querySelector(".cards.a5");
const card_a6 = document.querySelector(".cards.a6");

// HEADER

const container_logo = document.querySelector("#container-logo");

// NAV PRINCIPAL

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
const contact = document.querySelector("#contact");
const about_social = document.querySelector("#resaux");

// ARRAY

const nav_list = document.querySelectorAll("#nav-principal .list li");
const cards = document.querySelectorAll(".cards");
const tab_about = document.querySelectorAll(".secondary_ul li");

// ABOUT ME

const tab_competences = [
    
    {   texte :"HTML",
        Image:"./assets/img/svg/about/icons8-html-5-96.svg",
        taux: "95%",
        stats_def: `
        HTML signifie « HyperText Markup Language » qu'on peut traduire par « langage de balises pour l'hypertexte ». Il est utilisé afin de créer et de représenter le contenu d'une page web et sa structure. D'autres technologies sont utilisées avec HTML pour décrire la présentation d'une page (CSS) et/ou ses fonctionnalités interactives (JavaScript).`,

        stats_text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto assumenda cum harum beatae ipsa culpa consequatur, obcaecati deserunt rem est aspernatur, consectetur quibusdam sunt ipsum reprehenderit maxime. Iusto, nostrum.`
},

    {   texte :"CSS",
        Image:"./assets/img/svg/about/icons8-css3-96.svg",
        taux: "75%",
        stats_def: `
        CSS est l'un des langages principaux du Web ouvert et a été standardisé par le W3C. Ce standard évolue sous forme de niveaux (levels), CSS1 est désormais considéré comme obsolète, CSS2.1 correspond à la recommandation et CSS3, qui est découpé en modules plus petits, est en voie de standardisation.`,

        stats_text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto assumenda cum harum beatae ipsa culpa consequatur, obcaecati deserunt rem est aspernatur, consectetur quibusdam sunt ipsum reprehenderit maxime. Iusto, nostrum.`
},

    {   texte :"jascript",
        Image:"./assets/img/svg/about/icons8-javascript-96.svg",
        taux: "60%",
        stats_def: `
        vaScript (souvent abrégé en « JS ») est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web. Mais il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que Node.js, Apache CouchDB voire Adobe Acrobat. Le code JavaScript est interprété ou compilé à la volée (JIT). C'est un langage à objets utilisant le concept de prototype, disposant d'un typage faible et dynamique qui permet de programmer suivant plusieurs paradigmes de programmation : fonctionnelle, impérative et orientée objet. Apprenez-en plus sur JavaScript.`,

        stats_text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto assumenda cum harum beatae ipsa culpa consequatur, obcaecati deserunt rem est aspernatur, consectetur quibusdam sunt ipsum reprehenderit maxime. Iusto, nostrum.`
},

    {   texte :"SASS",
        Image:"./assets/img/svg/about/icons8-sass-96.svg",
        taux: "60%",
        stats_def: `
        Sass (Syntactically awesome stylesheets) est un langage de script préprocesseur qui est compilé ou interprété en CSS (Cascading Style Sheets). SassScript est le langage de script en lui-même.`,
        
        stats_text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto assumenda cum harum beatae ipsa culpa consequatur, obcaecati deserunt rem est aspernatur, consectetur quibusdam sunt ipsum reprehenderit maxime. Iusto, nostrum.`
},

    {   texte :"bootstrap",
        Image:"./assets/img/svg/about/icons8-bootstrap-96.svg",
        taux: "70%",
        stats_def: `
        Bootstrap est une collection d'outils utiles à la création du design (graphisme, animation et interactions avec la page dans le navigateur, etc.) de sites et d'applications web. C'est un ensemble qui contient des codes HTML et CSS, des formulaires, boutons, outils de navigation et autres éléments interactifs, ainsi que des extensions JavaScript en option. C'est l'un des projets les plus populaires sur la plate-forme de gestion de développement GitHub.`,

        stats_text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto assumenda cum harum beatae ipsa culpa consequatur, obcaecati deserunt rem est aspernatur, consectetur quibusdam sunt ipsum reprehenderit maxime. Iusto, nostrum.`
},

    {   texte :"Wordpress",
        Image:"./assets/img/svg/about/icons8-wordpress-96.svg",
        taux: "60%",
        stats_def: `
        WordPress est un système de gestion de contenu (SGC ou content management system (CMS) en anglais) gratuit, libre et open-source. Ce logiciel écrit en PHP repose sur une base de données MySQL et est distribué par la fondation WordPress.org. Les fonctionnalités de WordPress lui permettent de créer et gérer différents types de sites Web : site vitrine, site de vente en ligne, site applicatif, blog, portfolio, site institutionnel, site d'enseignement…`,

        stats_text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto assumenda cum harum beatae ipsa culpa consequatur, obcaecati deserunt rem est aspernatur, consectetur quibusdam sunt ipsum reprehenderit maxime. Iusto, nostrum.`
},

    {   texte :"adobe Illustrator",
        Image:"./assets/img/svg/about/icons8-adobe-illustrator-96.svg",
        taux: "50%",
        stats_def: `
        Adobe Illustrator est un logiciel de création graphique vectorielle. Il fait partie de la gamme Adobe, peut être utilisé indépendamment ou en complément de Photoshop, et offre des outils de dessin vectoriel puissants. Les images vectorielles sont constituées de courbes générées par des formules mathématiques. `,
        stats_text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto assumenda cum harum beatae ipsa culpa consequatur, obcaecati deserunt rem est aspernatur, consectetur quibusdam sunt ipsum reprehenderit maxime. Iusto, nostrum.`
},

    {   texte :"adobe phtoshop",
        Image:"./assets/img/svg/about/icons8-adobe-photoshop-96.svg",
        taux: "40%",
        stats_def: `
        Photoshop est un logiciel de retouche, de traitement et de dessin assisté par ordinateur, lancé en 1990 puis en 1992 pour les systèmes d'exploitations MacOS et Windows.`,
        stats_text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto assumenda cum harum beatae ipsa culpa consequatur, obcaecati deserunt rem est aspernatur, consectetur quibusdam sunt ipsum reprehenderit maxime. Iusto, nostrum.`
},

    {   texte :"afther effect",
        Image:"./assets/img/svg/about/icons8-adobe-after-effects-96.svg",
        taux: "0%",
        stats_def: `
        Adobe After Effects ou After Effects est un logiciel, à l'origine, de montage vidéo qui est devenu par la suite un outil de composition (compositing en anglais) et d'effets visuels, pionnier de l'animation graphique sur ordinateur personnel, édité par la société Adobe Systems.
        Ce logiciel permet de créer des effets spéciaux et des animations graphiques pour tous supports et à partir de nombreux types de sources.`,

        stats_text: `
        Pas de données pour l'intant.`
},

    {   texte :"adobe premier pro",
        Image:"./assets/img/svg/about/icons8-adobe-premiere-pro-96.svg",
        taux: "0%",
        stats_def: `
        Adobe Premiere Pro, anciennement appelé Adobe Premiere, est un logiciel de montage vidéo. Il est intégré aux versions Production Premium et Master Collection de la Creative Suite.Adobe Premiere Pro gère de nombreux formats vidéo et intègre un système de scénarimage (storyboard) très complet. `,
        stats_text: `
        Pas de données pour l'intant.`
},

    {   texte :"adobe indesign",
        Image:"./assets/img/svg/about/icons8-adobe-indesign-96.svg",
        taux: "0%",
        stats_def: `
        Adobe InDesign est un logiciel de PAO produit par Adobe Systems. Initialement conçu pour créer des œuvres telles que des affiches, dépliants, brochures, magazines, journaux ou livres, il permet également de publier plusieurs types de contenus adaptés aux tablettes, lorsque utilisé avec Adobe DPS. `,
        stats_text: `
        Pas de données pour l'intant.`
},

    {   texte :"adobe XD",
        Image:"./assets/img/svg/about/icons8-adobe-xd-96.svg",
        taux: "75%",
        stats_def: `
        Adobe XD est un outil de conception d'expérience utilisateur vectoriel pour les applications Web et les applications mobiles, développé et publié par Adobe Inc.`,
        stats_text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto assumenda cum harum beatae ipsa culpa consequatur, obcaecati deserunt rem est aspernatur, consectetur quibusdam sunt ipsum reprehenderit maxime. Iusto, nostrum.`
},

    {   texte :"figma",
        Image:"./assets/img/svg/about/icons8-figma-96.svg",
        taux: "70%",
        stats_def: `
        HFigma est un éditeur de graphiques vectoriels et un outil de prototypage. Il est principalement basé sur le web, avec des fonctionnalités hors ligne supplémentaires activées par des applications de bureau pour macOS et Windows (par exemple : vous pouvez utiliser des polices locales sur la version desktop).`,
        stats_text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto assumenda cum harum beatae ipsa culpa consequatur, obcaecati deserunt rem est aspernatur, consectetur quibusdam sunt ipsum reprehenderit maxime. Iusto, nostrum.`
},

    {   texte :"git / github",
        Image:"./assets/img/svg/about/icons8-git-96.svg",
        taux: "65%",
        stats_def: `
        GitHub (exploité sous le nom de GitHub, Inc.) est un service web d'hébergement et de gestion de développement de logiciels, utilisant le logiciel de gestion de versions Git. `,
        stats_text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto assumenda cum harum beatae ipsa culpa consequatur, obcaecati deserunt rem est aspernatur, consectetur quibusdam sunt ipsum reprehenderit maxime. Iusto, nostrum.`
},

    "assets/img/svg/about/competences.svg"

];

const tab_formations = [
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

const tab_interet = [

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

const tab_exp_pro = [
    
    {   texte :"Gastronomie",
        Image:"./assets/img/svg/about/gastronomie.svg"
},

        "assets/img/svg/about/exp_pro.svg"

];

const tab_social = [
    
    {   texte :"linkedin",
        Image:"./assets/img/svg/about/icons8-linkedin-96.svg",
        ancre: "https://fr.linkedin.com/",
},
    
    {   texte :"instagram",
        Image:"./assets/img/svg/about/icons8-instagram-96.svg"
},
    
    {   texte :"twitter",
        Image:"./assets/img/svg/about/icons8-twitter-96.svg"
},

        "assets/img/svg/about/social.svg"

];

const tab_cards = [
    card_a3,
    card_a4,
    card_a5,
    card_a6
] 

const cards_data = [
    {
        titre:"titre de la card 1",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 2",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 3",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 4",
        image:"#",
        date:"00/00/2022"
    },
    // ........................................
    {
        titre:"titre de la card 1",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 2",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 3",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 4",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 1",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 2",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 3",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 4",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 1",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 2",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 3",
        image:"#",
        date:"00/00/2022"
    },
    {
        titre:"titre de la card 4",
        image:"#",
        date:"00/00/2022"
    },
] 

// OBJETS

// DESIGNE DEV

const tabDesigne_dev = {
    // designe : "./assets/img/svg/divers/designe.svg",
    // dev : "./assets/img/svg/divers/dev.svg"
};

// ANIMATIONS

const fondu = function (element, duration = 400 , delay = 0) {
    
    element.animate([
        {opacity:'0'},
        {opacity:'1'},
    ], 
    {
        duration: duration,
        delay:delay
    });

};

const travel = function (element, duration = 1000 , dist = "0") {
    
    element.animate([
        {width: '0%'},
        {width:dist},
    ], 
    {
        duration: duration,
        delay:300,
        fill: "forwards"
    });

};

const depli = function (elememt, duration = 800 , delay = 0) {

    elememt.animate([
        {opacity: "0"},
        {opacity:"0", transform: "scaley(0)"},
        {opacity:"1",transform: "scaley(1)"},
    ],
    {
        duration: duration,
        delay:delay,
        easing:"ease-out"
        
    });

};

const slideIN_right = function (elememt, duration = 500 , delay = 0) {

    elememt.animate([
        {opacity: "0"},
        {opacity:"0", transform: "translatex(100%)"},
        {opacity:"1",transform: "translatex(0%)"},
    ],
    {
        duration: duration,
        delay:delay,
        easing:"ease-out"
        
    });

};

const slideIN_left = function (elememt, duration = 500 , delay = 0) {

    elememt.animate([
        {opacity: "0"},
        {opacity:"0", transform: "translatex(-100%)"},
        {opacity:"1",transform: "translatex(0%)"},
    ],
    {
        duration: duration,
        delay:delay,
        easing:"ease-out"
        
    });

};

const slideIN_top = function (elememt, duration = 500 , delay = 0) {

    elememt.animate([
        {opacity: "0"},
        {opacity:"0", transform: "translatey(-100%)"},
        {opacity:"1",transform: "translatey(0%)"},
    ],
    {
        duration: duration,
        delay:delay,
        easing:"ease-out"
        
    });

};

const slideIN_bottom = function (elememt, duration = 500 , delay = 0) {

    elememt.animate([
        {opacity: "0"},
        {opacity:"0", transform: "translatey(100%)"},
        {opacity:"1",transform: "translatey(0%)"},
    ],
    {
        duration: duration,
        delay:delay,
        easing:"ease-out"
        
    });

};

const replace = function (elememt, duration = 800 , delay = 0) {

    elememt.animate([
        // {opacity: "0"},
        {opacity:"1", transform: "translatey(0%)"},
        {opacity:"0",transform: "translatey(-130%)"},
        // {opacity: "0"},
        {opacity:"0", transform: "translatey(130%)"},
        {opacity:"1",transform: "translatey(0%)"},
    ],
    {
        duration: duration,
        delay:delay,
        easing:"ease-in-out"
        
    });

};

// FUNCTIONS

const eraser = function () {
    
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
        // card_a3.classList.remove("place");
        // card_a4.classList.remove("place");
        // card_a5.classList.remove("place");
        // card_a6.classList.remove("place");
    };

    let verif = navSecondary.parentNode.querySelector(".nav_title.v2");
    if (verif != null || undefined) {
        verif.classList.remove("v2");
    };

};

const switchSection = function (section) {

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
    } 
    else {
        navSecondary.parentNode.querySelector("h2").textContent = section;
    };

    if(section === contact.getAttribute('id')) {
        contact.classList.add('desactive');
    } else {
        contact.classList.remove('desactive');
    };

};

const selection = function (element) {
    
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

const bloom = function (card_1, card_2) {
    card_1.classList.add("fade");
    card_2.classList.add("bloom");

};

const nav_title_v2 = function () {
    navSecondary.parentNode.querySelector(".nav_title").classList.add("v2");
};

const useAnimation = function (array,anim) {

    (function () {
        array.forEach(element => {
            anim(element);
        });
    }) ();
};

// ACCUEIL

(function () {

    const defaultPage = function () {

    const container = document.createElement("div");
    card_a1.appendChild(container);
    container.className = "container";

    const article = document.createElement("article");
    article.className = "accueil_article";
    container.appendChild(article);

    
    const cta = document.createElement("div");
    container.appendChild(cta)
    cta.classList= "accueil_cta";
    const cta_commencer = document.createElement("span");
    cta.appendChild(cta_commencer);
    cta_commencer.className = "btn";
    cta_commencer.textContent = "Commencer";

    const accueil_illus = document.createElement("div");
    accueil_illus.className = "accueil_article_illustration";
    container.appendChild(accueil_illus);

    const profil = document.createElement("div");
    profil.className = "accueil_article_profil";
    article.appendChild(profil);
    profil.innerHTML = '<img src="" alt="Image de profil"> <h2></h2>';
    profil.querySelector("img").src = './assets/img/logo/logo.svg';
    profil.querySelector("h2").innerHTML = "faizdine";
    
    const paraph = document.createElement("p");
    article.appendChild(paraph);

    paraph.textContent = 
    "Bonjour, et bienvenu sur mon portfolio.\ \
    En tant que concepteur designer UI je suis toujours en quête de nouveaux projets ou poser mes idées de créations. ";

    const illustration = container.querySelector(".accueil_article_illustration");
    illustration.innerHTML = '<img src="" alt="Illustration de l\'article">';
    illustration.querySelector('img').src = './assets/img/svg/accueil/accueil.svg';
    

    card_a2.innerHTML = '<img src="" alt="Illustration de la card">'
    card_a2.querySelector('img').src = './assets/img/Fichier 1.svg';
    
    const card_a3 = document.querySelector(".cards.a3");
    card_a3.innerHTML = '<img src="" alt="Illustration de la card">'
    card_a3.querySelector('img').src = './assets/img/Fichier 1.svg';
    
    const card_a4 = document.querySelector(".cards.a4");
    card_a4.innerHTML = '<img src="" alt="Illustration de la card">'
    card_a4.querySelector('img').src = './assets/img/Fichier 1.svg';
    };

    defaultPage();

    container_logo.addEventListener("click", () => {
        let sectionClass = "accueil";

        
        (  () => {
            if (card_a1.classList.contains(sectionClass)) {
            return false
        }
            else {
                eraser();
                defaultPage();
                switchSection(sectionClass);
                selection(container_logo);
        
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));
                slideIN_left(card_a1);
                slideIN_right(card_a2);
                slideIN_right(card_a3);
                slideIN_right(card_a4);
            }
    }   ) ();
    
    });

}) ();

// ABOUT ME

(function () {

    const contentAbout_profil = function () {

        card_a1.innerHTML= '<div class="container"></div>';

        const container = card_a1.querySelector(".container");
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

        let illustrationPorfil = container.querySelector(".profil_illustration");
        
        let stats = document.createElement("div");
        stats.className = "stats";
        illustrationPorfil.appendChild(stats);
        
        let stats_container = document.createElement("div");
        stats_container.className = "stats_container";
        stats.appendChild(stats_container);
        
        let sujet = document.createElement("img");
        stats_container.appendChild(sujet);
        
        let stats_def = document.createElement("p");
        stats_def.className = "stats_def";
        stats_container.appendChild(stats_def);
        
        let stats_text = document.createElement("p");
        stats_text.className = "stats_text";
        stats.appendChild(stats_text);
        
        
        let juge_container = document.createElement("div");
        juge_container.className = "juge_container";
        stats.appendChild(juge_container);
        
        let stats_juge = document.createElement("div");
        stats_juge.className = "stats_juge";
        juge_container.appendChild(stats_juge);
        
        let stats_purcent = document.createElement("span");
        stats_purcent.className = "stats_purcent";
        juge_container.appendChild(stats_purcent);
        
        let stats_taux = document.createElement("div");
        stats_taux.className = "stats_taux";
        stats_juge.appendChild(stats_taux);
        
        let stats_link = document.createElement("a");
        stats_link.className = "stats_link";
        stats_juge.appendChild(stats_link);

    };

    const contentAbout_list = function (array) {
        // console.log(params1);
        let container = card_a1.querySelector(".container");
        let illustration = container.querySelector("img");
        illustration.className = "illus_1"
        illustration.src = array[array.length - 1];

        const article = card_a1.querySelector(".container article");
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

            el.addEventListener("click", function (event) {
                event.stopPropagation();
                let illustrationPorfil = container.querySelector(".profil_illustration");
                let taux = illustrationPorfil.querySelector(".stats_taux");
                let link = illustrationPorfil.querySelector(".stats_link");
                about_competences.classList.contains("active") ? link.classList.add("desactive") : link.classList.remove("desactive");

                illustrationPorfil.classList.add("active");
                console.log(this.querySelector("img").getAttribute('src'));
                illustrationPorfil.querySelector(".stats_container img").src = this.querySelector("img").getAttribute('src');
                
                if (this.classList.contains("active")) {
                    event.preventDefault();
                } else if (list.querySelector(".active") === null || undefined) {
                    this.classList.add("active");
                } else {
                    this.parentNode.querySelector(".active").classList.remove("active");
                    this.classList.add("active");
                }

                illustrationPorfil.querySelector(".stats_def").textContent = array[i].stats_def;
                illustrationPorfil.querySelector(".stats_text").textContent = array[i].stats_text;

                travel(taux,undefined,array[i].taux)
                illustrationPorfil.querySelector(".stats_purcent").textContent = array[i].taux;
                illustrationPorfil.querySelector(".stats_link").innerHTML = this.querySelector("span").textContent;

                let ancre = link.href = array[i].ancre;

                if (ancre === undefined || null) {
                    illustrationPorfil.querySelector(".stats_link").href = "#";
                } else {
                    illustrationPorfil.querySelector(".stats_link").href = array[i].ancre;
                    illustrationPorfil.querySelector(".stats_link").target="_blank";
                }
                
            })
        };
        
    };

    const active = function (element) {
        
        if(element.classList.contains("active")) {
            return false
        } else {
            element.parentNode.querySelector(".active").classList.remove("active");
            element.classList.add("active");
        };
    };

    nav_About.addEventListener("click", function (event) {

        let sectionClass = this.getAttribute("id");

        ( () => {
            
        if (card_a1.classList.contains(sectionClass)) {
            event.preventDefault();
        }
        else {
            eraser();
            switchSection(sectionClass);
            selection(this);
            contentAbout_profil();
            // ANIMATIOS
            fondu(navSecondary.parentNode.querySelector(".nav_title"));
            fondu(navSecondary.querySelector("ul"));
            // useAnimation(tab_about,fondu,);
            depli(card_a1, 300, 0);
    
            let li_active = navSecondary.querySelector("li.active");
    
            li_active === null || undefined ? about_profil.classList.add("active") : 
            li_active.classList.remove("active"), about_profil.classList.add("active");
        }

        }) ();

    });

    const about_nav = function (element,array) {
    
        element.addEventListener("click", function (event) {
            
            // ANIMATIONS

            this.classList.contains("active") ? false : replace(card_a1);

            setTimeout(() => {
                if (element === about_profil) {
                    contentAbout_profil();
                    active(this);
                } else {
                    
                        contentAbout_list(array);
                        active(this);
                        travel(card_a1.querySelector(".stats_taux"));
                    
                }

            },300)

            if (card_a1.querySelector(".profil_illustration").classList.contains("active")) {
                card_a1.querySelector(".profil_illustration").classList.remove("active")
            };
            

        });
    
    };

    about_nav(about_profil);
    about_nav(about_competences, tab_competences);
    about_nav(about_formations, tab_formations);
    about_nav(about_interet, tab_interet);
    about_nav(about_exp_pro, tab_exp_pro);
    about_nav(about_social, tab_social);

}) ();

// NAV PRICIPAL

(function () {

    
        
    const switchDesigneDev = function (objet) {
        let designe = document.createElement("div");
        designe.className = "designe_dev";
        objet.appendChild(designe);
        // let designe_image = document.createElement("img");
        // designe.appendChild(designe_image);
        // designe_image.src = array;
    };

    const nav = function (element) {
        
        element.addEventListener("click", function (event)  {

            let sectionClass = this.getAttribute("id");

            if ((card_a1.classList.contains("bloom") || card_a1.classList.contains("fade")) || card_a1.classList.contains(sectionClass) != true) {
                
                eraser();
                switchSection(sectionClass);
                switchDesigneDev(card_a1);
                switchDesigneDev(card_a2);
                selection(this);
                
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));
                slideIN_top(card_a1);
                slideIN_bottom(card_a2);

            } else {
                event.preventDefault();
            }

    });

    };

    nav(nav_Creations);
    // nav(nav_Travaux);
    nav(nav_ressources);
    // nav(nav_bonus);
    
}) ();

// CONTACT

(function () {

    const content = function () {
        const container  = document.createElement("div");
        card_a1.appendChild(container);
        container.className = "container";

        const contact_content = document.createElement('div');
        container.appendChild(contact_content);
        contact_content.className = "contact_content";

        const name = document.createElement('span');
        contact_content.appendChild(name);
        name.textContent = "Nom : TOUMBOU";

        const userName = document.createElement('span');
        contact_content.appendChild(userName);
        userName.textContent = "Prénom : Faizdine";

        const email = document.createElement('span');
        contact_content.appendChild(email);
        email.textContent = "E-mail : naruto.akatsuki.senine@gmail.com"; 

        const linkedin = document.createElement('span');
        contact_content.appendChild(linkedin);
        linkedin.textContent = "Linkedin : ";
        const link = document.createElement('a');
        linkedin.appendChild(link)
        link.href = '#';
        link.textContent = 'Mon profil Linkedin';

        const paraph = document.createElement('p');
        contact_content.appendChild(paraph);
        paraph.textContent = 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis assumenda cumque nostrum! Temporibus ea id, repellendus ipsa, officiis nisi est voluptatibus similique maiores iste porro itaque soluta. Impedit, fugit. Voluptates.';

        const cta = document.createElement("div");
        contact_content.appendChild(cta)
        cta.classList= "contact_cta";
        const cta_monCV = document.createElement("a");
        cta.appendChild(cta_monCV);
        cta_monCV.className = "btn";
        cta_monCV.textContent = "Télécharger mon CV";
        cta_monCV.href = 'assets/docs/CV_Faizdine_TOUMBOU.pdf';

        cta_monCV.addEventListener('click', function (event) {
            event.stopPropagation();
        })
    };

    contact.addEventListener("click", function (event) {
        eraser();
        let sectionClass = this.getAttribute("id");
        switchSection(sectionClass);
        bloom(card_a2,card_a1);
        content();
    });

}) ();

// DESIGNE DEV

(function () {

    let counter = 0;
    
    const cards_generator = function (array, elememt) {

        let parent = document.createElement("div");
        parent.className = "designe_dev";
        elememt.appendChild(parent);
        parent.classList.add("active")
        
        /*
        let next = document.createElement("span"); 
        next.textContent = "Suivant";
        next.id = "suivant";
        let previous = document.createElement("span"); 
        previous.textContent = "Precedant";
        parent.prepend(previous);
        parent.appendChild(next);
        */

        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            
            let container = document.createElement("div");
            container.className = "container_card";
            parent.appendChild(container);
            
            let project = document.createElement("div");
            project.className = "project";
            container.appendChild(project);
            // let backgroound = document.createElement("img");
            // project.appendChild(backgroound);
            // backgroound.src = "assets/img/Fichier 1.svg";
            
            let  infos= document.createElement("div");
            infos.className = "infos";
            container.appendChild(infos);
            // element.prepend(container);
    
            
            let link = document.createElement("a");
            infos.appendChild(link);
            link.href = "#";
            
            let titre = document.createElement("span");
            link.appendChild(titre);
            titre.textContent = array[counter].titre;

            let bulded = document.createElement("span");
            bulded.className = "date";
            infos.appendChild(bulded);
            bulded.textContent = "date";

            counter++;
            
        };
        
    };

    const projects_mouseOver = function () {
        
        const projects = document.querySelectorAll(".project");
        
        for (let p = 0; p < projects.length; p++) {
            const element = projects[p];
            const active = element.parentNode;
            
            element.addEventListener("mouseover", function (event) {
                event.stopPropagation();
                active.classList.add("active");
                // console.log(active);
            });

            let verif = 0;

            element.addEventListener("mouseout", function (event) {
                // console.log(event);
                event.stopPropagation();
                
                this.parentNode.querySelector(".infos a").addEventListener("mouseover", function (event) {
                    event.stopPropagation();
                    verif = 1;

                    this.addEventListener("mouseout", function (event) {
                        event.stopPropagation();
                        active.classList.remove("active");
                        verif = 0;
                    });

                    this.addEventListener("click", function (event) {
                        event.stopPropagation();
                    });

                    console.log(verif);
                });
                
                setTimeout(() => {
                    if (verif === 0 ) {
                        active.classList.remove("active");
                        // verif++
                    };
                    console.log(verif);
                },300)



                
                // console.log(active);
            });


            
            /*active.querySelector(".infos").addEventListener("mouseout", function (event) {
                // event.stopPropagation();
                active.classList.remove("active");
                console.log(this);
            });*/
        };
    }
    
    card_a1.addEventListener("click", function box (event) {
        
        if (card_a3.classList.contains("place") || this.classList.contains("accueil") || this.classList.contains("profil") || this.classList.contains("contact")) {
            return false
        };

        counter = 0;

        eraser();
        let clause = this.classList.item(2);
        cards_generator(cards_data, this);

        switch (clause) {

            case "creations":
                nav_title_v2();
                bloom(card_a2,this);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));

                break;
            case "travaux":

                // eraser();
                nav_title_v2();
                bloom(card_a2,this);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));
                
                break;
            case "ressources":

                // eraser();
                nav_title_v2();
                bloom(card_a2,this);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));
                
                break;
        
            default:
                break;
        };

        projects_mouseOver();

    });

    
    card_a2.addEventListener("click", function () {
        
        if (card_a3.classList.contains("place") || this.classList.contains("accueil") || this.classList.contains("profil") || this.classList.contains("contact")) {
            return false
        };

        counter = 0;

        eraser();
        let clause = this.classList.item(2);
        cards_generator(cards_data, this);

        switch (clause) {

            case "creations":

                nav_title_v2();
                bloom(card_a1,this);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));

                break;
            case "travaux":

                // eraser();
                nav_title_v2();
                bloom(card_a1,this);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));
                
                break;
            case "ressources":

                // eraser();
                nav_title_v2();
                bloom(card_a1,this);
                // ANIMATIOS
                fondu(document.querySelector(".nav_title"));
                
                break;
        
            default:
                break;
        };

        projects_mouseOver();

    });
    
}) ();

})();

});
