var popUpWrapper = document.getElementById('pop-up-wrapper');
var popUpGroup = document.getElementById('pop-up-group');

function addPopUp(el){
  var svgPlusW = plusSvg.getBoundingClientRect().width,
      svgPlusH = plusSvg.getBoundingClientRect().height;

  var plusDraw = SVG('plus-svg').size(svgPlusW, svgPlusH).attr({id:'pop-up-svg'}).viewbox(0,0,svgPlusW,svgPlusH);
  var popUp = plusDraw.group().attr({class:'pop-up-group', id:'pop-up-group'});

  var hideRect = plusDraw.rect(svgPlusW, svgPlusH).fill("rgba(0,0,0,0.75)").attr({'onclick':'removePopUp()'});
  var maskRect = plusDraw.rect(svgPlusW, svgPlusH).fill("rgba(255,255,255,1)");

  if (el.dataset.type == "link") {
    var x = el.cx.baseVal.value,
        y = el.cy.baseVal.value;
    var rotateVar = el.classList[2],
        rotate = 0,
        originX = el.parentNode.childNodes[0].x1.baseVal.value,
        originY = el.parentNode.childNodes[0].y1.baseVal.value;
    switch (rotateVar) {
      case "rotate0":
      rotate = 0;
        break;
      case "rotate-30":
      rotate = -30;
        break;
      case "rotate30":
      rotate = 30;
        break;
      case "rotate-45":
      rotate = -45;
        break;
      case "rotate45":
      rotate = 45;
        break;
      case "rotate-90":
      rotate = -90;
        break;
      case "rotate90":
      rotate = 90;
        break;
      default:
    }
    var linkStroke = plusDraw.line(el.dataset.lineX1, el.dataset.lineY1, el.dataset.lineX2, el.dataset.lineY2).stroke({ color:'#000000', width: 1});
    var firstCircle = plusDraw.circle(el.dataset.firstRadius*2).attr({fill:'#000000','fill-opacity':"1", cx:el.dataset.firstX, cy:el.dataset.firstY});
    var circle = plusDraw.circle(rLink).attr({fill:'#000000','fill-opacity':"1", cx:x, cy:y});
    var secondCircle = plusDraw.circle(el.dataset.secondRadius*2).attr({fill:'#000000','fill-opacity':"1", cx:el.dataset.secondX, cy:el.dataset.secondY});
    linkStroke.rotate(rotate, originX, originY);
    secondCircle.rotate(rotate, originX, originY);
    circle.rotate(rotate, originX, originY);
    var mask = plusDraw.mask().add(maskRect).add(linkStroke).add(firstCircle).add(circle).add(secondCircle);
    hideRect.maskWith(mask);
    var linkCircle = plusDraw.circle(rLink).attr({class:'link-circle pointer', fill:el.dataset.linkColor, 'fill-opacity':"1", stroke:"#ffffff", cx:x, cy:y});
    linkCircle.rotate(rotate, originX, originY);
    popUp.add(hideRect).add(linkCircle);

    var firstNode = document.getElementById(el.dataset.firstNode),
        secondNode = document.getElementById(el.dataset.secondNode);
    var inactiveNodes= [firstNode, secondNode];
    for (var i = 0; i < inactiveNodes.length; i++) {
      colorOn(inactiveNodes[i]);
      inactiveNodes[i].classList.add("color-on");
    }
  } else if (el.dataset.type == "group") {
    var circle = plusDraw.circle(el.dataset.groupRadius*2).attr({fill:'#000000','fill-opacity':"1", cx:el.dataset.groupX, cy:el.dataset.groupY});
      if (el.dataset.rotation == "true") {
        var rotate = 0;
        switch (el.dataset.classRotation) {
          case "rotate0":
          rotate = 0;
            break;
          case "rotate-30":
          rotate = -30;
            break;
          case "rotate30":
          rotate = 30;
            break;
          case "rotate-45":
          rotate = -45;
            break;
          case "rotate45":
          rotate = 45;
            break;
          case "rotate-90":
          rotate = -90;
            break;
          case "rotate90":
          rotate = 90;
            break;
          default:
        }
        circle.rotate(rotate, el.dataset.originX, el.dataset.originY);
      }
    var mask = plusDraw.mask().add(maskRect).add(circle);
    hideRect.maskWith(mask);
    popUp.add(hideRect);
  }
}

function removePopUp(){
  var activeNodes = document.getElementsByClassName("color-on");
  for (var i = 0; i < activeNodes.length; i++) {
    colorOffPlus(activeNodes[i]);
  }
  $(".color-on").removeClass("color-on");
  $('#pop-up-svg').remove();
  $('.pop-up-group').empty();
  $('.pop-up-wrapper').empty();
}
