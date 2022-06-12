
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
    designe : "./assets/img/svg/divers/fichier 6.svg",
    dev : "./assets/img/svg/divers/dev.svg"
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
    const cta_commencer = document.createElement("a");
    cta.appendChild(cta_commencer);
    cta_commencer.className = "btn";
    cta_commencer.href = "#";
    cta_commencer.textContent = "Commencer";
    // cta.innerHTML= '<a class = "btn"> commencer</a>';

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
                // selection(container_logo);
        
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

    };

    const contentAbout_list = function (array) {
        // console.log(params1);
        let container = card_a1.querySelector(".container");
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
        };
        
        container.querySelector("img").src = array[array.length - 1];
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
            event.preventDefault
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
                    
                }

            },300)

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

    
        
    const switchDesigneDev = function (objet,array) {
        let designe = document.createElement("div");
        designe.className = "designe_dev";
        objet.appendChild(designe);
        let designe_image = document.createElement("img");
        designe.appendChild(designe_image);
        designe_image.src = array;
    };

    const nav = function (element) {
        
        element.addEventListener("click", function (event)  {

            let sectionClass = this.getAttribute("id");

            if ((card_a1.classList.contains("bloom") || card_a1.classList.contains("fade")) || card_a1.classList.contains(sectionClass) != true) {
                
                eraser();
                switchSection(sectionClass);
                switchDesigneDev(card_a1,tabDesigne_dev.designe);
                switchDesigneDev(card_a2,tabDesigne_dev.dev);
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
            parent.appendChild(container);
            // element.prepend(container);
    
            let titre = document.createElement("h3");
            container.appendChild(titre);
            titre.textContent = array[counter].titre;
            let link = document.createElement("a");
            container.appendChild(link);
            link.href = "#";
            let backgroound = document.createElement("img");
            link.appendChild(backgroound);
            backgroound.src = "#";
            let buided = document.createElement("span");
            container.appendChild(buided);
            buided.textContent = "date";

            counter++;
            
        };

        
        /*
        next.addEventListener("click", function (event) {
            this.style.color = "red";
            event.stopPropagation();
        });
        */
    };
    
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

    });

    
}) ();


})();


});
