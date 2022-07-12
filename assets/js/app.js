window.addEventListener("load", function (event) {
  this.setTimeout(function () {
    const loader = document.querySelector("#container_loader");
    loader.classList.add("disactive");

    this.setTimeout(function () {
      loader.style.display = "none";
    }, 1000);
  }, 500);
});

// SHAPE ACCUEIL

// CARDS
class cards {
  constructor() {
    this.card_1 = document.querySelector(".cards.a1");
    this.card_2 = document.querySelector(".cards.a2");
    this.card_3 = document.querySelector(".cards.a3");
    this.card_4 = document.querySelector(".cards.a4");
  }
}

// HEADER

class header {
  constructor() {
    this.container_logo = document.querySelector("#container-logo");
  }
}

// NAV PRINCIPAL

class navMain {
  constructor() {
    this.nav = document.querySelector("#nav-principal");
    this.nav_About = document.querySelector("#profil");
    this.nav_Creations = document.querySelector("#creations");
    this.nav_ressources = document.querySelector("#ressources");
    // this.nav_Travaux = document.querySelector("#travaux");
    // this.nav_bonus = document.querySelector("#bonus");
  }
}

// NAV SECONDARY

const navSecondary = document.querySelector("#nav-secondary");

// ABOUT NAV
class navAbout {
  constructor() {
    this.about_profil = document.querySelector("#profil-2");
    this.about_competences = document.querySelector("#competences");
    this.about_formations = document.querySelector("#formations");
    this.about_interet = document.querySelector("#interet");
    this.about_exp_pro = document.querySelector("#exp-pro");
    this.contact = document.querySelector("#contact");
    this.about_social = document.querySelector("#resaux");
  }
}

// ARRAY
const cards = document.querySelectorAll(".cards");

// ANIMATIONS
let animations = {
  fondu: function (element, duration = 400, delay = 0) {
    element.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: duration,
      delay: delay,
    });
  },

  travel: function (element, duration = 1000, dist = "0") {
    element.animate([{ width: "0%" }, { width: dist }], {
      duration: duration,
      delay: 300,
      fill: "forwards",
    });
  },

  depli: function (elememt, duration = 800, delay = 0) {
    elememt.animate(
      [
        { opacity: "0" },
        { opacity: "0", transform: "scaley(0)" },
        { opacity: "1", transform: "scaley(1)" },
      ],
      {
        duration: duration,
        delay: delay,
        easing: "ease-out",
      }
    );
  },

  slideIN_right: function (elememt, duration = 500, delay = 0) {
    elememt.animate(
      [
        { opacity: "0" },
        { opacity: "0", transform: "translatex(100%)" },
        { opacity: "1", transform: "translatex(0%)" },
      ],
      {
        duration: duration,
        delay: delay,
        easing: "ease-out",
      }
    );
  },

  slideIN_left: function (elememt, duration = 500, delay = 0) {
    elememt.animate(
      [
        { opacity: "0" },
        { opacity: "0", transform: "translatex(-100%)" },
        { opacity: "1", transform: "translatex(0%)" },
      ],
      {
        duration: duration,
        delay: delay,
        easing: "ease-out",
      }
    );
  },

  slideIN_top: function (elememt, duration = 500, delay = 0) {
    elememt.animate(
      [
        { opacity: "0" },
        { opacity: "0", transform: "translatey(-100%)" },
        { opacity: "1", transform: "translatey(0%)" },
      ],
      {
        duration: duration,
        delay: delay,
        easing: "ease-out",
      }
    );
  },

  slideIN_bottom: function (elememt, duration = 500, delay = 0) {
    elememt.animate(
      [
        { opacity: "0" },
        { opacity: "0", transform: "translatey(100%)" },
        { opacity: "1", transform: "translatey(0%)" },
      ],
      {
        duration: duration,
        delay: delay,
        easing: "ease-out",
      }
    );
  },

  replace: function (elememt, duration = 800, delay = 0) {
    elememt.animate(
      [
        // {opacity: "0"},
        { opacity: "1", transform: "translatey(0%)" },
        { opacity: "0", transform: "translatey(-130%)" },
        // {opacity: "0"},
        { opacity: "0", transform: "translatey(130%)" },
        { opacity: "1", transform: "translatey(0%)" },
      ],
      {
        duration: duration,
        delay: delay,
        easing: "ease-in-out",
      }
    );
  },
};

// FUNCTIONS

let meFunctions = {
  eraser: function () {
    for (let i = 0; i < cards.length; i++) {
      let el = cards[i].firstElementChild;
      if (el != null || undefined) {
        el.remove();
      } else {
        continue;
      }
    }

    if (
      card_a1.classList.contains("bloom") ||
      card_a1.classList.contains("fade")
    ) {
      card_a1.classList.remove(card_a1.classList.item(3));
      card_a2.classList.remove(card_a2.classList.item(3));
      // card_a3.classList.remove("place");
      // card_a4.classList.remove("place");
      // card_a5.classList.remove("place");
      // card_a6.classList.remove("place");
    }

    let verif = navSecondary.parentNode.querySelector(".nav_title.v2");
    if (verif != null || undefined) {
      verif.classList.remove("v2");
    }
  },

  switchSection: function (section) {
    for (let c = 0; c < cards.length; c++) {
      let cardsClass = cards[c].classList.item(2);
      cards[c].classList.replace(cardsClass, section);
    }

    let navSecondaryClass = navSecondary.classList.item(1);

    if (navSecondaryClass === null || undefined) {
      navSecondary.classList.add(section);
    } else {
      navSecondary.classList.replace(navSecondaryClass, section);
    }

    if (section === "profil") {
      let section = "about";
      navSecondary.parentNode.querySelector("h2").textContent =
        section + "   |";
    } else {
      navSecondary.parentNode.querySelector("h2").textContent = section;
    }

    if (section === contact.getAttribute("id")) {
      contact.classList.add("desactive");
    } else {
      contact.classList.remove("desactive");
    }
  },

  selection: function (element) {
    let li_active = nav_principal.querySelector("li.active");

    if (li_active === null || undefined) {
      element.classList.add("active");
    } else if ((li_active != null || undefined) && element === container_logo) {
      li_active.classList.remove("active");
    } else {
      li_active.classList.remove("active");
      element.classList.add("active");
    }
  },

  bloom: function (card_1, card_2) {
    card_1.classList.add("fade");
    card_2.classList.add("bloom");
  },

  nav_title_v2: function () {
    navSecondary.parentNode.querySelector(".nav_title").classList.add("v2");
  },

  defaultPage: function () {
    const container = document.createElement("div");
    card_a1.appendChild(container);
    container.className = "container";

    const article = document.createElement("article");
    article.className = "accueil_article";
    container.appendChild(article);

    const cta = document.createElement("div");
    container.appendChild(cta);
    cta.className = "accueil_cta";
    const cta_commencer = document.createElement("span");
    cta.appendChild(cta_commencer);
    cta_commencer.className = "btn ";
    cta_commencer.textContent = "Commencer ";

    const accueil_illus = document.createElement("div");
    accueil_illus.className = "accueil_article_illustration";
    container.appendChild(accueil_illus);

    const profil = document.createElement("div");
    profil.className = "accueil_article_profil";
    article.appendChild(profil);
    profil.innerHTML = '<img src="" alt="Image de profil"> <h2></h2>';
    profil.querySelector("img").src = "./assets/img/logo/logo.svg";
    profil.querySelector("h2").innerHTML = "faizdine";

    const paraph = document.createElement("p");
    article.appendChild(paraph);

    paraph.textContent =
      "Bonjour, et bienvenu sur mon portfolio. \
          En tant que concepteur designer UI je suis toujours en quête de nouveaux projets ou poser mes idées de créations. ";

    const illustration = container.querySelector(
      ".accueil_article_illustration"
    );
    illustration.innerHTML = '<img src="" alt="Illustration de l\'article">';
    illustration.querySelector("img").src =
      "./assets/img/svg/accueil/accueil.svg";

    for (let i = 1; i < 4; i++) {
      const element = cards[i];
      let v = i - 1;
      let link = document.createElement("a");
      element.appendChild(link);
      link.innerHTML = "contenu";
      link.href = cards_data.creations.recent[v].link;
      link.target = "_blank";
    }
  },

  contentAbout_profil: function () {
    card_a1.innerHTML = '<div class="container"></div>';

    const container = card_a1.querySelector(".container");
    container.innerHTML =
      '<div class="profil_illustration"><img src="" alt="Illustration"> </div> <article> <h3></h3> <p></p> </article>';

    container.querySelector("img").src =
      "./assets/img/svg/about/presentation.svg";
    container.querySelector("h3").innerHTML = "Présentation";
    let paragraph = container.querySelector("p");
    paragraph.innerHTML =
      "Esprit d’équipe, Sociable et Dynamique.\
        Intégrer une entreprise telle que la vôtre serais pour moi une chance de bien débuter dans le métier et d'améliorer mes compétences.\
        Actuellement en formation Concepteur designer UI, je me permets de de vous soumettre ma candidature de stage.\
        </br>";

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
  },

  contentAbout_list: function (array) {
    // console.log(params1);
    let container = card_a1.querySelector(".container");
    let illustration = container.querySelector("img");
    illustration.className = "illus_1";
    illustration.src = array[array.length - 1];

    const article = card_a1.querySelector(".container article");
    let paraph = article.querySelector("p");

    if (paraph != null || undefined) {
      paraph.remove();
    }
    article.innerHTML = "<ul></ul>";
    const list = article.querySelector("ul");

    for (let i = 0; i < array.length - 1; i++) {
      let el = document.createElement("li");
      el.innerHTML = `<span> ${array[i].texte} </span>`;
      list.appendChild(el);

      let img = document.createElement("img");
      img.src = array[i].Image;
      el.prepend(img);

      el.addEventListener("click", function (event) {
        event.stopPropagation();
        let illustrationPorfil = container.querySelector(
          ".profil_illustration"
        );
        let taux = illustrationPorfil.querySelector(".stats_taux");
        let link = illustrationPorfil.querySelector(".stats_link");
        about_competences.classList.contains("active")
          ? link.classList.add("desactive")
          : link.classList.remove("desactive");

        illustrationPorfil.classList.add("active");
        console.log(this.querySelector("img").getAttribute("src"));
        illustrationPorfil.querySelector(".stats_container img").src =
          this.querySelector("img").getAttribute("src");

        if (this.classList.contains("active")) {
          event.preventDefault();
        } else if (list.querySelector(".active") === null || undefined) {
          this.classList.add("active");
        } else {
          this.parentNode.querySelector(".active").classList.remove("active");
          this.classList.add("active");
        }

        illustrationPorfil.querySelector(".stats_def").textContent =
          array[i].stats_def;
        illustrationPorfil.querySelector(".stats_text").textContent =
          array[i].stats_text;

        travel(taux, undefined, array[i].taux);
        illustrationPorfil.querySelector(".stats_purcent").textContent =
          array[i].taux;
        illustrationPorfil.querySelector(".stats_link").innerHTML =
          this.querySelector("span").textContent;

        let ancre = (link.href = array[i].ancre);

        if (ancre === undefined || null) {
          illustrationPorfil.querySelector(".stats_link").href = "#";
        } else {
          illustrationPorfil.querySelector(".stats_link").href = array[i].ancre;
          illustrationPorfil.querySelector(".stats_link").target = "_blank";
        }
      });
    }
  },

  active: function (element) {
    if (element.classList.contains("active")) {
      return false;
    } else {
      element.parentNode.querySelector(".active").classList.remove("active");
      element.classList.add("active");
    }
  },

  about_nav: function (element, array) {
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
      }, 300);

      if (
        card_a1
          .querySelector(".profil_illustration")
          .classList.contains("active")
      ) {
        card_a1
          .querySelector(".profil_illustration")
          .classList.remove("active");
      }
    });
  },

  switchDesigneDev: function (objet) {
    let designe = document.createElement("div");
    designe.className = "designe_dev";
    objet.appendChild(designe);
  },

  nav: function (element) {
    element.addEventListener("click", function (event) {
      let sectionClass = this.getAttribute("id");

      if (
        card_a1.classList.contains("bloom") ||
        card_a1.classList.contains("fade") ||
        card_a1.classList.contains(sectionClass) != true
      ) {
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
  },
  content: function () {
    const container = document.createElement("div");
    card_a1.appendChild(container);
    container.className = "container";

    const contact_content = document.createElement("div");
    container.appendChild(contact_content);
    contact_content.className = "contact_content";

    const name = document.createElement("span");
    contact_content.appendChild(name);
    name.textContent = "Nom : TOUMBOU";

    const userName = document.createElement("span");
    contact_content.appendChild(userName);
    userName.textContent = "Prénom : Faizdine";

    /*const email = document.createElement("span");
        contact_content.appendChild(email);
        email.textContent = "E-mail : naruto.akatsuki.senine@gmail.com";
        */

    const linkedin = document.createElement("span");
    contact_content.appendChild(linkedin);
    linkedin.textContent = "Linkedin : ";
    const link = document.createElement("a");
    linkedin.appendChild(link);
    link.href = "#";
    link.textContent = "Mon profil Linkedin";

    const paraph = document.createElement("p");
    contact_content.appendChild(paraph);
    paraph.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis assumenda cumque nostrum! Temporibus ea id, repellendus ipsa, officiis nisi est voluptatibus similique maiores iste porro itaque soluta. Impedit, fugit. Voluptates.";

    const cta = document.createElement("div");
    contact_content.appendChild(cta);
    cta.classList = "contact_cta";
    const cta_monCV = document.createElement("a");
    cta.appendChild(cta_monCV);
    cta_monCV.className = "btn";
    cta_monCV.textContent = "Télécharger mon CV";
    cta_monCV.href = "assets/docs/CV_Faizdine_TOUMBOU.pdf";

    cta_monCV.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  },

  cards_generator: function (array, elememt) {
    let parent = document.createElement("div");
    parent.className = "designe_dev";
    elememt.appendChild(parent);
    parent.classList.add("active");

    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      let container = document.createElement("div");
      container.className = "container_card";
      parent.appendChild(container);

      let project = document.createElement("a");
      project.className = "project";
      project.href = array[i].link;
      project.target = "_blank";
      console.log(`url(${array[i].Image})`);
      project.style.backgroundImage = `url(${array[i].image})`;
      container.appendChild(project);

      let infos = document.createElement("div");
      infos.className = "infos";
      container.appendChild(infos);

      let link = document.createElement("a");
      link.textContent = array[counter].titre;
      link.href = array[i].link;
      link.target = "_blank";
      infos.appendChild(link);

      let def = document.createElement("p");
      def.className = "cards_def";
      def.textContent = array[i].def;
      link.appendChild(def);

      let bulded = document.createElement("span");
      bulded.className = "date";
      bulded.textContent = "date";
      infos.appendChild(bulded);

      counter++;
    }
  },

  projects_mouseOver: function () {
    const projects = document.querySelectorAll(".project");

    for (let p = 0; p < projects.length; p++) {
      const element = projects[p];
      const active = element.parentNode;

      element.addEventListener("mouseover", function (event) {
        event.stopPropagation();
        active.classList.add("active");

        this.addEventListener("click", function (event) {
          event.stopPropagation();
        });
      });

      let verif = 0;

      // cardHover(element,".infos a p",active);
      // cardHover(element,".infos a",active);

      element.addEventListener("mouseout", function (event) {
        event.stopPropagation();

        this.parentNode
          .querySelector(".infos a p")
          .addEventListener("mouseover", function (event) {
            event.stopPropagation();
            verif = 1;

            this.addEventListener("mouseout", function (event) {
              event.stopPropagation();
              active.classList.remove("active");
              verif = 0;
            });
          });

        setTimeout(() => {
          if (verif === 0) {
            active.classList.remove("active");
          }
        }, 300);
      });
    }
  },
};

// ACCUEIL

defaultPage();

container_logo.addEventListener("click", () => {
  let sectionClass = "accueil";

  (() => {
    if (card_a1.classList.contains(sectionClass)) {
      return false;
    } else {
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
  })();
});

// ABOUT ME
document
  .querySelector(".accueil_cta")
  .addEventListener("click", function (event) {
    let sectionClass = nav_About.getAttribute("id");
    eraser();
    switchSection(sectionClass);
    selection(nav_About);
    contentAbout_profil();
    // ANIMATIOS
    fondu(navSecondary.parentNode.querySelector(".nav_title"));
    fondu(navSecondary.querySelector("ul"));
    depli(card_a1, 300, 0);

    let li_active = navSecondary.querySelector("li.active");

    li_active === null || undefined
      ? about_profil.classList.add("active")
      : li_active.classList.remove("active"),
      about_profil.classList.add("active");
  });

nav_About.addEventListener("click", function (event) {
  let sectionClass = this.getAttribute("id");
  if (card_a1.classList.contains(sectionClass)) {
    event.preventDefault();
  } else {
    eraser();
    switchSection(sectionClass);
    selection(this);
    contentAbout_profil();
    // ANIMATIOS
    fondu(navSecondary.parentNode.querySelector(".nav_title"));
    fondu(navSecondary.querySelector("ul"));
    depli(card_a1, 300, 0);

    let li_active = navSecondary.querySelector("li.active");

    li_active === null || undefined
      ? about_profil.classList.add("active")
      : li_active.classList.remove("active"),
      about_profil.classList.add("active");
  }
});

about_nav(about_profil);
about_nav(about_competences, tab_competences);
about_nav(about_formations, tab_formations);
about_nav(about_interet, tab_interet);
about_nav(about_exp_pro, tab_exp_pro);
about_nav(about_social, tab_social);

// NAV PRICIPAL
nav(nav_Creations);
// nav(nav_Travaux);
nav(nav_ressources);
// nav(nav_bonus);

// CONTACT
contact.addEventListener("click", function (event) {
  eraser();
  let sectionClass = this.getAttribute("id");
  switchSection(sectionClass);
  bloom(card_a2, card_a1);
  content();
});

// DESIGNE DEV

let counter = 0;

card_a1.addEventListener("click", function (event) {
  if (
    card_a3.classList.contains("place") ||
    this.classList.contains("accueil") ||
    this.classList.contains("profil") ||
    this.classList.contains("contact")
  ) {
    return false;
  }

  counter = 0;

  eraser();
  let cas = this.classList.item(2);
  cards_generator(cards_data[cas].designe, this);

  switch (cas) {
    case "creations":
      nav_title_v2();
      bloom(card_a2, this);
      // ANIMATIOS
      fondu(document.querySelector(".nav_title"));

      break;

    case "ressources":
      nav_title_v2();
      bloom(card_a2, this);
      // ANIMATIOS
      fondu(document.querySelector(".nav_title"));

      break;

    default:
      break;
  }

  projects_mouseOver();
});

card_a2.addEventListener("click", function () {
  if (
    card_a3.classList.contains("place") ||
    this.classList.contains("accueil") ||
    this.classList.contains("profil") ||
    this.classList.contains("contact")
  ) {
    return false;
  }

  counter = 0;

  eraser();
  let cas = this.classList.item(2);
  cards_generator(cards_data[cas].dev, this);

  switch (cas) {
    case "creations":
      nav_title_v2();
      bloom(card_a1, this);
      // ANIMATIOS
      fondu(document.querySelector(".nav_title"));

      break;

    case "ressources":
      // eraser();
      nav_title_v2();
      bloom(card_a1, this);
      // ANIMATIOS
      fondu(document.querySelector(".nav_title"));

      break;

    default:
      break;
  }

  projects_mouseOver();
});
