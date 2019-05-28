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
var labelsBox = document.getElementById('labels-box');
var buttonInfoSpan = document.getElementById('button-info-span');
var buttonInfoInactive = 'color: #272727; -webkit-text-stroke-width: 0.5px;';
var buttonInfoActive = 'color: #ffffff; -webkit-text-stroke-width: 0px;'

function toggleMenu(a){
  for (var i = 0; i < menuButtons.length; i++) {
    menuButtons[i].classList.remove('menu-active');
  }
    a.classList.add('menu-active');
}

function toggleInfoDiv(){
  if (infoWrapperDiv.classList[2] == 'collapsed') {
    infoWrapperDiv.classList.remove('collapsed');
    infoWrapperDiv.classList.add('expanded');
    infoWrapperDiv.style.bottom = "0%";
    curtainDiv.style.display = "block";
    descriptionP.classList.remove("fade");
  }
  else if (infoWrapperDiv.classList[2] == 'expanded') {
    infoWrapperDiv.classList.remove('expanded');
    infoWrapperDiv.classList.add('collapsed');
    infoWrapperDiv.style.bottom = "-65%";
    curtainDiv.style.display = "none";
    descriptionP.classList.add("fade");
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
    labelCircle.setAttribute("class", "label-circle " + allTypes[i].element+ "-cirlce");
    labelCircle.style.backgroundColor = allTypes[i].color;

    var labelText = document.createElement("p");
    labelText.setAttribute("class", "label-text");
    labelText.innerHTML = allTypes[i].name;
    labelDiv.appendChild(labelCircle);
    labelDiv.appendChild(labelText);
    labelsBox.appendChild(labelDiv);
  }
}

function toggleLabels(){
  if (labelsWrapper.classList[1] == 'collapsed') {
    labelsWrapper.classList.remove('collapsed');
    labelsWrapper.classList.add('expanded');
    addLabels();
    buttonInfoSpan.setAttribute('style', buttonInfoActive);
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
    labelsBox.innerHTML ='';
    buttonInfoSpan.setAttribute('style', buttonInfoInactive);
  }
};
