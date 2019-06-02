var popUpWrapper = document.getElementById('pop-up-wrapper');
var popUpGroup = document.getElementById('pop-up-group');

function addPopUp(el, link){
  var popUp = draw.group().attr({class:'pop-up-group', id:'pop-up-group'});

  var x = el.cx.baseVal.value,
      y = el.cy.baseVal.value,
      divX = el.getBoundingClientRect().x,
      divY = el.getBoundingClientRect().y,
      rotateVar = el.classList[2],
      rotate = 0,
      originX = el.parentNode.childNodes[0].x1.baseVal.value,
      originY = el.parentNode.childNodes[0].y1.baseVal.value;

  switch (rotateVar) {
    case "rotate0":
    rotate = 0;
      break;
    case "rotate-45":
    rotate = -45;
      break;
      case "rotate45":
      rotate = 45;
        break;
    default:
  }
  var popUpDiv = document.createElement('div');
  popUpDiv.setAttribute('class', 'pop-up-div');

  var popUpNameDiv = document.createElement('div');
  popUpNameDiv.setAttribute('class', 'pop-up-title-div');
  var popUpName = document.createElement('h2');
  popUpName.setAttribute('class', 'pop-up-title');
  popUpName.innerHTML = link.name;
  popUpNameDiv.append(popUpName);

  var linkType = document.createElement('div');
  linkType.setAttribute('class', 'link-type-div');
  var linkStroke = document.createElement('div');
  linkStroke.setAttribute('class', 'link-stroke');
  var linkFirst = document.createElement('div');
  var linkSecond = document.createElement('div');
  linkFirst.setAttribute('class', 'link-element link-first');
  linkFirst.style.backgroundColor = link.firstColor;
  linkSecond.setAttribute('class', 'link-element link-second');
  linkSecond.style.backgroundColor = link.secondColor;
  // console.log(link.firstColor, link.secondColor);
  linkType.append(linkStroke);
  linkType.append(linkFirst);
  linkType.append(linkSecond);

  popUpNameDiv.append(linkType);
  popUpDiv.append(popUpNameDiv);

  var popUpFilterDiv = document.createElement('div');
  popUpFilterDiv.setAttribute('class', 'pop-up-filter-div');
  var popUpFilterCircle = document.createElement('div');
  popUpFilterCircle.setAttribute('class', 'pop-up-filter-circle');
  popUpFilterCircle.setAttribute('onclick', '');
  var filterPlus = document.createElement('p');
  filterPlus.setAttribute('class', 'plus-filter');
  filterPlus.innerHTML ="+";

  var popUpFilterText = document.createElement('p');
  popUpFilterText.setAttribute('class', 'pop-up-filter-text');
  popUpFilterText.innerHTML = "Ajouter aux filtres"

  popUpFilterDiv.append(popUpFilterCircle);
  popUpFilterCircle.append(filterPlus);
  popUpFilterDiv.append(popUpFilterText);
  popUpDiv.append(popUpFilterDiv);

  var popUpTextDiv = document.createElement('div');
  popUpTextDiv.setAttribute('class', 'pop-up-text');
  var popUpText = document.createElement('p');
  popUpText.innerHTML = link.description;
  popUpTextDiv.append(popUpText);
  popUpDiv.append(popUpTextDiv);

  if (divY<50) {
    popUpDiv.style.top = divY+50+"px";
  } else {
    popUpDiv.style.top = divY-50+"px";
  }
  if (divX>vw*0.9) {
    popUpDiv.style.left = divX-220+"px";
  } else {
    popUpDiv.style.left = divX+20+"px";
  }

  popUpWrapper.append(popUpDiv);

  var hideRect = draw.rect(viewWidth, vh).fill("rgba(0,0,0,0.5)").attr({'onclick':'removePopUp()'});
  var circle = draw.circle(12).attr({class:'link-circle pointer', fill:link.color, 'fill-opacity':"1", stroke:"#ffffff", cx:x, cy:y});
  circle.rotate(rotate, originX, originY);
  popUp.add(hideRect).add(circle);
}

function removePopUp(){
  $('.pop-up-group').empty();
  $('.pop-up-wrapper').empty();
}
