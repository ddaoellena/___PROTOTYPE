var trump = {
  name : "Donald Trump",
  toString : "trump",
  id:0,
  description : "hello Donald",
  imgThumbnail: "trump-small.png",
  img:'trump',
  relatedMemes : [0, 1],
  relatedLinks : [1],
  x: 200,
  y: 200
}

var clinton = {
  name : "Hillary Cliton",
  toString : "clinton",
  id:1,
  description : "hello I'm Hillary",
  imgThumbnail: "clinton-small.png",
  img:'trump',
  relatedMemes : [0],
  x: 400,
  y: 200
}



var allPeople= [trump, clinton];

function addTypePeople(){
  for (var i = 0; i < allPeople.length; i++) {
    allPeople[i].type = 2;
  }
}

addTypePeople();
