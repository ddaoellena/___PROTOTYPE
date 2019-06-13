/* script file for every function related to SVG manipulation*/
/* declare global variables here */
var svgDivWrapper = document.getElementById('svg-wrapper');
var menuTop = document.getElementById('menu-top');

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
* draw coordinates functions
* @params cw, ch space between dots
* can change variables inside the function
*/
var coorDraw = SVG('svg-coor-wrapper').size(vw, vh).attr({id:'coor-svg'}).viewbox(0,0,vw,vh);
var cw = cw;
var ch = ch;
var topOffset = menuTop.getBoundingClientRect().height;
var viewWidth = vw*2;
var scale;
var disScale, xOffset, yOffset, coordSquare, coorSq;

function setSVGVariables(){
  if (vw >= 900 && vw <= 1400) {
    heightOffset = 40;
    scale = 1;
    disScale = scale*1.2;
    xOffset = scale*1;
    yOffset = scale*1;
    coordSquare = 20;
    coorSq = coordSquare*scale;
  }
  if (vw >= 1400) {
    heightOffset = 40;
    scale = 1.5;
    disScale = scale*1.2;
    xOffset = scale*1;
    yOffset = scale*0.85;
    coordSquare = 20;
    coorSq = coordSquare*scale;
  }
}
window.onload = setSVGVariables();

var timelineGroup = coorDraw.group().attr({class:'timeline-svg-group', id:'timeline-svg-group',  'onclick':'toggleInfoDiv(0);'});
var dotGroup = coorDraw.group().attr({class:'grid dot-grid', id:'timeline-dot-grid'});
var tlGroup = coorDraw.group().attr({class:'timeline', id:'timeline'});

function drawTimeline(l){
  const r = 1,
        tlHeight= l*5;

  timelineGroup.attr({"visibility":"hidden"});

  var dates = ["2016", "2017", "2018", "2019", "2020", "2021"];

  for (var x = l; x < viewWidth; x+=l) {
    for (var y = l; y < tlHeight; y+=l) {
      var circle = coorDraw.circle(r).attr({fill:'#C4C4C4', cx:x, cy:y});
      dotGroup.add(circle);
      timelineGroup.add(dotGroup);
    }
  }
  /* Labels timeline */
  var dateOff = 5*l;
  for (var x = l; x < viewWidth; x+=l) {
    var line = coorDraw.line(0, 0, 0, l).move(x, tlHeight);
    line.stroke({color: '#BFBFBF', width : 1});
    tlGroup.add(line);
  }
  for (var i = 0; i < dates.length; i++) {
    var dateLine = coorDraw.line(0, 0, 0, l*1.5).move(dateOff + l*24*i, tlHeight);
    dateLine.stroke({color: '#BFBFBF', width : 2});
    var dateText = draw.text(dates[i]);
    dateText.font({ fill: '#fff', anchor: 'middle'}).move(dateOff + l*24*i, tlHeight + 50);
    tlGroup.add(dateLine).add(dateText);
  }

  timelineGroup.add(tlGroup);
  timelineGroup.move(0, topOffset);
}
drawTimeline(coorSq);

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

function drawCompass(l){
  const r = 1;
  const compassW = vw*0.9;
  const compassH = 200*scale;
  var compassX = (vw-compassW)/2;
  var compassY = topOffset;
  var midCompass = vw/2;

  var compassGroup = coorDraw.group().attr({class:'compass-svg-group', id:'compass-svg-group'});
  compassGroup.attr({"visibility":"hidden"});
  var dotGroup = coorDraw.group().attr({class:'grid dot-grid', id:'compass-dot-grid'});
  for (var x = l; x < compassW; x+=l) {
    for (var y = l; y < compassH; y+=l) {
      var circle = coorDraw.circle(r).attr({fill:'#C4C4C4', cx:x, cy:y, opacity: 1});
      dotGroup.add(circle);
      compassGroup.add(dotGroup);
    }
  }
  var nodeWidth = dotGroup.node.getBoundingClientRect().width,
      nodeHeight = dotGroup.node.getBoundingClientRect().height;

  console.log();
  var line = coorDraw.line(0,0, 0, nodeHeight).stroke({ width: 2, color:"#848484", linecap: 'round'});
  dotGroup.add(line);
  var compassLabels = ["Gauche", "Droite"];
  var labelW = 120*scale,
      labelH = 30*scale,
      labelXOff = labelW/2,
      labelYOff = labelH/2;

  var compassLabelPos = [{x:nodeWidth/4,y:nodeHeight+labelH*2.5},{x:nodeWidth*3/4, y:nodeHeight+labelH*2.5}];

  for (var i = 0; i < compassLabels.length; i++) {
    var compassLabelGroup = coorDraw.group().attr({class:'compass-label-group'});
    var rect = coorDraw.rect(labelW, labelH).attr({'fill':"#FFFFFF"});
    var text = coorDraw.text(compassLabels[i]).attr({class:'compass-label-text', "font-family": "",anchor: 'middle'}).center(labelXOff, labelYOff);;
    // text.move(30,0);
    compassLabelGroup.add(rect).add(text);
    compassLabelGroup.move(compassLabelPos[i].x, compassLabelPos[i].y)
    compassGroup.add(compassLabelGroup);
  }
  //center compass
  line.move(nodeWidth/2-0.5,l);
  dotGroup.move(compassX,compassY);
}
drawCompass(coorSq);

function toggleCompass(a){
  var compassGroup = document.getElementById('compass-svg-group');
  switch (a) {
    case 0:
      compassGroup.setAttribute('visibility', 'hidden');
      break;
    case 1:
      compassGroup.setAttribute('visibility', 'visible');
      break;
    default:
  }
}

function addAllCircles(type){
  toggleDropdown(0);
  toggleInfoDiv(0);
  cleanSvg();
  toggleZoomSlider(0);
  cleanCircles();
  cleanD3();
  toggleOffFilter();
  turnOffLabels();
  togglePlusSvg(0);
  removePopUp();
  emptyFilter();
  switch (type) {
    case allEvents:
      toggleInterfaceEl(filterButton, 1);
      toggleInterfaceEl(panSliderGroup, 1);
      $('#placeholder-text').html('Cliquer sur un événement pour voir les liens');
      toggleInterfaceEl(plusSvgWrapper,1);
      toggleCompass(0);
      toggleTimeline(1);
      currentFilter = "events";
      break;
    case allPeople:
      toggleInterfaceEl(filterButton, 1);
      toggleInterfaceEl(panSliderGroup, 0);
      $('#placeholder-text').html('Cliquer sur une personnalité pour voir les liens');
      toggleInterfaceEl(plusSvgWrapper,1);
      toggleTimeline(0);
      toggleCompass(1);
      currentFilter = "people";
      break;
    default:
  }
  for (var i = 0; i < type.length; i++) {
    addSingleCircle(type[i]);
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
