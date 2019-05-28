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
      color = '#60F5FF';
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
    table[i].description = table[i].toString + ".html";
    table[i].color = color;
    table[i].circleClass = circleClass;
    if (table[i].id.toString().length == 1) {
      table[i].imgThumbnail = "0" + table[i].id.toString() + '-' + table[i].toString + ".png";
    }
    else {
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
addTypeToLinks();
function addChildrenAllObjects(table){
  for (var i = 0; i < table.length; i++) {
    addChildrenToObject(table[i]);
  }
}
addChildrenAllObjects(allMemes);
addChildrenAllObjects(allPeople);
addChildrenAllObjects(allEvents);
addChildrenAllObjects(allMedias);

// for (var i = 0; i < allTables.length; i++) {
//   console.log(allTables[i]);
//     // addChildrenAllObjects(allTables[i]);
// }
