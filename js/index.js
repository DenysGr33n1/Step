let tab = function () {
  let tabNav = document.querySelectorAll(".tabs-title");
  let tabContent = document.querySelectorAll(".tab");
  let tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });
  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
    tabName = this.getAttribute("data-tab-name");
    console.log(tabName);
    selectTabContant(tabName);
  }
  function selectTabContant(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};
tab();

const containerWork = document.querySelector(".work-example-place");
const workBtn = document.querySelector("#work-btn");
const loaderWork = document.querySelector(".loader-work");
const numberImg = 12;
let workFlag = false;

const workAllSrc = {
  graphicDesignSrc: [
    "./img/graphic-design/graphic-design4.jpg",
    "./img/graphic-design/graphic-design5.jpg",
    "./img/graphic-design/graphic-design6.jpg",
  ],
  webDesignSrc: [
    "./img/web design/web-design5.jpg",
    "./img/web design/web-design6.jpg",
    "./img/web design/web-design7.jpg",
  ],
  landingPagesSrc: [
    "./img/landing page/landing-page3.jpg",
    "./img/landing page/landing-page4.jpg",
    "./img/landing page/landing-page5.jpg",
  ],
  wordpressSrc: [
    "./img/wordpress/wordpress4.jpg",
    "./img/wordpress/wordpress5.jpg",
    "./img/wordpress/wordpress6.jpg",
  ],
};
function loadImg(number) {
  let result = [];

  for (let i = 0; i < number; i++) {
    if (i < 3) {
      const graphicDesign = document
        .querySelector("#graphic-design")
        .cloneNode(true);
      graphicDesign.firstElementChild.src = workAllSrc.graphicDesignSrc[i % 3];
      result.push(graphicDesign);
    }
    if (i >= 3 && i < 6) {
      const webDesign = document.querySelector("#web-design").cloneNode(true);
      webDesign.firstElementChild.src = workAllSrc.webDesignSrc[i % 3];
      result.push(webDesign);
    }
    if (i >= 6 && i < 9) {
      const landingPages = document
        .querySelector("#landing-pages")
        .cloneNode(true);
      landingPages.firstElementChild.src = workAllSrc.landingPagesSrc[i % 3];
      result.push(landingPages);
    }
    if (i >= 9) {
      const wordpress = document.querySelector("#wordpress").cloneNode(true);
      wordpress.firstElementChild.src = workAllSrc.wordpressSrc[i % 3];
      result.push(wordpress);
    }
  }
  shuffleArray(result);
  return result;
}

workBtn.addEventListener("click", (e) => {
  e.preventDefault();

  loaderWork.classList.toggle("hidden");
  workBtn.classList.toggle("hidden");

  setTimeout(() => {
    loaderWork.classList.toggle("hidden");
    if (workFlag) {
      containerWork.append(...loadImg(numberImg));
      workBtn.remove();
      workFlag = false;
    } else {
      containerWork.append(...loadImg(numberImg));
      workBtn.classList.toggle("hidden");
      workFlag = true;
    }
    workExample = document.querySelectorAll(".work-example");
  }, 2000);
});

let workExample = document.querySelectorAll(".work-example");
let workFilter = document.querySelector(".work-filter");

workFilter.addEventListener("click", (e) => {
  for (let elem of workFilter.children) {
    elem.classList.remove("work-focus");
    if (elem == e.target) {
      elem.classList.add("work-focus");
    }
  }
  workExample.forEach((element) => {
    if (e.target.dataset.type === "all") {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
      if (e.target.dataset.type === element.dataset.type) {
        element.classList.remove("hidden");
      }
    }
  });
});

let mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      let src = this.slides[index]
        .querySelector(".about-ham-img")
        .getAttribute("src");
      return `<img class="${className}" src="${src}" alt="Photo">`;
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
