/* init-functions.js contient toutes les fonctions
* servant à relier les données entre elles
*/
var allTables = [allMemes, allEvents, allPeople, allMedias];

function addProperties(table){
  var tableType = 0,
      tableFolder = "",
      color = "",
      circleClass="";
  switch (table) {
    case allMemes:
      tableType = 0,
      tableFolder = "0-memes";
      color = '#FFFFFF';
      circleClass = 'meme-circle';
      break;
    case allEvents:
      tableType = 1,
      tableFolder = "1-events";
      color = '#83E1FF';
      circleClass = 'event-circle';
      break;
    case allPeople:
      tableType = 2,
      tableFolder = "2-people";
      color = '#FF5CC8';
      circleClass = 'people-circle';
      break;
    case allMedias:
      tableType = 3,
      tableFolder = "3-medias";
      color = '#FFB054';
      circleClass = 'media-circle';
      break;
    default:
  }
  for (var i = 0; i < table.length; i++) {
    table[i].type = tableType;
    table[i].folder = tableFolder;
    table[i].color = color;
    table[i].circleClass = circleClass;
    if (table[i].id.toString().length == 1) {
      table[i].html = "0" + table[i].id.toString() + '-' + table[i].toString + ".html";
      table[i].htmlPlus = "0" + table[i].id.toString() + '-' + table[i].toString + "Plus.html";
      table[i].imgThumbnail = "0" + table[i].id.toString() + '-' + table[i].toString + ".png";
    }
    else {
      table[i].html =  table[i].id.toString() + '-' + table[i].toString + ".html";
      table[i].htmlPlus =  table[i].id.toString() + '-' + table[i].toString + "Plus.html";
      table[i].imgThumbnail = table[i].id.toString() + '-' + table[i].toString + ".png";
    }
  }
}
/*
* appeler la fonction addProperties pour tous les tableaux
*/
for (var i = 0; i < allTables.length; i++) {
  addProperties(allTables[i]);
}

/* function addChildrenToObject
* ajoute les propriétés aux enfants de chaque élément
*/
function addChildrenToObject(obj){
  var objChildren = obj.children;
  if (typeof objChildren !== 'undefined') {
    for (var i = 0; i < objChildren.length; i++) {
      switch (objChildren[i].type) {
        case 0:
          objChildren[i].toString = allMemes[objChildren[i].id].toString;
          objChildren[i].name = allMemes[objChildren[i].id].name;
          objChildren[i].imgThumbnail = allMemes[objChildren[i].id].imgThumbnail;
          objChildren[i].folder = allMemes[objChildren[i].id].folder;
          objChildren[i].color = allMemes[objChildren[i].id].color;
          objChildren[i].circleClass = allMemes[objChildren[i].id].circleClass;
          break;
        case 1:
          objChildren[i].toString = allEvents[objChildren[i].id].toString;
          objChildren[i].name = allEvents[objChildren[i].id].name;
          objChildren[i].imgThumbnail = allEvents[objChildren[i].id].imgThumbnail;
          objChildren[i].folder = allEvents[objChildren[i].id].folder;
          objChildren[i].color = allEvents[objChildren[i].id].color;
          objChildren[i].circleClass = allEvents[objChildren[i].id].circleClass;
          break;
        case 2:
          objChildren[i].toString = allPeople[objChildren[i].id].toString;
          objChildren[i].name = allPeople[objChildren[i].id].name;
          objChildren[i].imgThumbnail = allPeople[objChildren[i].id].imgThumbnail;
          objChildren[i].folder = allPeople[objChildren[i].id].folder;
          objChildren[i].color = allPeople[objChildren[i].id].color;
          objChildren[i].circleClass = allPeople[objChildren[i].id].circleClass;
          break;
        case 3:
          objChildren[i].toString = allMedias[objChildren[i].id].toString;
          objChildren[i].name = allMedias[objChildren[i].id].name;
          objChildren[i].imgThumbnail = allMedias[objChildren[i].id].imgThumbnail;
          objChildren[i].folder = allMedias[objChildren[i].id].folder;
          objChildren[i].color = allMedias[objChildren[i].id].color;
          objChildren[i].circleClass = allMedias[objChildren[i].id].circleClass;
          break;
        default:
      }

      objChildren[i].linkToString = allLinks[objChildren[i].link].toString;
      objChildren[i].linkColor = allLinks[objChildren[i].link].color;
      objChildren[i].linkClass = allLinks[objChildren[i].link].linkClass;

      if (typeof objChildren[i].linkDetail !== 'undefined') {
        objChildren[i].linkDetailToString = linkDetails[objChildren[i].linkDetail].toString;
      }

      if (typeof objChildren[i].children !== 'undefined') {
        for (var j = 0; j < objChildren[i].children.length; j++) {
          switch (objChildren[i].children[j].type) {
            case 0:
              objChildren[i].children[j].toString = allMemes[objChildren[i].children[j].id].toString;
              objChildren[i].children[j].name = allMemes[objChildren[i].children[j].id].name;
              objChildren[i].children[j].imgThumbnail = allMemes[objChildren[i].children[j].id].imgThumbnail;
              objChildren[i].children[j].folder = allMemes[objChildren[i].children[j].id].folder;
              objChildren[i].children[j].color = allMemes[objChildren[i].children[j].id].color;
              objChildren[i].children[j].circleClass = allMemes[objChildren[i].children[j].id].circleClass;
              break;
            case 1:
              objChildren[i].children[j].toString = allEvents[objChildren[i].children[j].id].toString;
              objChildren[i].children[j].name = allEvents[objChildren[i].children[j].id].name;
              objChildren[i].children[j].imgThumbnail = allEvents[objChildren[i].children[j].id].imgThumbnail;
              objChildren[i].children[j].folder = allEvents[objChildren[i].children[j].id].folder;
              objChildren[i].children[j].color = allEvents[objChildren[i].children[j].id].color;
              objChildren[i].children[j].circleClass = allEvents[objChildren[i].children[j].id].circleClass;
              break;
            case 2:
              objChildren[i].children[j].toString = allPeople[objChildren[i].children[j].id].toString;
              objChildren[i].children[j].name = allPeople[objChildren[i].children[j].id].name;
              objChildren[i].children[j].imgThumbnail = allPeople[objChildren[i].children[j].id].imgThumbnail;
              objChildren[i].children[j].folder = allPeople[objChildren[i].children[j].id].folder;
              objChildren[i].children[j].color = allPeople[objChildren[i].children[j].id].color;
              objChildren[i].children[j].circleClass = allPeople[objChildren[i].children[j].id].circleClass;
              break;
            case 3:
            objChildren[i].children[j].toString = allMedias[objChildren[i].children[j].id].toString;
            objChildren[i].children[j].name = allMedias[objChildren[i].children[j].id].name;
            objChildren[i].children[j].imgThumbnail = allMedias[objChildren[i].children[j].id].imgThumbnail;
            objChildren[i].children[j].folder = allMedias[objChildren[i].children[j].id].folder;
            objChildren[i].children[j].color = allMedias[objChildren[i].children[j].id].color;
            objChildren[i].children[j].circleClass = allMedias[objChildren[i].children[j].id].circleClass;
              break;
            default:
          }
          objChildren[i].children[j].linkToString = allLinks[objChildren[i].children[j].link].toString;
          objChildren[i].children[j].linkColor = allLinks[objChildren[i].children[j].link].color;
          objChildren[i].children[j].linkClass = allLinks[objChildren[i].children[j].link].linkClass;
          if (typeof objChildren[i].children[j].linkDetail !== 'undefined') {
            objChildren[i].children[j].linkDetailToString = linkDetails[objChildren[i].children[j].linkDetail].toString;
          }
        }
      }
    }
  }
}
function addTypeToLinks(){
  for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].firstColor = allLinkTypes[allLinks[i].type].firstColor;
    allLinks[i].secondColor = allLinkTypes[allLinks[i].type].secondColor;
  }
}
function addColorToLinks(){
  for (var i = 0; i < allLinks.length; i++) {
    switch (allLinks[i].alignment) {
      case "good":
        allLinks[i].color = "#85FFAA";
        allLinks[i].linkClass = "good-link";
        break;
      case "bad":
        allLinks[i].color = "#FF6969";
        allLinks[i].linkClass = "bad-link";
        break;
      case "neutral":
        allLinks[i].color = "#FFFFFF";
        allLinks[i].linkClass = "neutral-link";
        break;
      default:
    }
  }
}
addTypeToLinks();
addColorToLinks();
function addChildrenAllObjects(table){
  for (var i = 0; i < table.length; i++) {
    addChildrenToObject(table[i]);
  }
}
addChildrenAllObjects(allMemes);
addChildrenAllObjects(allPeople);
addChildrenAllObjects(allEvents);
addChildrenAllObjects(allMedias);

function addPropertiesToLinkExamples(){
  for (var i = 0; i < linkDetails.length; i++) {
    var elements  = [linkDetails[i].first, linkDetails[i].second];
    if (linkDetails[i].id < 10) {
      linkDetails[i].html = "0" + linkDetails[i].id + "-"+ linkDetails[i].toString + ".html";
    } else {
      linkDetails[i].html = linkDetails[i].id + "-"+ linkDetails[i].toString + ".html";
    }
    for (var j = 0; j < elements.length; j++) {
      if (elements[j].type == 0) {
        elements[j].class = "meme-icon-participant";
      } else if (elements[j].type == 1) {
        elements[j].class = "event-icon-participant";
      } else if (elements[j].type == 2) {
        elements[j].class = "people-icon-participant";
      } else if (elements[j].type == 3) {
        elements[j].class = "media-icon-participant";
      }
    }
  }
}
addPropertiesToLinkExamples();

/* ----------------- FILTER D3 ----------------- */
var mainNodes;
function getMainNodes(table){
  mainNodes = "";
  var result = table.nodes.filter(obj => {
    return obj.mainNode == true;
  })
  mainNodes = result;
};

function addRelatedToD3(table){
  getMainNodes(table);
  for (var i = 0; i < mainNodes.length; i++) {
    mainNodes[i].relatedString = [];
    if (typeof mainNodes[i].related.memes !== "undefined") {
      var relatedMemes = mainNodes[i].related.memes;
      for (var j = 0; j < relatedMemes.length; j++) {
          var relatedMemesString = allMemes[relatedMemes[j]].toString;
          mainNodes[i].relatedString.push(relatedMemesString);
      }
    }
    if (typeof mainNodes[i].related.events !== "undefined") {
      var relatedEvents = mainNodes[i].related.events;
      for (var j = 0; j < relatedEvents.length; j++) {
          var relatedEventsString = allEvents[relatedEvents[j]].toString;
          mainNodes[i].relatedString.push(relatedEventsString);
      }
      if (typeof mainNodes[i].related.people !== "undefined") {
        var relatedPeople = mainNodes[i].related.people;
        for (var j = 0; j < relatedPeople.length; j++) {
            var relatedPeopleString = allPeople[relatedPeople[j]].toString;
            mainNodes[i].relatedString.push(relatedPeopleString);
        }
      }
      if (typeof mainNodes[i].related.medias !== "undefined") {
        var relatedMedias= mainNodes[i].related.medias;
        for (var j = 0; j < relatedMedias.length; j++) {
            var relatedMediasString = allMedias[relatedMedias[j]].toString;
            mainNodes[i].relatedString.push(relatedMediasString);
        }
      }
      // console.log(mainNodes[i]);
    }
  }
};

addRelatedToD3(memesData);
addRelatedToD3(peopleData);
addRelatedToD3(mediasData);
