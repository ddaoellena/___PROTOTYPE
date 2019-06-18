/*
* function addCircle()
* @params {r} = radius, {x} = position x, {y} = position y,
* @params type, {int}, 0 = meme, 1 = event, 2 = people, 3 = site
* @params {img}, string
*/
var dis = 80;
var disAdj = Math.sqrt(dis)*7;
var radAdj = 67.5 * (Math.PI/180);
var r = 50;
var rBlur = r;
var rSingle = 50;
var rBlurSingle = rSingle;
var rLink = 12;
var opacityLink = 1;
var rFirst = r*0.75;
var rSecond = r*0.5;
var rBlurFirst = r*0.75;
var rBlurSecond = r*0.5;
var imgVisibility = "visible";




function addSingleCircle(obj){
  var timelineTarget = SVG.get('timeline-svg-group');
  // var wrapperGroup = draw.group().attr({class:'wrapper-group', id:obj.toString+'-group', onclick: 'toggleThisCircle(this)', 'data-id':obj.toString});
  var parentGroup = timelineTarget.group().attr({id:obj.toString+'-single-parent',class:'circle circle-object '+obj.circleClass+' generated single pointer', 'onclick':'addPlusCircle('+obj.toString+', 1);appendPlusInfo('+obj.toString+');turnOnSingleEventCircle(this);'});
  var parentBlur = draw.circle(rBlurSingle*scale).attr({fill:obj.color, class:'circle-blur blur-single',id:'blur-'+obj.toString, cx:obj.x*xOffset, cy:obj.y*yOffset, filter: 'url(#fBlur)'})

  var parentCircle = draw.circle(rSingle*scale).attr({fill:'#C4C4C4', 'fill-opacity':"0.7", cx:obj.x*xOffset, cy:obj.y*yOffset});
  /*create clip for images*/
  var circleClip = draw.circle(r*scale).attr({fill:'#FFFFFF', cx:obj.x*xOffset, cy:obj.y*yOffset});
  var parentClip = draw.clip().add(circleClip).attr({class:'clip-path'});
  var parentImage = draw.image('./assets/pics/'+obj.folder+'/'+obj.imgThumbnail, r*scale, r*scale);
  parentImage.attr({class:'cirle-image image-event-single', filter:''});
  parentImage.move(obj.x*xOffset-(r*scale)/2, obj.y*yOffset-(r*scale)/2);
  parentImage.clipWith(parentClip);
  parentGroup.add(parentBlur).add(parentCircle).add(parentImage);
  /* --- end ----*/
  var contentContainer = document.createElement('div');
  var nameP = document.createElement('p');
  nameP.setAttribute('class', 'tippy-content-name');
  nameP.innerHTML = obj.name;
  contentContainer.appendChild(nameP);

  if (typeof obj.date !== 'undefined') {
    var dateP = document.createElement('p');
    dateP.setAttribute('class', 'tippy-content-date');
    dateP.innerHTML = obj.date;
    contentContainer.appendChild(dateP);
  }

  var appendContent = contentContainer.innerHTML;

  tippy('.circle-object',{
    theme: 'light',
    animateFill: false,
    duration:200,
    content: appendContent,
  });
};



var plusSvg = document.getElementById('plus-svg');

function addPlusCircle(obj, expand){
  togglePlusSvg(1);
  plusSvg.innerHTML= "";
  var svgPlusW = plusSvg.getBoundingClientRect().width,
      svgPlusH = plusSvg.getBoundingClientRect().height;
  var plusDraw = SVG('plus-svg').size(svgPlusW, svgPlusH).attr({id:'plus-svg'}).viewbox(0,0,svgPlusW,svgPlusH);
  var elemsGroup = plusDraw.group().attr({class:'elems-group', id:'elems-group'});

  var state = "",
      stroke = "";
  var x= svgPlusW/2,
      y= svgPlusH/2;

  switch (expand) {
    case 0:
      dis =50;
      rLink = 0;
      rFirst = r*0.5;
      rSecond = r*0.25;
      rBlurFirst = r*0.5;
      rBlurSecond = r*0.25;
      opacityLink = 0.33;
      imgVisibility = "hidden";
      state = "collapsed";
      stroke = "";
      break;
    case 1:
      dis = 80*scale;
      secondDis = 0.75;
      rLink = 12*scale;
      rFirst = r*0.75*scale;
      rSecond = r*0.5*scale;
      rBlurFirst = r*0.75*scale;
      rBlurSecond = r*0.5*scale;
      opacityLink = 1;
      imgVisibility = "visible";
      state = "expanded";
      stroke = "active";
      break;
    default:

  }
  /*
  * Parent group
  */
  var wrapperGroup = plusDraw.group().attr({class:state+ ' wrapper-group', id:obj.toString+'-group', onclick: 'toggleThisCircle(this)', 'data-id':obj.toString});
  var parentGroup = plusDraw.group().attr({id:obj.toString+'-parent',class:'plus-circle '+obj.circleClass+' generated parent pointer '+stroke, 'onclick':'toggleCircle(this); appendInfo('+obj.toString+'); appendPlusInfo('+obj.toString+')', 'onmouseenter':'colorOn(this)', 'onmouseleave':'colorOff(this)'});
  var parentBlur = plusDraw.circle(rBlur*scale).attr({fill:obj.color, class:'circle-blur', cx:x, cy:y, filter: 'url(#fBlur)'})

  var parentCircle = plusDraw.circle(r*scale).attr({fill:'#C4C4C4', 'fill-opacity':"0.7", cx:x, cy:y});
  /*create clip for images*/
  var circleClip = plusDraw.circle(r*scale).attr({fill:'#FFFFFF', cx:x, cy:y});
  var parentClip = plusDraw.clip().add(circleClip).attr({class:'clip-path'});
  var parentImage = plusDraw.image('./assets/pics/'+obj.folder+'/'+obj.imgThumbnail, r*scale, r*scale);
  parentImage.attr({class:'cirle-image', filter:''});
  parentImage.move(x-r*scale/2, y-r*scale/2);
  parentImage.clipWith(parentClip);
  parentGroup.add(parentBlur).add(parentCircle).add(parentImage);
  /* --- end ----*/
  /*
  * First children group
  */
  var pos = [];
  switch (obj.children.length) {
    case 1:
    pos = [1];
    break;
    case 2:
      switch (obj.or) {
        case "right":
            pos = [1, 3];
          break;
        case "left":
            pos = [1, 7];
          break;
        case "down":
            pos = [1, 5];
          break;
        default:
      }
      break;
    case 3:
      switch (obj.or) {
        case "right":
            pos = [1, 3, 5];
          break;
        case "left":
            pos = [1, 7, 5];
          break;
        default:
      }
      break;
    case 4:
    pos = [1, 3, 5, 7];
      break;
    default:
  }

  /*
  * First children group
  */
  var firstChildrenGroup = plusDraw.group().attr({class:'generated children-group first-children-group'});
  var secondChildrenGroup = plusDraw.group().attr({class:'generated children-group second-children-group'});

  for (var i = 0; i < obj.children.length; i++) {
    /*
    * First children link group
    */
    var firstLinkGroup = plusDraw.group().attr({class:'generated link-group'});
    var firstLinkLine = plusDraw.line(x, y, x+placeCircle(pos[i])[0], y+placeCircle(pos[i])[1]);
    firstLinkLine.stroke({ color: obj.children[i].linkColor, width: 1, linecap: 'round', opacity:opacityLink});
    // var firstLinkLineBlur = draw.line(obj.x, obj.y, obj.x+placeCircle(pos[i])[0], obj.y+placeCircle(pos[i])[1]);
    // firstLinkLineBlur.stroke({ color: obj.children[i].linkColor, width: 3, linecap: 'round', opacity:opacityLink/3});
    var firstLinkCircle = plusDraw.circle(rLink).attr({class:'link-circle pointer '+ obj.children[i].linkClass, fill:'#C4C4C4', 'fill-opacity':"0.66", cx:x+(placeCircle(pos[i])[0]/2), cy:y+(placeCircle(pos[i])[1]/2), "onclick": "toggleAllCircles(); addPopUp(this); appendLinkInfo("+obj.children[i].linkToString+","+obj.children[i].linkDetailToString+");", "data-type":"link"});
    var firstLinkCircleBlur = plusDraw.circle(rLink*1.2).attr({class:'link-circle-blur', fill:obj.children[i].linkColor, 'fill-opacity':"1", cx:x+(placeCircle(pos[i])[0]/2), cy:y+(placeCircle(pos[i])[1]/2), filter: 'url(#fBlur)'});
    firstLinkGroup.add(firstLinkLine).add(firstLinkCircleBlur).add(firstLinkCircle);
    firstChildrenGroup.add(firstLinkGroup);
    /*
    * First children circle group
    */
    var firstCircleGroup = plusDraw.group().attr({class:'plus-circle '+obj.children[i].circleClass+' generated children pointer', id:'first-group-'+i, 'onclick':'toggleCircle(this); addPopUp(this);'+'appendInfo('+obj.children[i].toString+'); appendPlusInfo('+obj.children[i].toString+')', 'onmouseenter':'colorOn(this)', 'onmouseleave':'colorOff(this)', "data-type":"group"});
    var firstCircleGroupBlur = plusDraw.circle(rBlurFirst).attr({fill:obj.children[i].color, class:'circle-blur', cx:x+placeCircle(pos[i])[0], cy:y+placeCircle(pos[i])[1], filter: 'url(#fBlur)'});
    var firstCircle = plusDraw.circle(rFirst).attr({fill:'#C4C4C4', 'fill-opacity':"0.7", cx:x+placeCircle(pos[i])[0], cy:y+placeCircle(pos[i])[1]});
    /*create clip for images*/
    var firstCircleClip = plusDraw.circle(rFirst).attr({fill:'#FFFFFF', cx:x+placeCircle(pos[i])[0], cy:y+placeCircle(pos[i])[1], class:'clip-path'});
    var firstClip = plusDraw.clip().add(firstCircleClip).attr({class:'clip-path'});
    var firstImage = plusDraw.image('./assets/pics/'+obj.children[i].folder+'/'+obj.children[i].imgThumbnail, rFirst, rFirst);
    firstImage.attr({class:'cirle-image', filter:'url(#fGray)', "visibility": imgVisibility});
    /* add data attributes */
    firstCircleGroup.attr({"data-element-type": obj.children[i].type});
    firstCircleGroup.attr({"data-group-radius": firstCircle.node.r.baseVal.value, "data-group-x": firstCircle.node.cx.baseVal.value, "data-group-y": firstCircle.node.cy.baseVal.value});
    firstLinkCircle.attr({"data-first-x":parentCircle.node.cx.baseVal.value, "data-first-y":parentCircle.node.cy.baseVal.value, "data-first-radius":parentCircle.node.r.baseVal.value, "data-second-x":firstCircle.node.cx.baseVal.value, "data-second-y":firstCircle.node.cy.baseVal.value, "data-second-radius":firstCircle.node.r.baseVal.value, "data-link-color":obj.children[i].linkColor});
    firstLinkCircle.attr({"data-line-x1":firstLinkLine.node.x1.baseVal.value,"data-line-y1":firstLinkLine.node.y1.baseVal.value, "data-line-x2":firstLinkLine.node.x2.baseVal.value,"data-line-y2":firstLinkLine.node.y2.baseVal.value});
    firstLinkCircle.attr({"data-first-node":parentGroup.node.id, "data-second-node": firstCircleGroup.node.id, "data-first-obj": obj.toString, "data-second-obj": obj.children[i].toString});
    firstImage.move(x+placeCircle(pos[i])[0]-rFirst/2, y+placeCircle(pos[i])[1]-rFirst/2);
    firstImage.clipWith(firstClip);
    firstCircleGroup.add(firstCircleGroupBlur).add(firstCircle).add(firstImage);
    firstChildrenGroup.add(firstCircleGroup);

    /*
    * Second children group
    */
    if (typeof obj.children[i].children !== 'undefined') {
         var rotation = [];
         var classRotation = [];
         var numberChildren = obj.children[i].children.length;
         switch (numberChildren) {
           case 1:
           rotation = [0];
           classRotation = ["rotate0"];
           break;
           case 2:
           rotation = [-45, 45];
           classRotation = ["rotate-45", "rotate45"];
             break;
           case 3:
           rotation = [-45, 0, 45];
           classRotation = ["rotate-45", "rotate0", "rotate45"];
             break;
           case 4:
           rotation = [-90, -30, 30, 90];
           classRotation = ["rotate-90", "rotate-30", "rotate30", "rotate90"];
             break;
           case 5:
           rotation = [-90, -45, 0, 45, 90];
           classRotation = ["rotate-90", "rotate-45", "rotate0", "rotate45", "rotate90"];
             break;
           default:
         }

         for (var j = 0; j < obj.children[i].children.length; j++) {
           var childX = firstLinkLine.node.x2.baseVal.value;
           var childY = firstLinkLine.node.y2.baseVal.value;

           var secondLinkGroup = plusDraw.group().attr({class:'generated link-group'});
           var secondLinkLine = plusDraw.line(childX, childY, childX+placeCircle(pos[i])[0]*secondDis, childY+placeCircle(pos[i])[1]*secondDis);
           secondLinkLine.stroke({ color: obj.children[i].children[j].linkColor, width: 1, linecap: 'round', opacity:opacityLink});
           var secondLinkCircle = plusDraw.circle(rLink).attr({class:'link-circle pointer ' + classRotation[j] + ' '+ obj.children[i].children[j].linkClass, fill:'#C4C4C4','fill-opacity':"0.66", cx:childX+(placeCircle(pos[i])[0]/2)*0.75, cy:childY+(placeCircle(pos[i])[1]/2)*0.75, "onclick": "toggleAllCircles(); addPopUp(this); appendLinkInfo("+obj.children[i].children[j].linkToString+","+obj.children[i].children[j].linkDetailToString+")", "data-type":"link"});
           var secondLinkCircleBlur = plusDraw.circle(rLink*1.2).attr({class:'link-circle-blur ' + classRotation[j] , fill:obj.children[i].children[j].linkColor,'fill-opacity':".75", cx:childX+(placeCircle(pos[i])[0]/2)*secondDis, cy:childY+(placeCircle(pos[i])[1]/2)*secondDis, filter: 'url(#fBlur)'});

           secondLinkGroup.add(secondLinkLine).add(secondLinkCircleBlur).add(secondLinkCircle);
           secondLinkGroup.rotate(rotation[j],childX,childY);
           secondChildrenGroup.add(secondLinkGroup);
           var secondCircleGroup = plusDraw.group().attr({class:'plus-circle '+obj.children[i].children[j].circleClass+' generated children pointer',id:"second-group-"+i+"-"+j,'onclick':'toggleCircle(this); addPopUp(this);'+'appendInfo('+obj.children[i].children[j].toString+');appendPlusInfo('+obj.children[i].children[j].toString+')', 'onmouseenter':'colorOn(this)', 'onmouseleave':'colorOff(this)', "data-type":"group"});
           var secondCircleGroupBlur = plusDraw.circle(rBlurSecond).attr({fill:obj.children[i].children[j].color, cx:childX+placeCircle(pos[i])[0]*secondDis, cy:childY+placeCircle(pos[i])[1]*secondDis, filter:'url(#fBlur)'})
           var secondCircle = plusDraw.circle(rSecond).attr({fill:'#C4C4C4', 'fill-opacity':"0.7", cx:childX+placeCircle(pos[i])[0]*secondDis, cy:childY+placeCircle(pos[i])[1]*secondDis});
           /*create clip for images*/
           var secondCircleClip = plusDraw.circle(rSecond).attr({fill:'#FFFFFF', cx:childX+placeCircle(pos[i])[0]*secondDis, cy:childY+placeCircle(pos[i])[1]*secondDis, class:'clip-path'});
           var secondClip = plusDraw.clip().add(secondCircleClip).attr({class:'clip-path'});
           var secondImage = plusDraw.image('./assets/pics/'+obj.children[i].children[j].folder+'/'+obj.children[i].children[j].imgThumbnail, rSecond, rSecond);
           /* add data attributes */
           secondCircleGroup.attr({"data-element-type": obj.children[i].children[j].type});
           secondCircleGroup.attr({"data-group-radius": secondCircle.node.r.baseVal.value, "data-group-x": secondCircle.node.cx.baseVal.value, "data-group-y": secondCircle.node.cy.baseVal.value});
           secondCircleGroup.attr({"data-rotation":true, "data-class-rotation":classRotation[j], "data-origin-x":childX, "data-origin-y":childY})
           secondLinkCircle.attr({"data-first-x":firstCircle.node.cx.baseVal.value, "data-first-y":firstCircle.node.cy.baseVal.value, "data-first-radius":firstCircle.node.r.baseVal.value, "data-second-x":secondCircle.node.cx.baseVal.value, "data-second-y":secondCircle.node.cy.baseVal.value, "data-second-radius":secondCircle.node.r.baseVal.value, "data-link-color":obj.children[i].children[j].linkColor});
           secondLinkCircle.attr({"data-line-x1":secondLinkLine.node.x1.baseVal.value,"data-line-y1":secondLinkLine.node.y1.baseVal.value, "data-line-x2":secondLinkLine.node.x2.baseVal.value,"data-line-y2":secondLinkLine.node.y2.baseVal.value});
           secondLinkCircle.attr({"data-first-node":firstCircleGroup.node.id, "data-second-node":secondCircleGroup.node.id});
           secondImage.attr({class:'cirle-image', filter:'url(#fGray)', "visibility": imgVisibility});
           secondImage.move(childX+placeCircle(pos[i])[0]*secondDis-rSecond/2, childY+placeCircle(pos[i])[1]*secondDis-rSecond/2);
           secondImage.clipWith(secondClip);
           /*add all elements to same group*/
           secondCircleGroup.add(secondCircleGroupBlur).add(secondCircle).add(secondImage);
           secondCircleGroup.rotate(rotation[j], childX, childY);
           secondCircleGroup.rotate(0);
           secondChildrenGroup.add(secondCircleGroup);
         }
     }
  }
  wrapperGroup.add(secondChildrenGroup);
  wrapperGroup.add(firstChildrenGroup);
  wrapperGroup.add(parentGroup);

  elemsGroup.add(wrapperGroup);

}
/*
* function placeCircle()
* create circle of related elements to the obj
* @params obj, object; d, distance from the core obj
*   8 1 2
*   7 x 3
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


function toggleThisCircle(el){
  var obj = window[el.dataset.id];
  switch (el.classList[0]) {
    case "collapsed":
      el.remove();
      addCircle(obj, 1);
      break;
    default:

  }
}

/*
* function toggleAllCircles()
* remove active class from all circles
* and make all pictures gray
*/
function toggleAllSingleCircles(a){
var circleList = document.getElementsByClassName('circle');
  switch (a) {
    case 0:
    for (var i = 0; i < circleList.length; i++) {
      circleList[i].classList.remove('active');
      circleList[i].setAttribute('stroke', '');
      circleList[i].childNodes[0].setAttribute("filter", "0");
      circleList[i].childNodes[2].setAttribute("filter", "url(#fGray)");
    }
    break;
    case 1:
    for (var i = 0; i < circleList.length; i++) {
      circleList[i].classList.add('active');
      circleList[i].setAttribute('stroke', '');
      circleList[i].childNodes[0].setAttribute("filter", "url(#fBlur)");
      circleList[i].childNodes[2].setAttribute("filter", "");
    }
    break;
  default:
 }
}
/*
* function toggleAllCircles()
* remove active class from all circles
* and make all pictures gray
*/
function toggleAllPlusCircles(){
var circleList = document.getElementsByClassName('plus-circle');
 for (var i = 0; i < circleList.length; i++) {
   circleList[i].classList.remove('active');
   circleList[i].setAttribute('stroke', '');
   circleList[i].childNodes[2].setAttribute("filter", "url(#fGray)");
 }
}

function turnOnSingleEventCircle(el){
  var singleEventCircles = document.getElementsByClassName("circle-object");
  for (var i = 0; i < singleEventCircles.length; i++) {
    singleEventCircles[i].childNodes[1].setAttribute('stroke-width', '0');
  }
  el.childNodes[1].setAttribute('stroke', '#83E1FF');
  el.childNodes[1].setAttribute('stroke-width', '5');
}
