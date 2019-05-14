var usa2016 = {
  name : "Élections présidentielles USA 2016",
  toString : "usa2016",
  description : "hello Donald",
  imgThumbnail: "flag.png",
  img:'trump',
  relatedPeople : [0, 1],
  relatedMemes : [0, 1],
  x: 200,
  y: 200
}

var allEvents= [usa2016];

function addTypeEvents(){
  for (var i = 0; i < allEvents.length; i++) {
    allEvents[i].type = 1;
  }
}
function orderRelated(){
  for (var i = 0; i < allEvents.length; i++) {
    allEvents[i].relatedOrder = [];
    allEvents[i].relatedOrder.push(allEvents[i].relatedPeople, allEvents[i].relatedMemes);
  }
}
addTypeEvents();
orderRelated();
