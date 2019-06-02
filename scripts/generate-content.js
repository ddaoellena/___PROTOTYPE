var titleTarget = document.getElementById('title');
var descTarget = document.getElementById('description');
var imgTarget = document.getElementById('info-img');
var targetDivs = [titleTarget, descTarget, imgTarget];


function clearInfo(){
  for (var i = 0; i < targetDivs.length; i++) {
    targetDivs[i].innerHTML = '';
  }
}

function appendImg(obj, target){
  switch (obj.type) {
    case 0:
      var circleColor = '#FFFFFF';
      var circleClass = 'meme-circle';
      var folderType ='0-memes';
      break;
    case 1:
      var circleColor = '#60F5FF';
      var circleClass = 'event-circle';
      var folderType ='1-events';
      break;
    case 2:
      var circleColor = '#FF5CC8';
      var circleClass = 'people-circle';
      var folderType ='2-people';
      break;
    case 3:
      var circleColor = '#FFB054';
      var circleClass = 'media-circle';
      var folderType ='3-medias';
      break;
    default:
  }

  var imgPx = imgTarget.clientWidth;
  var draw = SVG(target).size(imgPx, imgPx);
  var circleGroup = draw.group().attr({class:'circle-info-img'});
  var circleClip = draw.circle(imgPx-2).attr({fill:'#FFFFFF', cx:imgPx/2, cy:imgPx/2});
  var circleBlur = draw.circle(imgPx-2).attr({fill:circleColor, cx:imgPx/2, cy:imgPx/2})
  var circle = draw.circle(imgPx-2).attr({fill:'#C4C4C4', 'fill-opacity':"0.7", stroke: circleColor, 'stroke-width':2, 'stroke-alignment':'outside',cx:imgPx/2, cy:imgPx/2});
  var clip = draw.clip().add(circleClip);
  var image = draw.image('./assets/pics/'+folderType+'/'+obj.imgThumbnail, imgPx, imgPx);
  image.clipWith(clip);
  circleGroup.add(circleBlur).add(circle).add(image);
}

function addClassTitle(obj){
  var titleClass = '';
  switch (obj.type) {
    case 0:
      titleClass = 'meme-title';
      break;
    case 1:
      titleClass = 'event-title';
      break;
    case 2:
      titleClass = 'people-title';
      break;
    case 3:
      titleClass = 'media-title';
      break;
    default:
  }
  if (titleTarget.classList.length > 1) {
    titleTarget.classList.remove(titleTarget.classList[1]);
  }
  titleTarget.classList.toggle(titleClass);
}

function appendInfo(obj){
  clearInfo();
  appendImg(obj, 'info-img');
  addClassTitle(obj);
  titleTarget.innerHTML = obj.name;
  // $('#description').load("./assets/html/"+obj.folder+"/"+obj.description)  
}
