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
var draw = SVG('svg-wrapper').size(vw, vh).attr({id:'main-svg'});
var defs = draw.defs().attr({id:'main-svg-defs'});
var mainSvgDefs = document.getElementById('main-svg-defs');
var filterBlur = '<filter id="fBlur" x="-100%" y="-100%" width="300%" height="300%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB"><feGaussianBlur stdDeviation="10 10" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"/></filter>';
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

function cleanSvg(){
  var mainSvg = document.getElementById('main-svg');
  mainSvg.innerHTML = '';
}
function drawDotsTimeline(cw, ch) {
  var group = draw.group().attr({class:'grid dot-grid', id:'dot-grid'});
  for (var x = 20; x < vw; x+=cw) {
    for (var y = 20; y < vh*0.6; y+=ch) {
      var circle = draw.circle(r).attr({fill:'#C4C4C4', cx:x, cy:y});
      group.add(circle);
    }
  }
}
drawDotsTimeline(20,20);

function drawTimeline(cw){
  var group = draw.group().attr({class:'timeline', id:'timeline'});
  for (var x = cw; x < vw; x+=cw) {
    var line = draw.line(0, 0, 0, 20).move(x, vh*0.625);
    line.stroke({color: '#BFBFBF', width : 1});
    group.add(line);
  }
}
drawTimeline(20);
/*
* function addCircle()
* @params {r} = radius, {x} = position x, {y} = position y,
* @params type, {int}, 0 = meme, 1 = event, 2 = people, 3 = site
* @params {img}, string
*/
function addCircle(r, x, y, obj){
  var circleColor = '';
  var circleClass = '';
  var folderType = '';
  switch (obj.type) {
    case 0:
      var circleColor = '#FFFFFF';
      var circleClass = 'meme-circle';
      var folderType ='memes';
      break;
    case 1:
      var circleColor = '#60F5FF';
      var circleClass = 'event-circle';
      var folderType ='events';
      break;
    case 2:
      var circleColor = '#FF5CC8';
      var circleClass = 'people-circle';
      var folderType ='people';
      break;
    case 3:
      var circleColor = '#FFB054';
      var circleClass = 'site-circle';
      var folderType ='sites';
      break;
    default:
  }

  var circleGroup = draw.group().attr({class:'circle '+circleClass+' generated pointer','onclick':'toggleCircle(this); '+'appendInfo('+obj.toString+');', 'onmouseenter':'colorOn(this)', 'onmouseleave':'colorOff(this)'});
  var circleBlur = draw.circle(r).attr({fill:circleColor, cx:x, cy:y, filter:'url(#fBlur)'})
  var circle = draw.circle(r).attr({fill:'#C4C4C4', 'fill-opacity':"0.7", cx:x, cy:y});
  /*create clip for images*/
  var circleClip = draw.circle(r).attr({fill:'#FFFFFF', cx:x, cy:y});
  var clip = draw.clip().add(circleClip);
  var image = draw.image('./assets/pics/'+folderType+'/'+obj.imgThumbnail, r, r);
  image.attr({class:'cirle-image', filter:'url(#fGray)'});
  image.move(x-r/2, y-r/2);
  image.clipWith(clip);
  /*add all elements to same group*/
  circleGroup.add(circleBlur).add(circle).add(image);
}

var dis = 90;
var disAdj = Math.sqrt(dis)*7;
/*
* function addRelatedCircles()
* create circle of related elements to the obj
* @params obj, object; d, distance from the core obj
*   8 1 2
*   7 o 3
*   6 5 4
*/
function placeCircle(d){
  switch (d) {
    case 1:
      return([0, -dis]);
      break;
    case 2:
      return([+disAdj, -disAdj]);
      break;
    case 3:
      return([dis, 0]);
      break;
    case 4:
      return([+disAdj, +disAdj]);
      break;
    case 5:
      return([0, +dis]);
      break;
    case 6:
      return([-disAdj, +disAdj]);
      break;
    case 7:
      return([-dis, 0]);
      break;
    case 8:
      return([-disAdj, -disAdj]);
      break;
    default:
  }
};

function addRelatedCircles(obj, pos){
  addRelatedProperty(obj);
  for (var i = 0; i < obj.related.length; i++){
    var circleGroup = draw.group().attr({class:'generated link-group'});
    /* add line */
    var line = draw.line(obj.x, obj.y, obj.x+placeCircle(pos+i)[0], obj.y+placeCircle(pos+i)[1]);
    line.stroke({ color: '#888888', width: 1, linecap: 'round'});
    /* add link */
    var circle = draw.circle(12).attr({class:'link-circle pointer', fill:'#C4C4C4', 'fill-opacity':"1", cx:obj.x+(placeCircle(pos+i)[0]/2), cy:obj.y+(placeCircle(pos+i)[1]/2)});
    circleGroup.add(line).add(circle);
    /* add circle */
    addCircle(40, obj.x+placeCircle(pos+i)[0], obj.y+placeCircle(pos+i)[1], obj.related[i]);
  }
};
function cleanCircles(){
  var generatedTags = document.getElementsByClassName('generated');
  for (var i = 0; i < generatedTags.length; i++) {
    $('.generated').remove();
  }
}
function addAllCircles(type){
cleanCircles();
 for (var i = 0; i < type.length; i++) {
   addRelatedCircles(type[i], 1);
   addCircle(50, type[i].x, type[i].y, type[i]);
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

  if (el.classList[4] == 'active') {
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
      case 'site-circle':
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
  if (el.classList[4] == 'active') {
    el.childNodes[2].setAttribute("filter", "");
  }
  else{
    el.childNodes[2].setAttribute("filter", "url(#fGray)");
  }
}
