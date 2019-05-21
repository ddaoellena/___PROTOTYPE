var usa2016 = {
  name : "Élections présidentielles USA 2016",
  toString : "usa2016",
  description : "usa2016.html",
  imgThumbnail: "flag.png",
  img:'trump',
  relatedPeople : [0, 1],
  relatedMemes : [0, 1],
  children: [
    {type: 0,
    id:0,
    link : 1,
    children :[
      {type:3,
      id:0,
      link: 2
        }
      ]
    },
    {type: 0,
    link : 1
    }],
  x: 200,
  y: 200
}

var allEvents= [usa2016];

function addTypeEvents(){
  for (var i = 0; i < allEvents.length; i++) {
    allEvents[i].type = 1;
    allEvents[i].folder = "events";
    allEvents[i].description = allEvents[i].toString + ".html"
  }
}
addTypeEvents();
