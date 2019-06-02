/* script file for every function related website navigation */
/* declare global variables here */
var infoWrapperDiv = document.getElementById('info-wrapper');
var curtainDiv = document.getElementById('curtain-div');
var menuButtons = document.getElementsByClassName('menu-button');
var descriptionP = document.getElementById('description');
var filterWrapper = document.getElementById('filter-box-wrapper');
var buttonFilter = document.getElementById('button-filter');
var whiteStroke = 'border : solid 0.5px white;';
var blackShadow = '-webkit-box-shadow: 2px 2px 20px 0px rgba(0,0,0,0.75); -moz-box-shadow: 2px 2px 20px 0px rgba(0,0,0,0.75); box-shadow: 2px 2px 20px 0px rgba(0,0,0,0.75);';
var whiteShadow = '-webkit-box-shadow: 0px 0px 5px 2px rgba(255,255,255,0.5); -moz-box-shadow: 0px 0px 5px 2px rgba(255,255,255,0.5); box-shadow: 0px 0px 5px 2px rgba(255,255,255,0.5);';
var labelsWrapper = document.getElementById('labels-box-wrapper');
var labelsBoxElem = document.getElementById('labels-box-elem');
var labelsBoxLink = document.getElementById('labels-box-link');
var buttonInfoSpan = document.getElementById('button-info-span');
var buttonInfoInactive = 'color: #272727; -webkit-text-stroke-width: 0.5px;';
var buttonInfoActive = 'color: #ffffff; -webkit-text-stroke-width: 0px;';


function toggleMenu(a){
  for (var i = 0; i < menuButtons.length; i++) {
    menuButtons[i].classList.remove('menu-active');
  }
    a.classList.add('menu-active');
}
/* params (a)
* a = 0 full-collapsed
* a = 1 collapsed
* a = 2 expanded
*/
function toggleInfoDiv(a){
  switch (a) {
    case 0:
      infoWrapperDiv.classList.remove("collapsed");
      infoWrapperDiv.classList.remove("expanded");
      infoWrapperDiv.classList.add("full-collapsed");
      curtainDiv.style.display = "none";
      break;
    case 1:
      infoWrapperDiv.classList.remove("expanded");
      infoWrapperDiv.classList.remove("full-collapsed");
      infoWrapperDiv.classList.add("collapsed");
      curtainDiv.style.display = "none";
      break;
    case 2:
      infoWrapperDiv.classList.remove("full-collapsed");
      infoWrapperDiv.classList.remove("collapsed");
      infoWrapperDiv.classList.add("expanded");
      curtainDiv.style.display = "block";
      break;
    default:

  }
}

function toggleFilter(){
  if (filterWrapper.classList[1] == 'collapsed') {
    filterWrapper.classList.remove('collapsed');
    filterWrapper.classList.add('expanded');
    filterWrapper.style.display = "block";
    buttonFilter.setAttribute('style', whiteStroke);
  }
  else if (filterWrapper.classList[1] == 'expanded') {
    toggleOffFilter();
  }
}
function toggleOffFilter(){
  if (filterWrapper.classList[1] == 'expanded') {
    filterWrapper.classList.remove('expanded');
    filterWrapper.classList.add('collapsed');
    filterWrapper.style.display = "none";
    buttonFilter.setAttribute('style',blackShadow);
  }
}
function toggleFilterShadow(){
  buttonFilter.setAttribute('style', whiteShadow);
}

function addLabels(){
  labelsWrapper.style.display = "block";
  for (var i = 0; i < allTypes.length; i++) {
    var labelDiv = document.createElement("div");
    labelDiv.setAttribute("class", "label " + allTypes[i].element+ "-label");
    var labelCircle = document.createElement("div");
    labelCircle.setAttribute("class", "label-circle-elem " + allTypes[i].element+ "-circle");
    labelCircle.style.backgroundColor = allTypes[i].color;

    var labelText = document.createElement("p");
    labelText.setAttribute("class", "label-text-elem");
    labelText.innerHTML = allTypes[i].name;
    labelDiv.appendChild(labelCircle);
    labelDiv.appendChild(labelText);
    labelsBoxElem.appendChild(labelDiv);
  }
  for (var i = 0; i < allTypesLink.length; i++) {
    var labelDiv = document.createElement("div");
    labelDiv.setAttribute("class", "label link-label");
    // var linkWrapper = document.createElement("div");
    // linkWrapper.setAttribute("class", "link-wrapper");
    var labelStroke = document.createElement("div");
    labelStroke.setAttribute("class", "label-link-stroke");
    // var labelCircle = document.createElement("div");
    // labelCircle.setAttribute("class", "label-circle-link");
    labelStroke.style.backgroundColor = allTypesLink[i].color;
    // labelCircle.style.backgroundColor = allTypesLink[i].color;

    var labelText = document.createElement("p");
    labelText.setAttribute("class", "label-text-link");
    labelText.innerHTML = allTypesLink[i].name;

    // labelDiv.appendChild(linkWrapper);
    labelDiv.appendChild(labelStroke);
    // linkWrapper.appendChild(labelCircle);
    labelDiv.appendChild(labelText);
    labelsBoxLink.appendChild(labelDiv);
  }
}

function toggleLabels(){
  if (labelsWrapper.classList[1] == 'collapsed') {
    labelsWrapper.classList.remove('collapsed');
    labelsWrapper.classList.add('expanded');
    addLabels();
    buttonInfoSpan.classList.toggle("button-info-span-active");
  }
  else if (labelsWrapper.classList[1] == 'expanded') {
    turnOffLabels();
  }
}

function turnOffLabels(){
  if (labelsWrapper.classList[1] == 'expanded') {
    labelsWrapper.classList.remove('expanded');
    labelsWrapper.classList.add('collapsed');
    labelsWrapper.style.display = "none";
    labelsBoxElem.innerHTML ='';
    labelsBoxLink.innerHTML ='';
    buttonInfoSpan.classList.toggle("button-info-span-active");
  }
};


var filterButton = document.getElementById('button-filter');
var panSliderGroup = document.getElementById('pan-slider-wrapper');

function toggleInterfaceEl(el, state){
  switch (state) {
    case 0:
      el.classList.remove("visible");
      el.classList.add("hidden");
      break;
    case 1:
      el.classList.remove("hidden");
      el.classList.add("visible");
      break;
    default:
  }
}
