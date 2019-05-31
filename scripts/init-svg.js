/* script file for every function related to SVG manipulation*/
/* declare global variables here */
var svgDivWrapper = document.getElementById('svg-wrapper');

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

/*
* setup SVG div, defs and filter
*/
var draw = SVG('svg-wrapper').size(vw, vh).attr({id:'main-svg'}).viewbox(0,0,vw,vh);
var defs = draw.defs().attr({id:'main-svg-defs'});
var mainSvgDefs = document.getElementById('main-svg-defs');
var filterBlur = '<filter id="fBlur" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur in="SourceGraphic" stdDeviation="5" /></filter>';
var filterGray = '<filter id="fGray"><feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"/></filter>';
mainSvgDefs.innerHTML = filterBlur + filterGray;

var coorDraw = SVG('svg-coor-wrapper').size(vw, vh).attr({id:'coor-svg'}).viewbox(0,0,vw,vh);
/*
* function drawDotsTimeline()
* @params cw, ch space between dots
* can change variables inside the function
*/
var cw = cw;
var ch = ch;
var heightOffset = 0;
var viewWidth = vw*2;

function setHeightOffset(){
  if (vh >= 900) {
    heightOffset = 20;
  }
}
window.onload = setHeightOffset();



function drawTimeline(l){
  const r = 1;
  var timelineGroup = coorDraw.group().attr({class:'timeline-svg-group', id:'timeline-svg-group'});
  timelineGroup.attr({"visibility":"hidden"});

  var dates = ["2016", "2017", "2018", "2019", "2020", "2021"];
  var dotGroup = draw.group().attr({class:'grid dot-grid', id:'dot-grid'});

  for (var x = 20; x < viewWidth; x+=l) {
    for (var y = 20; y < vh*0.6; y+=l) {
      var circle = coorDraw.circle(r).attr({fill:'#C4C4C4', cx:x, cy:y});
      dotGroup.add(circle);
      timelineGroup.add(dotGroup);
    }
  }
  dotGroup.move(0, heightOffset);

  var tlGroup = coorDraw.group().attr({class:'timeline', id:'timeline'});
  var dateOff = 100;
  for (var x = l; x < viewWidth; x+=l) {
    var line = coorDraw.line(0, 0, 0, 20).move(x, vh*0.625);
    line.stroke({color: '#BFBFBF', width : 1});
    tlGroup.add(line);
  }
  for (var i = 0; i < dates.length; i++) {
    var dateLine = coorDraw.line(0, 0, 0, 30).move(dateOff + l*24*i, vh*0.625);
    dateLine.stroke({color: '#BFBFBF', width : 2});
    var dateText = draw.text(dates[i]);
    dateText.font({ fill: '#fff', anchor: 'middle'}).move(dateOff + l*24*i, vh*0.625 + 35);
    tlGroup.add(dateLine).add(dateText);
  }
  timelineGroup.add(tlGroup);
}
  drawTimeline(20);

function toggleTimeline(a){
  var timelineGroup = document.getElementById('timeline-svg-group');
  switch (a) {
    case 0:
      timelineGroup.setAttribute('visibility', 'hidden');
      break;
    case 1:
      timelineGroup.setAttribute('visibility', 'visible');
      break;
    default:
  }
}
function addAllCircles(type){
  cleanSvg();
  cleanCircles();
  switch (type) {
    case allEvents:
      toggleTimeline(1);
      break;
    case allPeople:
      toggleTimeline(0);
      break;
    default:

  }
   for (var i = 0; i < type.length; i++) {

     addCircle(type[i], 0);
   }
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
    console.log(mainSvgChildren[i]);
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
