var filterText = document.getElementById('filter-text');
var filterImg = document.getElementById('filter-img');
/* global function to add filter */
function addToFilter(obj){
  emptyFilter();
  toggleBlurSingle(0);
  toggleFilterElements(1);
  addToFilterBox(obj);
  filterObj(obj);
  displayFilter();
  if (currentFilter == "events") {
    addFilterEvents(obj);
  }
  isFiltered = true;
}

function emptyFilter(){
  toggleBlurSingle(1);
  translateTimeline(0);
  toggleFilterElements(0);
  $('.filter-svg-group').remove();
  filterImg.innerHTML= "";
  isFiltered = false;
}

function toggleBlurSingle(a){
  var blurSingle = document.getElementsByClassName('blur-single');
  for (var i = 0; i < blurSingle.length; i++) {
    switch (a) {
      case 0:
        blurSingle[i].setAttribute("filter", "url(#fGray)");
        break;
      case 1:
        blurSingle[i].setAttribute("filter", "url(#fBlur)");
        break;
      default:
    }
  }
}

function toggleFilterElements(a){
  var filterGhost = document.getElementById('button-filter-ghost');
  var textPlaceholder = document.getElementById('filter-text-placeholder');
  var filterElement = document.getElementById('filter-element');
  switch (a) {
    case 0:
      filterGhost.classList.remove("on");
      filterGhost.classList.add("off");
      textPlaceholder.classList.remove("with-filter");
      textPlaceholder.classList.add("no-filter");
      filterElement.classList.remove('with-filter');
      filterElement.classList.add('no-filter');
      break;
    case 1:
      filterGhost.classList.remove("off");
      filterGhost.classList.add("on");
      textPlaceholder.classList.remove("no-filter");
      textPlaceholder.classList.add("with-filter");
      filterElement.classList.remove('no-filter');
      filterElement.classList.add('with-filter');
      break;
    default:
  }
}

function addToFilterBox(obj){
  filterText.innerHTML = obj.name;
  appendImg(obj, filterImg, 0.75);
}

var currentFilter = "";
var isFiltered = false;
var filtered = [];
var filteredObjects = [];

function filterObj(obj){
  filtered = [];
  var arrayToFilter;
  switch (currentFilter) {
    case "events":
      arrayToFilter = allEvents;
      break;
    case "people":
      arrayToFilter = allPeople;
      break;
    default:
  }
  for (var i = 0; i < arrayToFilter.length; i++) {
    for (var j = 0; j < arrayToFilter[i].children.length; j++) {
      if (arrayToFilter[i].children[j].type == obj.type && arrayToFilter[i].children[j].id == obj.id) {
        filtered.push(arrayToFilter[i].toString);
      }
      if (typeof arrayToFilter[i].children[j].children !== "undefined") {
        for (var k = 0; k < arrayToFilter[i].children[j].children.length; k++) {
          if (arrayToFilter[i].children[j].children[k].type == obj.type && arrayToFilter[i].children[j].children[k].id == obj.id) {
            filtered.push(arrayToFilter[i].toString);
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
  // console.log(filteredObjects);
}

function displayFilter(){
  for (var i = 0; i < filteredObjects.length; i++) {
    var blurFiltered = document.getElementById('blur-'+filteredObjects[i].toString);
    console.log(blurFiltered);
    blurFiltered.setAttribute("filter", "url(#fBlur)");
  }
}

function addFilterEvents(obj){
  $('.filter-svg-group').remove();
  translateTimeline(1);
  for (var i = 0; i < filteredObjects.length; i++) {
    var filterGroup = draw.group().attr({class:'filter-svg-group', id:'filter-svg-group'});
    var filterCircle = draw.circle(1).attr({fill: "#FFFFFF", opacity:0.33, cx:filteredObjects[i].x*xOffset, cy:filteredObjects[i].y*yOffset+50*scale, class:'filter-svg-circle'});
    var filterBlurCircle = draw.circle(1).attr({fill: obj.color, cx:filteredObjects[i].x*xOffset, cy:filteredObjects[i].y*yOffset+50*scale, class:'filter-svg-blur-circle', filter: 'url(#fBlurSmall)'});
    filterCircle.animate(300, '>', 0).attr({ r: 6*scale });
    filterBlurCircle.animate(300, '>', 0).attr({ r: 6*scale })
    filterGroup.add(filterCircle).add(filterBlurCircle);
  }
}

function translateTimeline(a){
  switch (a) {
    case 0:
      tlGroup.move(0, 0);
      break;
    case 1:
      tlGroup.move(0, 20*scale);
      break;
    default:
  }
}
