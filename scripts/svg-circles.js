/*
* function addCircle()
* @params {r} = radius, {x} = position x, {y} = position y,
* @params type, {int}, 0 = meme, 1 = event, 2 = people, 3 = site
* @params {img}, string
*/
var elemsGroup = draw.group().attr({class:'elems-group', id:'elems-group'});


var dis = 80;
var disAdj = Math.sqrt(dis)*7;
var radAdj = 67.5 * (Math.PI/180);
var r = 50;
var rBlur = r;
var rLink = 12;
var rFirst = r*0.75;
var rSecond = r*0.5;
var rBlurFirst = r*0.75;
var rBlurSecond = r*0.5;
var imgVisibility = "visible";

function addCircle(obj, expand){
  var state = "",
      stroke = "";

  switch (expand) {
    case 0:
      dis =50;
      rLink = 0;
      rFirst = r*0.5;
      rSecond = r*0.25;
      rBlurFirst = r*0.5;
      rBlurSecond = r*0.25;
      imgVisibility = "hidden";
      state = "collapsed";
      stroke = "";
      break;
    case 1:
      dis =80;
      rLink = 12;
      rFirst = r*0.75;
      rSecond = r*0.5;
      rBlurFirst = r*0.75;
      rBlurSecond = r*0.5;
      imgVisibility = "visible";
      state = "expanded";
      stroke = "active";
      break;
    default:

  }
  /*
  * Parent group
  */
  var wrapperGroup = draw.group().attr({class:state+ ' wrapper-group', id:obj.toString+'-group', onclick: 'toggleThisCircle(this)', 'data-id':obj.toString});
  var parentGroup = draw.group().attr({id:obj.toString+'-parent',class:'circle '+obj.circleClass+' generated parent pointer '+stroke, 'onclick':'toggleCircle(this); '+'appendInfo('+obj.toString+');', 'onmouseenter':'colorOn(this)', 'onmouseleave':'colorOff(this)'});
  var parentBlur = draw.circle(rBlur).attr({fill:obj.color, class:'circle-blur', cx:obj.x, cy:obj.y, filter: 'url(#fBlur)'})

  var parentCircle = draw.circle(r).attr({fill:'#C4C4C4', 'fill-opacity':"0.7", cx:obj.x, cy:obj.y});
  /*create clip for images*/
  var circleClip = draw.circle(r).attr({fill:'#FFFFFF', cx:obj.x, cy:obj.y});
  var parentClip = draw.clip().add(circleClip);
  var parentImage = draw.image('./assets/pics/'+obj.folder+'/'+obj.imgThumbnail, r, r);
  parentImage.attr({class:'cirle-image', filter:'url(#fGray)'});
  parentImage.move(obj.x-r/2, obj.y-r/2);
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
  var firstChildrenGroup = draw.group().attr({class:'generated children-group first-children-group'});
  var secondChildrenGroup = draw.group().attr({class:'generated children-group second-children-group'});

  for (var i = 0; i < obj.children.length; i++) {
    /*
    * First children link group
    */
    var firstLinkGroup = draw.group().attr({class:'generated link-group'});
    var firstLinkLine = draw.line(obj.x, obj.y, obj.x+placeCircle(pos[i])[0], obj.y+placeCircle(pos[i])[1]);
    firstLinkLine.stroke({ color: '#888888', width: 1, linecap: 'round'});
    var firstLinkCircle = draw.circle(rLink).attr({class:'link-circle pointer', fill:'#C4C4C4', 'fill-opacity':"1", cx:obj.x+(placeCircle(pos[i])[0]/2), cy:obj.y+(placeCircle(pos[i])[1]/2), "onclick": "addPopUp(this,"+ obj.children[i].linkToString +")"});
    firstLinkGroup.add(firstLinkLine).add(firstLinkCircle);
    firstChildrenGroup.add(firstLinkGroup);
    /*
    * First children circle group
    */
    var firstCircleGroup = draw.group().attr({class:'circle '+obj.children[i].circleClass+' generated children pointer','onclick':'toggleCircle(this); '+'appendInfo('+obj.children[i].toString+');', 'onmouseenter':'colorOn(this)', 'onmouseleave':'colorOff(this)'});
    var firstCircleGroupBlur = draw.circle(rBlurFirst).attr({fill:obj.children[i].color, class:'circle-blur', cx:obj.x+placeCircle(pos[i])[0], cy:obj.y+placeCircle(pos[i])[1], filter: 'url(#fBlur)'});
    var firstCircle = draw.circle(rFirst).attr({fill:'#C4C4C4', 'fill-opacity':"0.7", cx:obj.x+placeCircle(pos[i])[0], cy:obj.y+placeCircle(pos[i])[1]});
    /*create clip for images*/
    var firstCircleClip = draw.circle(rFirst).attr({fill:'#FFFFFF', cx:obj.x+placeCircle(pos[i])[0], cy:obj.y+placeCircle(pos[i])[1]});
    var firstClip = draw.clip().add(firstCircleClip);
    var firstImage = draw.image('./assets/pics/'+obj.children[i].folder+'/'+obj.children[i].imgThumbnail, rFirst, rFirst);
    firstImage.attr({class:'cirle-image', filter:'url(#fGray)', "visibility": imgVisibility});
    firstImage.move(obj.x+placeCircle(pos[i])[0]-rFirst/2, obj.y+placeCircle(pos[i])[1]-rFirst/2);
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
           default:
         }

         for (var j = 0; j < obj.children[i].children.length; j++) {
           var childX = firstLinkLine.node.x2.baseVal.value;
           var childY = firstLinkLine.node.y2.baseVal.value;

           var secondLinkGroup = draw.group().attr({class:'generated link-group'});
           var secondLinkLine = draw.line(childX, childY, childX+placeCircle(pos[i])[0]*0.75, childY+placeCircle(pos[i])[1]*0.75);
           secondLinkLine.stroke({ color: '#888888', width: 1, linecap: 'round'});
           var secondLinkCircle = draw.circle(rLink).attr({class:'link-circle pointer ' + classRotation[j] , fill:'#C4C4C4','fill-opacity':"1", cx:childX+(placeCircle(pos[i])[0]/2)*0.75, cy:childY+(placeCircle(pos[i])[1]/2)*0.75, "onclick": "addPopUp(this,"+ obj.children[i].children[j].linkToString +")"});
           secondLinkGroup.add(secondLinkLine).add(secondLinkCircle);
           secondLinkGroup.rotate(rotation[j],childX,childY);
           secondChildrenGroup.add(secondLinkGroup);
           var secondCircleGroup = draw.group().attr({class:'circle '+obj.children[i].children[j].circleClass+' generated children pointer','onclick':'toggleCircle(this); '+'appendInfo('+obj.children[i].children[j].toString+');', 'onmouseenter':'colorOn(this)', 'onmouseleave':'colorOff(this)'});
           var secondCircleGroupBlur = draw.circle(rBlurSecond).attr({fill:obj.children[i].children[j].color, cx:childX+placeCircle(pos[i])[0]*0.75, cy:childY+placeCircle(pos[i])[1]*0.75, filter:'url(#fBlur)'})
           var secondCircle = draw.circle(rSecond).attr({fill:'#C4C4C4', 'fill-opacity':"0.7", cx:childX+placeCircle(pos[i])[0]*0.75, cy:childY+placeCircle(pos[i])[1]*0.75});
           /*create clip for images*/
           var secondCircleClip = draw.circle(rSecond).attr({fill:'#FFFFFF', cx:childX+placeCircle(pos[i])[0]*0.75, cy:childY+placeCircle(pos[i])[1]*0.75});
           var secondClip = draw.clip().add(secondCircleClip);
           var secondImage = draw.image('./assets/pics/'+obj.children[i].children[j].folder+'/'+obj.children[i].children[j].imgThumbnail, rSecond, rSecond);
           secondImage.attr({class:'cirle-image', filter:'url(#fGray)', "visibility": imgVisibility});
           secondImage.move(childX+placeCircle(pos[i])[0]*0.75-rSecond/2, childY+placeCircle(pos[i])[1]*0.75-rSecond/2);
           secondImage.clipWith(secondClip);
           /*add all elements to same group*/
           secondCircleGroup.add(secondCircleGroupBlur).add(secondCircle).add(secondImage);
           secondCircleGroup.rotate(rotation[j], childX, childY);
           secondCircleGroup.rotate(0);
           secondChildrenGroup.add(secondCircleGroup);

           function test(){
             console.log(secondLinkGroup);
           }
         }
     }
  }
  wrapperGroup.add(secondChildrenGroup);
  wrapperGroup.add(firstChildrenGroup);
  wrapperGroup.add(parentGroup);

  elemsGroup.add(wrapperGroup);
  return{
    test:test
  }


}
/*
* function addRelatedCircles()
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

    // case :
    //
    //   break;
    default:

  }
}
var add = addCircle(donaldTrump, 0);
