let yearOld = document.getElementById("yearOld");
let todayYear = new Date().getFullYear();
let todayMonth = new Date().getMonth() + 1;
let todayDay = new Date().getDate();
let dgCont = document.getElementById("disgraf-cont");
let dgitem = document.getElementsByClassName("item-img");
let zoomImg = document.getElementsByClassName("zoomin-img");
let btnClose = document.getElementsByClassName("btn-close");

function myYear() {
  if ((todayMonth >= 7) & (todayDay === 5)) {
    var myY = todayYear - 1986;
    yearOld.innerHTML = myY;
  } else {
    var myY = todayYear - 1986 - 1;
    yearOld.innerHTML = myY;
  }
}

myYear();

setTimeout(function charge_value() {
  document.getElementById("tool_html").classList.add("v90");
  document.getElementById("tool_corel").classList.add("v90");
  document.getElementById("tool_illustrator").classList.add("v90");
  document.getElementById("tool_photoshop").classList.add("v90");
  document.getElementById("tool_css").classList.add("v80");
  document.getElementById("tool_js").classList.add("v75");
}, 1000);

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();




  document.getElementById('chk').addEventListener('click', function showSideA(){
    let sideA = document.getElementById('side_a');
    sideA.classList.toggle("dblock")
    }
  )

  