/* script file for every function related to SVG manipulation*/
/* declare global variables here */
var svgDivWrapper = document.getElementById('svg-wrapper');
var menuTop = document.getElementById('menu-top');
var currentView = '';

function setCurrentView(a){
  switch (a) {
    case 0:
      currentView = "memes";
      break;
    case 1:
      currentView = "events";
      break;
    case 0:
      currentView = "people";
      break;
    case 0:
      currentView = "medias";
      break;
    default:

  }
}
/*
* functions getDocumentWidth() and getDocumentHeight()
* self-explanatory
* stores in variables
*/
function getDocumentWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};
function getDocumentHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
};
var vw = getDocumentWidth(),
    vh = getDocumentHeight();
var midW = vw/2,
    midH = vh/2;

/*
* setup SVG div, defs and filter
*/
var draw = SVG('svg-wrapper').size(vw, vh).attr({id:'main-svg'}).viewbox(0,0,vw,vh);
var defs = draw.defs().attr({id:'main-svg-defs'});
var mainSvgDefs = document.getElementById('main-svg-defs');
var filterBlur = '<filter id="fBlur" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur in="SourceGraphic" stdDeviation="5" /></filter>';
var filterBlurSmall = '<filter id="fBlurSmall" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur in="SourceGraphic" stdDeviation="3" /></filter>';
var filterGray = '<filter id="fGray"><feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"/></filter>';
mainSvgDefs.innerHTML = filterBlur + filterBlurSmall + filterGray;

/*
* draw dinates functions
* @params cw, ch space between dots
* can change variables inside the function
*/
var cw = cw;
var ch = ch;
var topOffset = menuTop.getBoundingClientRect().height;
var viewWidth = vw*2;
var scale;
var disScale, xOffset, yOffset, dSquare, coorSq, r;

function setSVGVariables(){
  if (vw >= 900 && vw <= 1400) {
    heightOffset = 40;
    scale = 1;
    disScale = scale*1.2;
    xOffset = scale*1;
    yOffset = scale*1;
    dSquare = 20;
    coorSq = dSquare*scale;
    tlR = 1;
  }
  if (vw >= 1400) {
    heightOffset = 40;
    scale = 1.25;
    disScale = scale*1.5;
    xOffset = scale*1;
    yOffset = scale*1.1;
    dSquare = 20;
    coorSq = dSquare*scale;
    tlR= 2;
  }
}
window.onload = setSVGVariables();

function drawTimeline(l){
  var timelineGroup = draw.group().attr({class:'timeline-svg-group', id:'timeline-svg-group'});
  var dotGroup = timelineGroup.group().attr({class:'grid dot-grid', id:'timeline-dot-grid'});
  var tlGroup = timelineGroup.group().attr({class:'timeline', id:'timeline'});
  var tlHeight= l*5;

  var dates = ["2016", "2017", "2018", "2019", "2020", "2021"];

  for (var x = l; x < viewWidth; x+=l) {
    for (var y = l; y < tlHeight; y+=l) {
      var circle = draw.circle(tlR).attr({fill:'#C4C4C4', cx:x, cy:y});
      dotGroup.add(circle);
      timelineGroup.add(dotGroup);
    }
  }
  /* Labels timeline */
  var dateOff = 5*l;
  for (var x = l; x < viewWidth; x+=l) {
    var line = draw.line(0, 0, 0, l).move(x, tlHeight);
    line.stroke({color: '#BFBFBF', width : 1});
    tlGroup.add(line);
  }
  for (var i = 0; i < dates.length; i++) {
    var dateLine = draw.line(0, 0, 0, l*1.5).move(dateOff + l*24*i, tlHeight);
    dateLine.stroke({color: '#BFBFBF', width : 2});
    var dateText = draw.text(dates[i]);
    dateText.font({ fill: '#fff', anchor: 'middle'}).move(dateOff + l*24*i, tlHeight + 50);
    tlGroup.add(dateLine).add(dateText);
  }

  timelineGroup.add(tlGroup);
  timelineGroup.move(0, topOffset);
}

function addAllCircles(type){
  toggleInfoDiv(0);
  cleanSvg();
  toggleZoomSlider(0);
  cleanCircles();
  cleanD3();
  turnOffLabels();
  togglePlusSvg(0);
  removePopUp();
  switch (type) {
    case allEvents:
      toggleInterfaceEl(panSliderGroup, 1);
      $('#placeholder-text').html('Cliquer sur un événement pour voir les liens');
      toggleInterfaceEl(plusSvgWrapper,1);
      currentView = "events";
      break;
    default:
  }
  for (var i = 0; i < type.length; i++) {
    addSingleCircle(type[i]);
  }
  drawTimeline(coorSq);
  updateFocus(window[currentFocus]);
}

function cleanCircles(){
  $('.wrapper-group').remove();
  $('.clip-path').remove();
}

function cleanSvg(){
  var mainSvg = $('#main-svg');
  var mainSvgChildren = mainSvg.children();
  for (var i = 1; i < mainSvgChildren.length; i++) {
    mainSvgChildren[i].remove();
  }
}
/*
* function toggleAllCircles()
* remove active class from all circles
* and make all pictures gray
*/
function toggleAllCircles(){
var circleList = document.getElementsByClassName('circle');
 for (var i = 0; i < circleList.length; i++) {
   circleList[i].classList.remove('active');
   circleList[i].setAttribute('stroke', '');
   circleList[i].childNodes[2].setAttribute("filter", "url(#fGray)");
 }
}
/*
* function toggleCircle()
* add active class to the targeted circles and add stroke
*/
function toggleCircle(el){
  toggleAllCircles();

  el.classList.toggle('active');

  if (el.classList[5] == 'active') {
    switch (el.classList[1]) {
      case 'meme-circle':
          el.setAttribute('stroke', '#FFFFFF');
          el.setAttribute('stroke-width', '2');
        break;
      case 'event-circle':
          el.setAttribute('stroke', '#83E1FF');
          el.setAttribute('stroke-width', '3');
        break;
      case 'people-circle':
          el.setAttribute('stroke', '#FF83D5');
          el.setAttribute('stroke-width', '2');
        break;
      case 'media-circle':
          el.setAttribute('stroke', '#FFC683');
          el.setAttribute('stroke-width', '2');
        break;
      default:
    }
    el.childNodes[2].setAttribute("filter", "");
  }
  else{
    el.setAttribute('stroke', '');
    el.setAttribute('stroke-width', '');
  }
}

/*
* function colorOn()
* triggered on onmouseenter circle
*/
function colorOn(el){
  el.childNodes[2].setAttribute("filter", "");
}

/*
* function colorOff()
* triggred on mouseleave circle
*/
function colorOff(el){
  if (el.classList[5] == 'active') {
    el.childNodes[2].setAttribute("filter", "");
  }
  else{
    el.childNodes[2].setAttribute("filter", "url(#fGray)");
  }
}

function colorOffPlus(el){
    el.childNodes[2].setAttribute("filter", "url(#fGray)");
}
