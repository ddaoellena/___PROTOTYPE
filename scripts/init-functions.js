function addRelatedEvents(obj){
  for (var i = 0; i < obj.relatedEvents.length; i++) {
    obj.related.push(allEvents[obj.relatedEvents[i]]);
  }
}

function addRelatedPeople(obj){
  for (var i = 0; i < obj.relatedPeople.length; i++) {
    obj.related.push(allPeople[obj.relatedPeople[i]]);
  }
}

function addRelatedMemes(obj){
  for (var i = 0; i < obj.relatedMemes.length; i++) {
    obj.related.push(allMemes[obj.relatedMemes[i]]);
  }
}

function addRelatedProperty(obj){
  obj.related = [];
  switch (obj.type) {
    case 1:

      break;
    case 2:
      for (var i = 0; i < obj.relatedMemes.length; i++) {
        obj.related.push(allMemes[obj.relatedMemes[i]]);
      }
      break;
    default:
  }
  console.log(obj);
};
