var fourChan = {
  name : "4chan",
  toString : "fourChan",
  id :0,
  imgThumbnail: "default.png",
  img:'default.png',
  relatedEvents: [],
  relatedPeople: []
}

var allMedias = [fourChan];

function addTypeMedias(){
  for (var i = 0; i < allMedias.length; i++) {
    allMedias[i].type = 3;
    allMedias[i].folder = "medias";
    allMedias[i].description = allMedias[i].toString + ".html"
  }
}
addTypeMedias();
