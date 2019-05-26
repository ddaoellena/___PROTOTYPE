var titleTarget = document.getElementById('title');
var descTarget = document.getElementById('description');
var imgTarget = document.getElementById('info-img');
var relatedOneTarget = document.getElementById('related-one-div');
var relatedTwoTarget = document.getElementById('related-two-div');
var relatedThreeTarget = document.getElementById('related-three-div');
var targetDivs = [titleTarget, descTarget, imgTarget, relatedOneTarget, relatedTwoTarget, relatedThreeTarget];
var relatedMemes = [];
var relatedEvents = [];
var relatedPeople = [];
var relatedMedias = [];
var relatedElements = {};

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

function appendRelatedElements(obj, target, array, sourceArray){
  for (var i = 0; i < array.length; i++) {
    var relatedDiv = document.createElement("div");
    relatedDiv.classList.add('related-element');
    relatedDiv.classList.add('pointer');
    relatedDiv.setAttribute('onclick', 'appendInfo('+sourceArray[array[i]].toString+')');
    var relatedPDiv = document.createElement("div");
    relatedPDiv.classList.add('related-text-div');
    var relatedP = document.createElement("p");
    relatedP.classList.add('related-text');
    var imgDiv = document.createElement("div");
    imgDiv.classList.add('related-img-div');
    relatedP.innerHTML = sourceArray[array[i]].name;
    relatedDiv.append(imgDiv);
    relatedDiv.append(relatedPDiv);
    relatedPDiv.append(relatedP);
    switch (target) {
      case 1:
        relatedOneTarget.append(relatedDiv);
        break;
      case 2:
        relatedTwoTarget.append(relatedDiv);
        break;
      case 3:
        relatedThreeTarget.append(relatedDiv);
        break;
      default:
    }
    appendImg(sourceArray[array[i]], imgDiv);
  }
}

function appendInfo(obj){
  clearInfo();
  appendImg(obj, 'info-img');
  titleTarget.innerHTML = obj.name;
  $('#description').load("./assets/html/"+obj.folder+"/"+obj.description)
  /* */
  var columnOneTitle = document.createElement("h2");
  var columnTwoTitle = document.createElement("h2");
  var columnThreeTitle = document.createElement("h2");
  columnOneTitle.classList.add('related-title');
  columnTwoTitle.classList.add('related-title');
  columnThreeTitle.classList.add('related-title');
  relatedOneTarget.append(columnOneTitle);
  relatedTwoTarget.append(columnTwoTitle);
  relatedThreeTarget.append(columnThreeTitle);
  switch (obj.type) {
    case 0:
      columnOneTitle.innerHTML = "Personnalités liées";
      columnTwoTitle.innerHTML = "Événements liés";
      columnThreeTitle.innerHTML = "Médias liés";
      appendRelatedElements(obj, 1, obj.relatedPeople, allPeople);
      appendRelatedElements(obj, 2, obj.relatedEvents, allEvents);
      break;
    case 1:
      columnOneTitle.innerHTML = "Personnalités liées";
      columnTwoTitle.innerHTML = "Memes liés";
      columnThreeTitle.innerHTML = "Médias liés";
      appendRelatedElements(obj, 1, obj.relatedPeople, allPeople);
      appendRelatedElements(obj, 2, obj.relatedMemes, allMemes);
      break;
    case 2:
      columnOneTitle.innerHTML = "Memes liés";
      columnTwoTitle.innerHTML = "Événements liés";
      columnThreeTitle.innerHTML = "Médias liés";
      appendRelatedElements(obj, 1, obj.relatedMemes, allMemes);
      appendRelatedElements(obj, 2, obj.relatedEvents, allEvents);
      break;
    case 3:
      columnOneTitle.innerHTML = "Memes liés";
      columnTwoTitle.innerHTML = "Personnalités liées";
      columnThreeTitle.innerHTML = "Événements liés";
      appendRelatedElements(obj, 1, obj.relatedMemes, allMemes);
      appendRelatedElements(obj, 2, obj.relatedEvents, allEvents);
      break;
    default:

  }
}
