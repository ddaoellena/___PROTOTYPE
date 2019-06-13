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

var plusSvgWrapper = document.getElementById('plus-svg-wrapper');
var plusSvg = document.getElementById('plus-svg');
var plusInfo = document.getElementById('plus-info');
var plusPlaceholderDiv = document.getElementById('plus-placeholder-div');

tippy('.menu-button-left',{
   placement: 'right',
   animateFill: false,
   duration:200,
   theme: 'google',
});

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

function toggleZoomSlider(a){
  var zoomSlider = document.getElementById('zoom-slider-wrapper');
  var menuRight = document.getElementById('menu-right');
  var buttonInfo = document.getElementById('button-info');

  switch (a) {
    case 0:
      zoomSlider.style.display = "none";
      buttonInfo.classList.remove("with-zoom");
      buttonInfo.classList.add("without-zoom");
      break;
    case 1:
      zoomSlider.style.display = "block";
      buttonInfo.classList.remove("without-zoom");
      buttonInfo.classList.add("with-zoom");
      break;
    default:
  }
}

var aboutDiv = document.getElementById('about-wrapper');

function turnOnAbout(){
  aboutDiv.classList.remove("collapsed");
  aboutDiv.classList.add("expanded");
}

function turnOffAbout(){
  aboutDiv.classList.remove("expanded");
  aboutDiv.classList.add("collapsed");
}

function toggleAbout(a){
  switch (aboutDiv.classList[1]) {
    case "collapsed":
      turnOnAbout();
      break;
    case "expanded":
      turnOffAbout();
      break;
    default:
  }
}

function toggleStrokeDivSvg(a){
  switch (a) {
    case 0:
      plusInfo.classList.remove("with-content");
      plusInfo.classList.add("without-content");
      break;
    case 1:
      plusInfo.classList.remove("without-content");
      plusInfo.classList.add("with-content");
      break;
    default:
  }
}

function togglePlusSvg(a){
  switch (a) {
    case 0:
      toggleInterfaceEl(plusPlaceholderDiv,1);
      toggleStrokeDivSvg(0);
      clearPlusInfo();
      break;
    case 1:
      toggleInterfaceEl(plusPlaceholderDiv,0);
      toggleStrokeDivSvg(1);
      break;
    default:
  }
}

function toggleDropdown(a){
  var dropdownMenu = document.getElementById('dropdown-menu');
  switch (a) {
    case 0:
      dropdownMenu.style.display = "none";
      break;
    case 1:
      dropdownMenu.style.display = "inline-block";
      break;
    default:
  }
}

function changeDropdown(a){
  var dropdownElements = document.getElementsByClassName('dropdown-el');
  switch (a) {
    case 0:
      dropdownElements[1].classList.remove("active");
      dropdownElements[0].classList.add("active");
      break;
    case 1:
      dropdownElements[0].classList.remove("active");
      dropdownElements[1].classList.add("active");
      break;
    default:
  }
}

function toggleTypeInfo(a){
  var infoRessources = document.getElementById('info-ressources-div');
  var infoGallery = document.getElementById('info-gallery-div');
  var infoTypes = document.getElementsByClassName('info-type');
  switch (a) {
    case 0:
      infoGallery.classList.remove("active");
      infoRessources.classList.add("active");
      infoTypes[1].classList.remove("active");
      infoTypes[0].classList.add("active");
      break;
    case 1:
      infoRessources.classList.remove("active");
      infoGallery.classList.add("active");
      infoTypes[0].classList.remove("active");
      infoTypes[1].classList.add("active");
      break;
    default:
  }
}
