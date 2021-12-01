//HEADER*************


const nav = document.querySelector(".navigation");
const hamburgerBtn = document.querySelector(".hamburgerBtn");
const headerMobile = document.querySelector(".headerMobile");
hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  headerMobile.classList.add("hide");
  document.body.style.overflowY = "hidden";
});
const xBtn = document.querySelector(".xBtn");

xBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  headerMobile.classList.remove("hide");
  document.body.style.overflowY = "auto";
})



//tabber
let tab1 = document.getElementById("firstTab");
let tab2 = document.getElementById("secondTab");
let tab3 = document.getElementById("thirdTab");
let title1 = document.getElementById("firstTitle");
let title2 = document.getElementById("secondTitle");
let title3 = document.getElementById("thirdTitle");
let content = document.getElementById("content");

const showFirstTab = () => {
  tab1.classList.remove("hide");
  tab2.classList.add("hide");
  tab3.classList.add("hide");
  title1.classList.add("activated");
  title2.classList.remove("activated");
  title3.classList.remove("activated");
  content.appendChild(tab1);
}

const showSecondTab = () => {
  tab1.classList.add("hide");
  tab2.classList.remove("hide");
  tab3.classList.add("hide");
  title1.classList.remove("activated");
  title2.classList.add("activated");
  title3.classList.remove("activated");
  content.appendChild(tab2);
}

const showThirdTab = () => {
  tab1.classList.add("hide");
  tab2.classList.add("hide");
  tab3.classList.remove("hide");
  title1.classList.remove("activated");
  title2.classList.remove("activated");
  title3.classList.add("activated");
  content.appendChild(tab3);
}
