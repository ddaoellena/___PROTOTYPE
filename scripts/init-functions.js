/* init-functions.js contient toutes les fonctions
* servant à relier les données entre elles
*/
var allTables = [allMemes, allEvents, allPeople, allMedias];

function addProperties(table){
  var tableType = 0,
      tableFolder = "";
  switch (table) {
    case allMemes:
      tableType = 0,
      tableFolder = "memes";
      break;
    case allEvents:
      tableType = 1,
      tableFolder = "events";
      break;
    case allPeople:
      tableType = 2,
      tableFolder = "people";
      break;
    case allMedias:
      tableType = 3,
      tableFolder = "medias";
      break;
    default:
  }
  for (var i = 0; i < table.length; i++) {
    table[i].type = tableType;
    table[i].folder = tableFolder;
    table[i].description = table[i].toString + ".html";
    table[i].imgThumbnail = table[i].id.toString() + '-' + table[i].toString + ".png";
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
          break;
        case 1:
          objChildren[i].toString = allEvents[objChildren[i].id].toString;
          objChildren[i].name = allEvents[objChildren[i].id].name;
          objChildren[i].imgThumbnail = allEvents[objChildren[i].id].imgThumbnail;
          break;
        case 2:
          objChildren[i].toString = allPeople[objChildren[i].id].toString;
          objChildren[i].name = allPeople[objChildren[i].id].name;
          objChildren[i].imgThumbnail = allPeople[objChildren[i].id].imgThumbnail;
          break;
        case 3:
          objChildren[i].toString = allMedias[objChildren[i].id].toString;
          objChildren[i].name = allMedias[objChildren[i].id].name;
          objChildren[i].imgThumbnail = allMedias[objChildren[i].id].imgThumbnail;
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
              break;
            case 1:
              objChildren[i].children[j].toString = allEvents[objChildren[i].children[j].id].toString;
              objChildren[i].children[j].name = allEvents[objChildren[i].children[j].id].name;
              objChildren[i].children[j].imgThumbnail = allEvents[objChildren[i].children[j].id].imgThumbnail;
              break;
            case 2:
              objChildren[i].children[j].toString = allPeople[objChildren[i].children[j].id].toString;
              objChildren[i].children[j].name = allPeople[objChildren[i].children[j].id].name;
              objChildren[i].children[j].imgThumbnail = allPeople[objChildren[i].children[j].id].imgThumbnail;
              break;
            case 3:
            objChildren[i].children[j].toString = allMedias[objChildren[i].children[j].id].toString;
            objChildren[i].children[j].name = allMedias[objChildren[i].children[j].id].name;
            objChildren[i].children[j].imgThumbnail = allMedias[objChildren[i].children[j].id].imgThumbnail;
              break;
            default:
          }
          objChildren[i].children[j].linkToString = allLinks[objChildren[i].children[j].link].toString;
        }
      }
    }
  }
}

function addChildrenAllObjects(table){
  for (var i = 0; i < table.length; i++) {
    addChildrenToObject(table[i]);
  }
}
addChildrenAllObjects(allMemes);
addChildrenAllObjects(allPeople);
addChildrenAllObjects(allEvents);
addChildrenAllObjects(allMedias);

for (var i = 0; i < allTables.length; i++) {
  console.log(allTables[i]);
    // addChildrenAllObjects(allTables[i]);
}
