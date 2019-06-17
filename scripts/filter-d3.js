var filteredD3 = [];

function addToFilterD3(obj){
  toggleFilterGroup(0);
  filterObjD3(obj);
  addFilterD3Circle(obj);
};

function filterObjD3(obj){
  filteredD3 = [];
  switch (currentView) {
    case "memes":
      getMainNodes(memesData);
      break;
    case "people":
      getMainNodes(peopleData);
      break;
    case "medias":
      getMainNodes(mediasData);
    break;
    default:
  }
  for (var i = 0; i < mainNodes.length; i++) {
    for (var j = 0; j < mainNodes[i].relatedString.length; j++) {
      if (mainNodes[i].relatedString[j] == obj.toString) {
          filteredD3.push(mainNodes[i].id)
      }
    }
  }
  console.log(filteredD3);
}

function turnOnD3ParentCircle(obj){ //turn on parent node if focus is same type
  turnOffAllD3Circles(0);
  document.getElementById(obj.nodeClass+'-img').setAttribute("opacity", "1");
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
  var circleNode = document.getElementsByClassName('circle-node');
  var imageNode = document.getElementsByClassName('image-node');
  var toTurnOff = [blurCircle, patternCircle];
  switch (a) {
    case 0:
      for (var i = 0; i < toTurnOff.length; i++) {
        for (var j = 0; j < toTurnOff[i].length; j++) {
          toTurnOff[i][j].setAttribute('opacity', '0.1');
        }
      }
      for (var i = 0; i < circleNode.length; i++) {
        circleNode[i].style.strokeWidth = 0;
      }
      for (var i = 0; i < imageNode.length; i++) {
        imageNode[i].setAttribute('opacity', '0.33');
        imageNode[i].setAttribute("filter", "url(#fGray)");
      }
      break;
    case 1:
      for (var i = 0; i < toTurnOff.length; i++) {
        for (var j = 0; j < toTurnOff[i].length; j++) {
          toTurnOff[i][j].setAttribute('opacity', '1');
        }
      }
      for (var i = 0; i < imageNode.length; i++) {
        imageNode[i].setAttribute('opacity', '1')
        imageNode[i].setAttribute("filter", "")
      }
      break;
    default:
  }
}

function turnOnD3ParentCircleFocus(cl){ //turn on parent node if focus is same type
  document.getElementById(cl+'-img').setAttribute("opacity", "1");
  document.getElementById(cl+'-img').setAttribute("filter", "");
  document.getElementById(cl+'-blur').setAttribute('opacity', '1'); //blur circle of parent
  var blurCircleChildren = document.getElementsByClassName(cl+'-blur'); //blur circle of children
  var patternCircleChildren = document.getElementsByClassName(cl+'-pattern');
  for (var i = 0; i < blurCircleChildren.length; i++) {
    blurCircleChildren[i].setAttribute('opacity', '1');
  }
  for (var i = 0; i < patternCircleChildren.length; i++) {
    patternCircleChildren[i].setAttribute('opacity', '1');
  }
}

function addFilterD3Circle(obj){
  turnOffAllD3Circles(0);
  for (var i = 0; i < filteredD3.length; i++) {
      var groupToToggle = document.getElementsByClassName('filter-group-'+filteredD3[i]);
      turnOnD3ParentCircleFocus(filteredD3[i]);
      for (var j = 0; j < groupToToggle.length; j++) {
        groupToToggle[j].childNodes[0].style.fill = obj.color; //set Color Blur;
        groupToToggle[j].style.visibility= "visible";
      }      // groupToToggle.childNodes[2].setAttribute("href", "./assets/pics/"+obj.folder+"/"+obj.imgThumbnail); // setImg

  }
}
