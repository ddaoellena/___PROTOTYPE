var titleTarget = document.getElementById('info-title');
var contentTarget = document.getElementById('content-div');
var categoryTarget =  document.getElementById('info-category');
var imgTarget = document.getElementById('info-img');
var targetDivs = [titleTarget, categoryTarget, imgTarget, contentTarget];

// event-plus-info
var titlePlusTarget = document.getElementById('plus-title');
var categoryDivTarget = document.getElementById('plus-category-div');
var participantsDivTarget = document.getElementById('plus-participants-div');
var contentDivTarget = document.getElementById('plus-info-content');

// var participantsPlusTarget = document.getElementById('plus-participants');
var targetPlusDivs = [titlePlusTarget, categoryDivTarget, participantsDivTarget, contentDivTarget];

function clearInfo(){
  for (var i = 0; i < targetDivs.length; i++) {
    targetDivs[i].innerHTML = '';
  }
  $(".tag-container").remove();
  $(".add-tag-div").remove();
}

function clearPlusInfo(){
  for (var i = 0; i < targetPlusDivs.length; i++) {
    targetPlusDivs[i].innerHTML = '';
  }
  $(".tag-container").remove();
  $('#add-focus-div').remove();
}

function appendImg(obj, target, scale){
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

  var imgPx = imgTarget.clientWidth*scale;
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
/* focus BUTTON*/
var focusDiv = document.createElement("div");
focusDiv.setAttribute('class', 'add-focus-div');
focusDiv.setAttribute('id', 'add-focus-div');
var focusCircle = document.createElement("div");
focusCircle.setAttribute('class', 'add-focus-circle');
var addFocusText = document.createElement("p");
addFocusText.setAttribute('class', 'add-focus-text');
addFocusText.innerHTML = "Focus sur cet élément";
focusDiv.appendChild(focusCircle);
focusDiv.appendChild(addFocusText);

function appendInfo(obj){
  clearInfo();
  appendImg(obj, 'info-img', 1);
  titleTarget.innerHTML = obj.name;
  if (obj.type == 0) {
    categoryTarget.innerHTML = "Meme";
  } else if (obj.type == 1) {
    categoryTarget.innerHTML = "Événement";
  }
  else if (obj.type == 2) {
    categoryTarget.innerHTML = "Personnalité";
  }
  else if (obj.type == 3) {
    categoryTarget.innerHTML = "Site";
  }
  focusDiv.setAttribute("onclick", "addFocus("+obj.toString+")");
  $('#info-category').after(focusDiv);
  if (typeof obj.tag !== "undefined") {
    addTagTypo(obj, 0);
  }
  $('#content-div').load("./assets/html/"+obj.folder+"/"+obj.html);
}
/* Plus div */
function appendPlusInfo(obj){
  clearPlusInfo();
  titlePlusTarget.innerHTML = obj.name;
  var classType = "";
  var iconDiv = document.createElement("div");
  var categoryP = document.createElement("p");
  categoryP.setAttribute('class', 'plus-category');
  if (obj.type == 0) {
    classType = "icon-meme";
    categoryP.innerHTML = "Meme";
  } else if (obj.type == 1) {
    classType = "icon-event";
    categoryP.innerHTML = "Événement";
  }
  else if (obj.type == 2) {
    classType = "icon-people";
    categoryP.innerHTML = "Personnalité";
  }
  else if (obj.type == 3) {
    classType = "icon-media";
    categoryP.innerHTML = "Site";
  }
  iconDiv.setAttribute('class', 'icon-div ' + classType);
  categoryDivTarget.appendChild(iconDiv);
  categoryDivTarget.appendChild(categoryP);

  focusDiv.setAttribute("onclick", "addFocus("+obj.toString+")");
  $('#plus-category-div').after(focusDiv);
  if (typeof obj.tag !== "undefined") {
    addTagTypo(obj, 1);
  }
  $(".circle-span").after("&nbsp;");
  $('#plus-info-content').load("./assets/html/"+obj.folder+"/"+obj.htmlPlus);
}


function appendLinkInfo(link, detail){
  clearPlusInfo();
  titlePlusTarget.innerHTML = link.name;
  var iconDiv = document.createElement("div");
  iconDiv.setAttribute('class', 'icon-link-div');
  var firstCircleDiv = document.createElement("div");
  firstCircleDiv.setAttribute('class', 'circle-icon-link first-circle-link');
  var linkDiv = document.createElement("div");
  linkDiv.setAttribute('class', 'link-div');
  var secondCircleDiv = document.createElement("div");
  secondCircleDiv.setAttribute('class', 'circle-icon-link second-circle-link');

  var categoryP = document.createElement("p");
  categoryP.setAttribute('class', 'plus-category');

  if (link.alignment == "neutral") {
    categoryP.innerHTML = "Lien neutre";
    linkDiv.style.backgroundColor = "#FFFFFF";
  } else if (link.alignment == "good") {
    categoryP.innerHTML = "Lien d'intérêt";
    linkDiv.style.backgroundColor = "#00FF55 ";
  } else if (link.alignment == "bad") {
    categoryP.innerHTML = "Lien de conflit";
    linkDiv.style.backgroundColor = "#FF3333";
  }

  iconDiv.appendChild(firstCircleDiv);
  iconDiv.appendChild(linkDiv);
  iconDiv.appendChild(secondCircleDiv);
  categoryDivTarget.appendChild(iconDiv);
  categoryDivTarget.appendChild(categoryP);
  /* append participants */
  var detailParticipants = [detail.first, detail.second];
  var participantClass = ["first-participant-div", "second-participant-div"];

  var participantsLabel = document.createElement("p");
  participantsLabel.setAttribute('class', 'participant-label');
  participantsLabel.innerHTML = "Acteurs&thinsp;:";
  participantsDivTarget.appendChild(participantsLabel);
  for (var i = 0; i < detailParticipants.length; i++) {
    var participantDiv = document.createElement("div");
    participantDiv.setAttribute('class', 'participant-div ' + participantClass[i]);
    var iconDiv = document.createElement("div");
    iconDiv.setAttribute('class', 'icon-participant-div ' +  detailParticipants[i].class );
    var participantText = document.createElement("p");
    participantText.setAttribute('class', 'icon-participant-text');
    participantText.innerHTML = detailParticipants[i].name;
    participantDiv.appendChild(iconDiv);
    participantDiv.appendChild(participantText);
    participantsDivTarget.appendChild(participantDiv);
  }
  $('#plus-info-content').load('./assets/html/link-details/'+detail.html);
}

function addMaxHeightScroll(){
  var plusInfoHeight = document.getElementById('plus-info').getBoundingClientRect().height;
  var plusHeaderHeight = document.getElementById('plus-header').getBoundingClientRect().height;
  var plusParticipantsHeight = document.getElementById('plus-participants-div').getBoundingClientRect().height;
  var plusContentText = document.getElementById('plus-content-text').getBoundingClientRect().height;
  var sourceLabel = document.getElementById('source-label').getBoundingClientRect().height;

  var plusInfoSource = document.getElementById('plus-info-source');
  var plusInfoSourceWidth = document.getElementById('plus-info-source').getBoundingClientRect().width;

  var maxHeight = (plusInfoHeight-(plusHeaderHeight+plusParticipantsHeight+plusContentText+sourceLabel+50))*0.7;
  plusInfoSource.setAttribute('style', 'max-height:'+maxHeight+'px;');
}

function addTagTypo(obj, a){
  var tagContainerDiv = document.createElement("div");
  var tagContainer = document.createElement("div");
  var tagColor = document.createElement("div");
  tagColor.setAttribute("class", "tag-color");
  tagColor.style.backgroundColor = obj.color;
  var tagP = document.createElement("p");
  tagP.innerHTML = obj.tag;
  tagContainer.appendChild(tagColor);
  tagContainer.appendChild(tagP);
  var addFilterDiv = document.createElement("div");
  addFilterDiv.setAttribute("class", "add-tag-div");
  var addFilterBtn = document.createElement("div");
  addFilterBtn.setAttribute("class", "add-tag-btn");
  addFilterDiv.appendChild(addFilterBtn);

  switch (a) {
    case 0:
      tagContainerDiv.setAttribute("class", "tag-container-div");
      tagContainerDiv.setAttribute("id", "tag-container-div");
      tagContainer.setAttribute("class", "tag-container info");
      addFilterDiv.setAttribute("onclick", "addTagFilter("+obj.toString+")");
      tagP.setAttribute("class", "tag-label");
      tagContainerDiv.appendChild(tagContainer)
      tagContainerDiv.appendChild(addFilterDiv);
      $('#info-category').after(tagContainerDiv);
      break;
    case 1:
      tagContainer.setAttribute("class", "tag-container plus");
      tagContainer.setAttribute("id", "tag-container-plus");
      tagP.setAttribute("class", "tag-label");
      $('#plus-header').after(tagContainer);
      break;
    case 2:
      tagContainer.setAttribute("class", "tag-container tag-filter-div");
      tagContainer.setAttribute("id", "tag-container-filter");
      tagP.setAttribute("class", "tag-label tag-label-filter");
      $('#tag-filter-text').after(tagContainer);
    break;
    default:
  }
}
