/* global function and variables to add focus */
var currentFocus;
var focusMenu = document.getElementById('focus-menu');
var focusImg = document.getElementById('focus-img');
var focusLabel = document.getElementById('focus-label');

function updateFocus(foc){
  if (typeof currentFocus !== 'undefined') {
    switch (currentView) {
      case "memes":
        if (foc.type == 0) {
          turnOnD3ParentCircle(foc);
        } else {
          addToFilterD3(foc);
        }
      break;
      case "events":
        if (foc.type !== 1) {
          addToFilterEvent(foc);
          turnOnFilteredEvents();
        } else {
          emptyFilterEvent();
          focusEventOnEvents(foc);
        }
      break;
      case "people":
        if (foc.type == 2) {
          turnOnD3ParentCircle(foc);
        } else {
          addToFilterD3(foc);
        }
      break;
      case "medias":
        if (foc.type == 3) {
          turnOnD3ParentCircle(foc);
        } else {
          addToFilterD3(foc);
        }
      break;
      default:
    }
  }
}

function addFocus(obj){
  console.log(obj);
  toggleFocusMenu(1);
  addToFocusDiv(obj);
  removeTagFilter();
  currentFocus = obj.toString;
  updateFocus(window[currentFocus]);
  console.log(currentFocus);
}

function toggleFocusMenu(a){
  switch (a) {
    case 0:
      focusMenu.classList.remove("w-focus");
      focusMenu.classList.add("wo-focus");
      break;
    case 1:
      focusMenu.classList.remove("wo-focus");
      focusMenu.classList.add("w-focus");
      break;
    default:
  }
}

function emptyFocusDiv(){
  focusImg.innerHTML = "";
}

function addToFocusDiv(obj){
  emptyFocusDiv();
  appendImg(obj, 'focus-img', 0.66);
  focusLabel.innerHTML = obj.name;
}

function removeFocus(){
  toggleFocusMenu(0);
  currentFocus = undefined;
  switch (currentView) {
    case "memes":
      turnOffAllD3Circles(1);
      toggleFilterGroup(0);
      break;
    case "events":
      emptyFilterEvent();
      break;
    case "people":
      turnOffAllD3Circles(1);
      toggleFilterGroup(0);
      break;
    case "medias":
      turnOffAllD3Circles(1);
      toggleFilterGroup(0);
      break;
    default:
  }
}
