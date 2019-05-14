var pepe = {
  name : "Pepe the frog",
  toString : "pepe",
  id :0,
  description : "hello I'm Pepe",
  imgThumbnail: "default.png",
  img:'default.png',
  relatedEvents: [],
  relatedPeople: []
}

var godEmperor = {
  name : "God Emperor Trump",
  id : 1,
  toString : "godEmperor",
  description : "hello I'm Pepe",
  imgThumbnail: "god-emperor.png",
  img:'god-emperor.png',
  relatedEvents: [],
  relatedPeople: []
}

var yangGang = {
  name : "Yang Gang",
  toString : "yangGang",
  id :2,
  description : "hello I'm YangGang",
  imgThumbnail: "god-emperor.png",
  img:'yang-gang.png',
  relatedEvents: [],
  relatedPeople: []
}

var allMemes= [pepe, godEmperor, yangGang];

function addTypeMemes(){
  for (var i = 0; i < allMemes.length; i++) {
    allMemes[i].type = 0;
  }
}
addTypeMemes();
