
/* global function to add filter */
function addToFilterEvent(obj){
  emptyFilterEvent();
  toggleAllSingleCircles(0);
  filterObjEvent(obj);
  displayFilterEvent();
  addFilterEvents(obj);
}

function emptyFilterEvent(){
  toggleAllSingleCircles(1);
  translateTimeline(0);
  $('.filter-svg-group').remove();
}

var filtered = [];
var filteredObjects = [];

function filterObjEvent(obj){
  filtered = [];
  for (var i = 0; i < allEvents.length; i++) {
    for (var j = 0; j < allEvents[i].children.length; j++) {
      if (allEvents[i].children[j].type == obj.type && allEvents[i].children[j].id == obj.id) {
        filtered.push(allEvents[i].toString);
      }
      if (typeof allEvents[i].children[j].children !== "undefined") {
        for (var k = 0; k < allEvents[i].children[j].children.length; k++) {
          if (allEvents[i].children[j].children[k].type == obj.type && allEvents[i].children[j].children[k].id == obj.id) {
            filtered.push(allEvents[i].toString);
          }
        }
      }
    }
  }
  uniqFilterArray();
}

function uniqFilterArray(){
  filteredObjects = [];
  var uniqFiltered = filtered.reduce(function(a,b){
      if (a.indexOf(b) < 0 ) a.push(b);
      return a;
  },[]);
  for (var i = 0; i < uniqFiltered.length; i++) {
    filteredObjects.push(window[uniqFiltered[i]]);
  }
}

function displayFilterEvent(){
  for (var i = 0; i < filteredObjects.length; i++) {
    var blurFiltered = document.getElementById('blur-'+filteredObjects[i].toString);
    blurFiltered.setAttribute("filter", "url(#fBlur)");
  }
}

function addFilterEvents(obj){
  $('.filter-svg-group').remove();
  if (filteredObjects.length > 0) {
      translateTimeline(1);
  }
  var timelineTarget = SVG.get('timeline-svg-group');
  var filterGroup = timelineTarget.group().attr({class:'filter-svg-group', id:'filter-svg-group'});
  for (var i = 0; i < filteredObjects.length; i++) {
    var filterCircle = draw.circle(1).attr({fill: obj.color, 'fill-opacity':0.75, cx:filteredObjects[i].x*xOffset, cy:filteredObjects[i].y*yOffset+50*scale, class:'filter-svg-circle'});
    filterCircle.attr({"stroke-width": 1, stroke: obj.color});
    // var filterBlurCircle = draw.circle(1).attr({fill: obj.color, cx:filteredObjects[i].x*xOffset, cy:filteredObjects[i].y*yOffset+50*scale, class:'filter-svg-blur-circle', filter: 'url(#fBlurSmall)'});
    filterCircle.animate(400, '>', 0).attr({ r: 6*scale });
    // filterBlurCircle.animate(400, '>', 0).attr({ r: 6*scale })
    filterGroup.add(filterCircle);
  }
}

function translateTimeline(a){
  var tlGroup = document.getElementById('timeline');
  switch (a) {
    case 0:
      tlGroup.setAttribute("transform", "translate(0,0)");
      break;
    case 1:
      tlGroup.setAttribute("transform", "translate(0,"+20*disScale+")");
      break;
    default:
  }
}
function turnOnFilteredEvents(){
  for (var i = 0; i < filteredObjects.length; i++) {
    var targetEvents = document.getElementById(filteredObjects[i].toString+'-single-parent');
    console.log(targetEvents);
    targetEvents.classList.add('active');
    targetEvents.childNodes[0].setAttribute("filter", "url(#fBlur)");
    targetEvents.childNodes[2].setAttribute("filter", "");
  }
}

function focusEventOnEvents(obj){
  toggleAllSingleCircles(0);
  var targetEvent = document.getElementById(obj.toString+'-single-parent');
  targetEvent.classList.add('active');
  targetEvent.childNodes[0].setAttribute("filter", "url(#fBlur)");
  targetEvent.childNodes[2].setAttribute("filter", "");
}
