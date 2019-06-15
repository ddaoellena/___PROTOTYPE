var mainNodes;

function addToFilterD3(obj){
  addFilterD3Circle(obj);
};

function getMainNodes(table){
  mainNodes = "";
  var result = table.nodes.filter(obj => {
    return obj.mainNode == true;
  })
  console.log(result);
  mainNodes = result;
};

function addRelatedToD3(table){
  getMainNodes(table)
  console.log(mainNodes);
};

function turnOnD3ParentCircle(obj){ //turn on parent node if focus is same type
  turnOffAllD3Circles(0);
  document.getElementById(obj.nodeClass+'-img').setAttribute("filter", "");
  document.getElementById(obj.nodeClass+'-blur').setAttribute('opacity', '1'); //blur circle of parent
  var blurCircleChildren = document.getElementsByClassName(obj.nodeClass+'-blur'); //blur circle of children
  var patternCircleChildren = document.getElementsByClassName(obj.nodeClass+'-pattern');
  for (var i = 0; i < blurCircleChildren.length; i++) {
    blurCircleChildren[i].setAttribute('opacity', '1');
  }
  for (var i = 0; i < patternCircleChildren.length; i++) {
    patternCircleChildren[i].setAttribute('opacity', '1');
  }
}

function turnOffAllD3Circles(a){
  var blurCircle = document.getElementsByClassName('blur-circle');
  var patternCircle = document.getElementsByClassName('pattern-circle');
  var imageNode = document.getElementsByClassName('image-node');
  var toTurnOff = [blurCircle,patternCircle];
  switch (a) {
    case 0:
      for (var i = 0; i < toTurnOff.length; i++) {
        for (var j = 0; j < toTurnOff[i].length; j++) {
          toTurnOff[i][j].setAttribute('opacity', '0.33');
        }
      }
      for (var i = 0; i < imageNode.length; i++) {
        imageNode[i].setAttribute("filter", "url(#fGray)")
      }
      break;
    case 1:
      for (var i = 0; i < toTurnOff.length; i++) {
        for (var j = 0; j < toTurnOff[i].length; j++) {
          toTurnOff[i][j].setAttribute('opacity', '1');
        }
      }
      for (var i = 0; i < imageNode.length; i++) {
        imageNode[i].setAttribute("filter", "")
      }
      break;
    default:
  }
}

function addFilterD3Circle(obj){
  toggleFilterGroup(1);
  var blurFilter = document.getElementsByClassName('blur-filter');
  for (var i = 0; i < blurFilter.length; i++) {
    blurFilter[i].style.fill = obj.color;
  }
}
