var pepe = {
  name : "Pepe",
  idea :0,
  toString : "pepe",
  description : "hello I'm Pepe",
  imgThumbnail: "default.png",
  img:'default.png'
}

var godEmperor = {
  name : "God Emperor Trump",
  toString : "godEmperor",
  description : "hello I'm Pepe",
  imgThumbnail: "god-emperor.png",
  img:'god-emperor.png'
}

var allMemes= [pepe, godEmperor];

function addTypeMemes(){
  for (var i = 0; i < allMemes.length; i++) {
    allMemes[i].type = 0;
  }
}

addTypeMemes();
