var popUpWrapper = document.getElementById('pop-up-wrapper');

function addPopUp(el, link){
  var x = el.cx.baseVal.value,
      y = el.cy.baseVal.value;

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
  popUpDiv.style.top = y-100+"px";
  popUpDiv.style.left = x+20+"px";

  popUpWrapper.append(popUpDiv);

  var draw = SVG('pop-up-wrapper').size(vw, vh).attr({class:'svg-pop-up-bg', 'onclick' : 'removePopUp()'});
  draw.rect(vw, vh).fill("rgba(0,0,0,0.5)");
  draw.circle(12).attr({class:'link-circle pointer', fill:'#C4C4C4', 'fill-opacity':"1", stroke:"#ffffff", cx:x, cy:y});
}
 function removePopUp(){
   popUpWrapper.innerHTML = '';
 }
