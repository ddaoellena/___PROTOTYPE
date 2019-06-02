/*
* Meme to ***
*/
var memeEvolueMeme = {
  name :"Évolution",
  toString : "memeEvolueMeme",
  id:0,
  type: 0,
  description : "Le meme évolue d'un meme.",
  alignment: "neutral",
  imgThumbnail: ""
}
var memeInfluenceMeme = {
  name :"Influence",
  toString : "memeInfluenceMeme",
  id:1,
  type: 0,
  description : "Le meme influence un meme",
  alignment:"neutral",
  imgThumbnail: ""
}
var memeSabotageEvent = {
  name :"Sabotage",
  toString : "memeSabotageEvent",
  id:2,
  type: 1,
  description : "Le meme sabote l'événement.",
  alignment:"bad",
  imgThumbnail: ""
}
var memeSoutienPeople = {
  name :"Soutien",
  toString : "memeSoutienPeople",
  id:3,
  type: 2,
  description : "Le meme soutient la personnalité.",
  alignment:"good",
  imgThumbnail: ""
}
var memeSabotagePeople = {
  name :"Sabotage",
  toString : "memeSabotagePeople",
  id:4,
  type: 2,
  description : "Le meme sabote la personnalité.",
  alignment:"bad",
  imgThumbnail: ""
}
var memeVehiculePeople = {
  name :"Véhicule",
  toString : "memeVehiculePeople",
  id:5,
  type: 2,
  description : "Le meme véhicule les idées de la personnalité.",
  alignment:"good",
  imgThumbnail: ""
}
var memeAttaqueMedia = {
  name :"Attaque",
  toString : "memeAttaqueMedia",
  id:6,
  type: 3,
  description : "Le meme attaque le média.",
  alignment:"bad",
  imgThumbnail: ""
}
/* ----------------------- */
/*
* Events to ***
*/
var eventCreeMeme = {
  name :"Création",
  toString : "eventCreeMeme",
  id:7,
  type: 4,
  description : "L'événement crée le meme.",
  alignment:"good",
  imgThumbnail: ""
}
var eventRelaieMeme = {
  name :"Relai",
  toString : "eventRelaieMeme",
  id:8,
  type: 4,
  description : "L'événement relaie le meme.",
  alignment:"good",
  imgThumbnail: ""
}
var eventReactionEvent = {
  name :"Réaction",
  toString : "eventReactionEvent",
  id:9,
  type: 5,
  description : "L'évenement est en réaction par rapport à un autre évenement.",
  alignment:"bad",
  imgThumbnail: ""
}
var eventAttaquePeople = {
  name :"Attaque",
  toString : "eventAttaquePeople",
  id:10,
  type: 6,
  description : "L'évenement s'attaque à une personnalité.",
  alignment:"bad",
  imgThumbnail: ""
}

/* ----------------------- */
/*
* People to ***
*/
var peopleReappropriationMeme = {
  name :"Réappropriation",
  toString : "peopleReappropriationMeme",
  id:11,
  type: 8,
  description : "La personnalité s'est réapproprié le meme.",
  alignment:"good",
  imgThumbnail: ""
}
var peopleAnalyseMeme = {
  name :"Analyse",
  toString : "analyseMeme",
  id:12,
  type: 8,
  description : "La personnalité a documenté et analysé le meme.",
  alignment:"good",
  imgThumbnail: ""
}
var peopleOrganiseEvent = {
  name :"Organisation",
  toString : "peopleOrganiseEvent",
  id:13,
  type: 9,
  description : "La personnalité a organisé l'événement.",
  alignment:"good",
  imgThumbnail: ""
}
var peopleDocumentationEvent = {
  name :"Documentation",
  toString : "peopleDocumentationEvent",
  id:14,
  type: 9,
  description : "La personnalité a documenté l'événement.",
  alignment:"good",
  imgThumbnail: ""
}
var peopleParticipeEvent = {
  name :"Participation",
  toString : "peopleParticipeEvent",
  id:15,
  type: 9,
  description : "La personnalité a participé à l'événement.",
  alignment:"neutral",
  imgThumbnail: ""
}
var peopleAttaquePeople = {
  name :"Attaque",
  toString : "peopleAttaquePeople",
  id:16,
  type: 10,
  description : "La personnalité a attaqué une autre personnalité.",
  alignment:"bad",
  imgThumbnail: ""
}
/* ----------------------- */
/*
* Media to ***
*/
var mediaCreeMeme = {
  name :"Création",
  toString : "mediaCreeMeme",
  id:17,
  type: 12,
  description : "Le média est à l'origine du meme.",
  alignment:"good",
  imgThumbnail: ""
}
var mediaVehiculeMeme = {
  name :"Véhicule",
  toString : "mediaVehiculeMeme",
  id:18,
  type: 12,
  description : "Le média véhicule le meme.",
  alignment:"good",
  imgThumbnail: ""
}
var mediaVehiculeEvent = {
  name :"Sabote",
  toString : "mediaVehiculeEvent",
  id:19,
  type: 13,
  description : "Le site véhicule l'événement.",
  alignment:"good",
  imgThumbnail: ""
}
var mediaSaboteEvent = {
  name :"Sabote",
  toString : "mediaSaboteEvent",
  id:20,
  type: 13,
  description : "Le site sabote l'événement.",
  alignment:"bad",
  imgThumbnail: ""
}
var mediaSoutienPeople = {
  name :"Soutien",
  toString : "mediaSoutienPeople",
  id:21,
  type: 14,
  description : "Le site soutient la personnalité.",
  alignment:"good",
  imgThumbnail: ""
}
var mediaSabotePeople = {
  name :"Sabote",
  toString : "mediaSabotePeople",
  id:22,
  type: 14,
  description : "Le site sabote la personnalité.",
  alignment:"bad",
  imgThumbnail: ""
}
var mediaAttaqueMedia = {
  name :"Attaque",
  toString : "mediaAttaqueMedia",
  id:23,
  type: 15,
  description : "Le site attaque un autre site.",
  alignment:"bad",
  imgThumbnail: ""
}

/* ----------------------- */
var allLinks = [
  memeEvolueMeme, memeInfluenceMeme, memeSabotageEvent, memeSoutienPeople, memeSabotagePeople, memeVehiculePeople, memeAttaqueMedia,
  /*   -----------------------   */
  eventCreeMeme, eventRelaieMeme, eventReactionEvent, eventAttaquePeople,
  /*   -----------------------   */
  peopleReappropriationMeme, peopleAnalyseMeme, peopleOrganiseEvent, peopleDocumentationEvent, peopleParticipeEvent, peopleAttaquePeople,
  /*   -----------------------   */
  mediaCreeMeme, mediaVehiculeMeme, mediaVehiculeEvent, mediaSaboteEvent, mediaSoutienPeople, mediaSabotePeople, mediaAttaqueMedia
];
