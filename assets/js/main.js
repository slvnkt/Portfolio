// funcyion is mobile

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
if (!isMobile.any()) {
  document.body.classList.contains("_touch")
    ? document.body.classList.remove("_touch")
    : null;
  document.body.classList.add("_pc");
} else {
  document.body.classList.contains("_pc")
    ? document.body.classList.remove("_pc")
    : null;
  document.body.classList.add("_touch");
}

if (isMobile.iOS()) {
  document.querySelector(".wrapper").classList.add("iphone");
}
// ibg image

function ibg() {
  let ibg = document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

//============Menu burger start=========================================================

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock"); //stop scroll
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    e.preventDefault();
  });
}

//============Menu burger end===========================================================
//============Scroll onClick start========================================================

// HTML <a dataset-goto=".class"/>'

const menuLinks = document.querySelectorAll("[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        document.querySelector(".header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock"); //stop scroll
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
//============Scroll onClick end========================================================

//================= button start ============================================
document.querySelectorAll(".glow-button").forEach((button) => {
  const gradientElem = document.createElement("div");
  gradientElem.classList.add("gradient");

  button.appendChild(gradientElem);

  button.addEventListener("pointermove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(button, {
      "--pointer-x": `${x}px`,
      "--pointer-y": `${y}px`,
      duration: 0.6,
    });

    gsap.to(button, {
      "--button-glow": chroma
        .mix(
          getComputedStyle(button)
            .getPropertyValue("--button-glow-start")
            .trim(),
          getComputedStyle(button).getPropertyValue("--button-glow-end").trim(),
          x / rect.width
        )
        .hex(),
      duration: 0.2,
    });
  });
});

//================= button end ============================================

/* -- Glow effect -- */

// const blob = document.getElementById("blob");

// window.onpointermove = (event) => {
//   const { clientX, clientY } = event;

//   blob.animate(
//     {
//       left: `${clientX}px`,
//       top: `${clientY}px`,
//     },
//     { duration: 3000, fill: "forwards" }
//   );
// };

/* -- Glow effect end -- */

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

//========================= Lotti start===============================

const anim = lottie;

anim.loadAnimation({
  container: document.querySelector("#anim1"),
  rendere: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/json/01.json",
});
anim.loadAnimation({
  container: document.querySelector("#anim2"),
  rendere: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/json/02.json",
});
anim.loadAnimation({
  container: document.querySelector("#anim3"),
  rendere: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/json/03.json",
});
anim.loadAnimation({
  container: document.querySelector("#anim4"),
  rendere: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/json/04.json",
});
anim.loadAnimation({
  container: document.querySelector("#anim5"),
  rendere: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/json/05.json",
});
anim.loadAnimation({
  container: document.querySelector("#anim6"),
  rendere: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/json/06.json",
});

//========================= Lotti end===============================
