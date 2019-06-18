// var tagsFomte
var tagFilter = document.getElementById('tag-filter');

function addTagFilter(obj){
  emptyFilterDiv();
  removeFocus();
  addTagTypo(obj, 2);
  toggleFilterTag(1);
  turnOffAllD3Circles(0);
  turnOnTagCircles(obj);
}

function removeTagFilter(){
  turnOffAllD3Circles(1);
  emptyFilterDiv();
  toggleFilterTag(0);
}

function emptyFilterDiv(){
  $('#tag-container-filter').remove();
}

function toggleFilterTag(a){
  switch (a) {
    case 0:
      tagFilter.classList.remove("w-tag");
      tagFilter.classList.add("wo-tag");
      break;
    case 1:
      tagFilter.classList.remove("wo-tag");
      tagFilter.classList.add("w-tag");
      break;
    default:
  }
}

function turnOnTagCircles(obj){
  var blurNodes = document.querySelectorAll("[data-tag='"+ obj.tagClass +"-blur']");
  var imgNodes = document.querySelectorAll("[data-tag='"+ obj.tagClass +"-img']");
  for (var i = 0; i < blurNodes.length; i++) {
    blurNodes[i].setAttribute('opacity', '1');
  }
  for (var i = 0; i < imgNodes.length; i++) {
    imgNodes[i].setAttribute('opacity', '1');
    imgNodes[i].setAttribute("filter", "");
  }
}
