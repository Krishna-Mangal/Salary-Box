
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

let elements = document.getElementsByClassName("share-a");
let element = elements[0];
element.addEventListener("click", () => openPop());
function openPop() {
  document.querySelector(".popup").style.display = "inline";
  document.querySelector(".pop-back").style.display = "flex";
}

let close = document.querySelector(".popup-close");
let closeP = close[0];
close.addEventListener("click", () => closePop());
function closePop() {
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".pop-back").style.display = "none";
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateContactNumber(number) {
  const regex = /^[1-9]\d{9}$/;
  return regex.test(number);
}

function validateWebsite(url) {
  const regex =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.?)+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9-]*)*\/?$/;
  return regex.test(url);
}

function cardGene() {
  const busiValue = document.querySelector("#Business_name").value.trim();
  const cont1Value = document.querySelector("#Contact_1").value.trim();
  const cont2Value = document.querySelector("#Contact_2").value.trim();
  const mailValue = document.querySelector("#email").value.trim();
  const webValue = document.querySelector("#website").value.trim();
  const addValue = document.querySelector("#address").value.trim();

  const nameError = document.getElementById("nameError");
  const cont1Error = document.getElementById("cont1Error");
  const cont2Error = document.getElementById("cont2Error");
  const mailError = document.getElementById("mailError");
  const websiteError = document.getElementById("websiteError");
  const addressError = document.getElementById("addressError");

  nameError.style.display = "none";
  cont1Error.style.display = "none";
  cont2Error.style.display = "none";
  mailError.style.display = "none";
  websiteError.style.display = "none";
  addressError.style.display = "none";

  let isValid = true;

  if (!busiValue) {
    nameError.style.display = "inline";
    isValid = false;
  }
  if (!cont1Value || !validateContactNumber(cont1Value)) {
    cont1Error.style.display = "inline";
    isValid = false;
  }
  if (cont2Value && !validateContactNumber(cont2Value)) {
    cont2Error.style.display = "inline";
    isValid = false;
  }
  if (!mailValue || !validateEmail(mailValue)) {
    mailError.style.display = "inline";
    isValid = false;
  }
  if (!webValue || !validateWebsite(webValue)) {
    websiteError.style.display = "inline";
    isValid = false;
  }
  if (!addValue) {
    addressError.style.display = "inline";
    isValid = false;
  }

  if (isValid) {
    document.querySelector("#busi-name").innerHTML = busiValue;
    document.querySelector(".cont1").innerHTML = cont1Value;
    document.querySelector("#cont2").innerHTML = cont2Value;
    document.querySelector(".mail").innerHTML = mailValue;
    document.querySelector(".web").innerHTML = webValue;
    document.querySelector(".add").innerHTML = addValue;
  }
}

document
  .querySelector("#generate_card")
  .addEventListener("click", () => cardGene());

function changeTemp1() {
  let temp1 = document.querySelector("#temp1");
  temp1.addEventListener("click", () => changeTemp1());
  let card = document.querySelector(".card");
  card.style.backgroundImage = "url('temp1.jpg')";
  card.style.paddingTop = "1.875rem";

  let crdDtl = document.querySelector("#card-detail");
  crdDtl.style.color = "orange";
  crdDtl.style.paddingLeft = "6.25rem";
  crdDtl.style.width = "21.875rem";

  let logo = document.querySelector("#card-logo");
  logo.style.display = "inline-block";

  let busName = document.querySelector("#busi-name");
  busName.style.textAlign = "left";
}
function changeTemp2() {
  let temp2 = document.querySelector("#temp2");
  temp2.addEventListener("click", () => changeTemp2());
  let card = document.querySelector(".card");
  card.style.backgroundImage = "url('temp2.jpg')";
  card.style.paddingTop = "0rem";

  let crdDtl = document.querySelector("#card-detail");
  crdDtl.style.color = "white";
  crdDtl.style.paddingLeft = "0px";
  crdDtl.style.width = "28.125rem";

  let logo = document.querySelector("#card-logo");
  logo.style.display = "none";
  let busName = document.querySelector("#busi-name");
  busName.style.textAlign = "center";
}
function changeTemp3() {
  let temp3 = document.querySelector("#temp3");
  temp3.addEventListener("click", () => changeTemp3());
  let card = document.querySelector(".card");
  card.style.backgroundImage = "url('temp3.jpg')";
  card.style.paddingTop = "0rem";

  let crdDtl = document.querySelector("#card-detail");
  crdDtl.style.color = "#201e32";
  crdDtl.style.paddingLeft = "0rem";
  crdDtl.style.width = "28.125rem";

  let logo = document.querySelector("#card-logo");
  logo.style.display = "none";
  let busName = document.querySelector("#busi-name");
  busName.style.textAlign = "center";
}
function changeTemp4() {
  let temp4 = document.querySelector("#temp4");
  temp4.addEventListener("click", () => changeTemp4());
  let card = document.querySelector(".card");
  card.style.backgroundImage = "url('temp4.jpg')";
  card.style.paddingTop = "0rem";

  let crdDtl = document.querySelector("#card-detail");
  crdDtl.style.color = "#232323";
  crdDtl.style.paddingLeft = "0rem";
  crdDtl.style.width = "28.125rem";

  let logo = document.querySelector("#card-logo");
  logo.style.display = "none";
  let busName = document.querySelector("#busi-name");
  busName.style.textAlign = "left";
}
function changeTemp5() {
  let temp5 = document.querySelector("#temp5");
  temp5.addEventListener("click", () => changeTemp5());
  let card = document.querySelector(".card");
  card.style.backgroundImage = "url('temp5.png')";
  card.style.paddingTop = "0rem";

  let crdDtl = document.querySelector("#card-detail");
  crdDtl.style.color = "#201e32";
  crdDtl.style.paddingLeft = "0rem";
  crdDtl.style.width = "28.125rem";

  let logo = document.querySelector("#card-logo");
  logo.style.display = "none";
  let busName = document.querySelector("#busi-name");
  busName.style.textAlign = "center";
}
function changeTemp6() {
  let temp6 = document.querySelector("#temp6");
  temp6.addEventListener("click", () => changeTemp6());
  let card = document.querySelector(".card");
  card.style.backgroundImage = "url('temp6.jpg')";
  card.style.paddingTop = "0rem";

  let crdDtl = document.querySelector("#card-detail");
  crdDtl.style.color = "black";
  crdDtl.style.paddingLeft = "0rem";
  crdDtl.style.width = "28.125rem";

  let logo = document.querySelector("#card-logo");
  logo.style.display = "none";
  let busName = document.querySelector("#busi-name");
  busName.style.textAlign = "center";
}
function changeTemp7() {
  let temp7 = document.querySelector("#temp7");
  temp7.addEventListener("click", () => changeTemp7());
  let card = document.querySelector(".card");
  card.style.backgroundImage = "url('temp7.jpg')";
  card.style.paddingTop = "0rem";

  let crdDtl = document.querySelector("#card-detail");
  crdDtl.style.color = "black";
  crdDtl.style.paddingLeft = "7.8125rem";
  crdDtl.style.paddingRight = "0.3125rem";
  crdDtl.style.width = "22.1875rem";

  let logo = document.querySelector("#card-logo");
  logo.style.display = "none";
  let busName = document.querySelector("#busi-name");
  busName.style.textAlign = "left";
}
function changeTemp8() {
  let temp8 = document.querySelector("#temp8");
  temp8.addEventListener("click", () => changeTemp8());
  let card = document.querySelector(".card");
  card.style.backgroundImage = "url('temp8.jpg')";
  card.style.paddingTop = "0rem";

  let crdDtl = document.querySelector("#card-detail");
  crdDtl.style.color = "#02367b";
  crdDtl.style.paddingLeft = "0rem";
  crdDtl.style.width = "28.125rem";

  let logo = document.querySelector("#card-logo");
  logo.style.display = "none";
  let busName = document.querySelector("#busi-name");
  busName.style.textAlign = "center";
}
function changeTemp9() {
  let temp9 = document.querySelector("#temp9");
  temp9.addEventListener("click", () => changeTemp9());
  let card = document.querySelector(".card");
  card.style.backgroundImage = "url('temp9.jpg')";
  card.style.paddingTop = "0rem";

  let crdDtl = document.querySelector("#card-detail");
  crdDtl.style.color = "#232323";
  crdDtl.style.paddingLeft = "0rem";
  crdDtl.style.width = "15.625rem";

  let logo = document.querySelector("#card-logo");
  logo.style.display = "none";
  let busName = document.querySelector("#busi-name");
  busName.style.textAlign = "left";
}
function changeTemp10() {
  let temp10 = document.querySelector("#temp10");
  temp10.addEventListener("click", () => changeTemp10());
  let card = document.querySelector(".card");
  card.style.backgroundImage = "url('temp10.jpg')";
  card.style.paddingTop = "0.625rem";

  let crdDtl = document.querySelector("#card-detail");
  crdDtl.style.color = "#007fff";
  crdDtl.style.paddingLeft = "2.5rem";
  crdDtl.style.width = "100%";

  let logo = document.querySelector("#card-logo");
  logo.style.display = "none";
  let busName = document.querySelector("#busi-name");
  busName.style.textAlign = "right";
}

function captureDivAsPNG() {
  var element = document.getElementById("capture");
  html2canvas(element).then(function (canvas) {
    var imgData = canvas.toDataURL("image/png");

    var link = document.createElement("a");
    link.download = "div_image.png";
    link.href = imgData;
    link.click();
  });
}

function captureDivAsJPG() {
  var element = document.getElementById("capture");
  html2canvas(element).then(function (canvas) {
    var imgData = canvas.toDataURL("image/jpeg");

    var link = document.createElement("a");
    link.download = "div_image.jpg";
    link.href = imgData;
    link.click();
  });
}

let star = document.querySelectorAll(".fa-star");
star.forEach((star) => {
  star.addEventListener("click", () => {
    const value = star.getAttribute("data-value");
    highlightStars(value);
  });
});
let currentRating = 0;
function highlightStars(value, hover = false) {
  star.forEach((star) => {
    if (star.getAttribute("data-value") <= value) {
      star.style.color = "gold";
    } else {
      star.style.color = "grey";
    }
    document.querySelector(".rating-click").style.display = "none";
    document.querySelector(".rating-click-reply").style.display = "flex";
  });
}
