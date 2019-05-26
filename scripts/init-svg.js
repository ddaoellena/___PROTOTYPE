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

/*
* function drawDotsTimeline()
* @params cw, ch space between dots
* can change variables inside the function
*/
var r = 1;
var cw = cw;
var ch = ch;

var viewWidth = vw*2;

var coorGroup = draw.group().attr({class:'coor-svg-group', id:'coor-svg-group'});

function cleanSvg(){
  var mainSvg = document.getElementById('main-svg');
  mainSvg.innerHTML = '';
}
function drawDotsTimeline(cw, ch) {
  var group = draw.group().attr({class:'grid dot-grid', id:'dot-grid'});
  for (var x = 20; x < viewWidth; x+=cw) {
    for (var y = 20; y < vh*0.6; y+=ch) {
      var circle = draw.circle(r).attr({fill:'#C4C4C4', cx:x, cy:y});
      group.add(circle);
      coorGroup.add(group);
    }
  }
}
drawDotsTimeline(20,20);

function drawTimeline(cw){
  var dates = ["2016", "2017", "2018", "2019", "2020", "2021"];
  var group = draw.group().attr({class:'timeline', id:'timeline'});
  var dateOff = 100;
  for (var x = cw; x < viewWidth; x+=cw) {
    var line = draw.line(0, 0, 0, 20).move(x, vh*0.625);
    line.stroke({color: '#BFBFBF', width : 1});
    group.add(line);
  }
  for (var i = 0; i < dates.length; i++) {
    var dateLine = draw.line(0, 0, 0, 30).move(dateOff + cw*24*i, vh*0.625);
    dateLine.stroke({color: '#BFBFBF', width : 2});
    var dateText = draw.text(dates[i]);
    dateText.font({ fill: '#fff', anchor: 'middle'}).move(dateOff + cw*24*i, vh*0.625 + 35);
    group.add(dateLine).add(dateText);
  }
  coorGroup.add(group);
}
drawTimeline(20);


function addAllCircles(type){
cleanCircles();
 for (var i = 0; i < type.length; i++) {
   addCircle(type[i]);
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
        break;
      case 'event-circle':
          el.setAttribute('stroke', '#83E1FF');
        break;
      case 'people-circle':
          el.setAttribute('stroke', '#FF83D5');
        break;
      case 'media-circle':
          el.setAttribute('stroke', '#FFC683');
        break;
      default:
    }
    el.setAttribute('stroke-width', '2');
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
