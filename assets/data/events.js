var usa2016 = {
  name : "Élections présidentielles USA 2016",
  toString : "usa2016",
  description : "hello Donald",
  imgThumbnail: "flag.png",
  img:'trump'
}



var allEvents= [usa2016];

function addTypeEvents(){
  for (var i = 0; i < allEvents.length; i++) {
    allEvents[i].type = 1;
  }
}

addTypeEvents();
