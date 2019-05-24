var popUpWrapper = document.getElementById('pop-up-wrapper');

function addPopUp(el, link){
  var x = el.cx.baseVal.value,
      y = el.cy.baseVal.value,
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

  var drawPopUp = SVG(popUpDiv).size(20, 20).attr({class:'svg-pop-up-icon'});
  var circle = drawPopUp.circle(20).attr({fill:'#C4C4C4', 'fill-opacity':"0.7"});

  var popUpNameDiv = document.createElement('div');
  popUpNameDiv.setAttribute('class', 'pop-up-title-div');
  var popUpName = document.createElement('h2');
  popUpName.setAttribute('class', 'pop-up-title');
  popUpName.innerHTML = link.name;

  // popUpNameDiv.append(popUpIconDiv);
  popUpNameDiv.append(popUpName);
  popUpDiv.append(popUpNameDiv);

  var popUpTextDiv = document.createElement('div');
  popUpTextDiv.setAttribute('class', 'pop-up-text');
  var popUpText = document.createElement('p');
  popUpText.innerHTML = link.description;
  popUpTextDiv.append(popUpText);
  popUpDiv.append(popUpTextDiv);

  popUpTextDiv.append(popUpText);
  popUpDiv.style.top = y-50+"px";
  popUpDiv.style.left = x+20+"px";

  popUpWrapper.append(popUpDiv);

  var draw = SVG('pop-up-wrapper').size(vw, vh).attr({class:'svg-pop-up-bg', 'onclick' : 'removePopUp()'});
  draw.rect(vw, vh).fill("rgba(0,0,0,0.5)");
  var circle = draw.circle(12).attr({class:'link-circle pointer', fill:'#C4C4C4', 'fill-opacity':"1", stroke:"#ffffff", cx:x, cy:y});
  circle.rotate(rotate, originX, originY);
  console.log(circle.node.cx.baseVal.value, circle.node.cy.baseVal.value)
}
 function removePopUp(){
   popUpWrapper.innerHTML = '';
 }
