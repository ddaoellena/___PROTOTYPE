/*
* Meme to ***
*/
var memeEvolueMeme = {
  name :"Évolution",
  toString : "memeEvolueMeme",
  id:0,
  type: 0,
  description : "Le meme évolue d'un meme.",
  imgThumbnail: ""
}
var memeInfluenceMeme = {
  name :"Influence",
  toString : "memeInfluenceMeme",
  id:1,
  type: 0,
  description : "Le meme influence un meme",
  imgThumbnail: ""
}
var memeSabotageEvent = {
  name :"Sabotage",
  toString : "memeSabotageEvent",
  id:2,
  type: 1,
  description : "Le meme sabote l'événement.",
  imgThumbnail: ""
}
var memeSoutienPeople = {
  name :"Soutien",
  toString : "memeSoutienPeople",
  id:3,
  type: 2,
  description : "Le meme soutient la personnalité.",
  imgThumbnail: ""
}
var memeSabotagePeople = {
  name :"Sabotage",
  toString : "memeSabotagePeople",
  id:4,
  type: 2,
  description : "Le meme sabote la personnalité.",
  imgThumbnail: ""
}
var memeVehiculePeople = {
  name :"Véhicule",
  toString : "memeVehiculePeople",
  id:5,
  type: 2,
  description : "Le meme véhicule les idées de la personnalité.",
  imgThumbnail: ""
}
var memeAttaqueMedia = {
  name :"Attaque",
  toString : "memeAttaqueMedia",
  id:6,
  type: 3,
  description : "Le meme attaque le média.",
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
  imgThumbnail: ""
}
var eventRelaieMeme = {
  name :"Relai",
  toString : "eventRelaieMeme",
  id:8,
  type: 4,
  description : "L'événement relaie le meme.",
  imgThumbnail: ""
}
var eventReactionEvent = {
  name :"Réaction",
  toString : "eventReactionEvent",
  id:9,
  type: 5,
  description : "L'évenement est en réaction par rapport à un autre évenement.",
  imgThumbnail: ""
}
var eventAttaquePeople = {
  name :"Attaque",
  toString : "eventAttaquePeople",
  id:10,
  type: 6,
  description : "L'évenement s'attaque à une personnalité.",
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
  imgThumbnail: ""
}
var peopleAnalyseMeme = {
  name :"Analyse",
  toString : "analyseMeme",
  id:12,
  type: 8,
  description : "La personnalité a documenté et analysé le meme.",
  imgThumbnail: ""
}
var peopleOrganiseEvent = {
  name :"Organisation",
  toString : "peopleOrganiseEvent",
  id:13,
  type: 9,
  description : "La personnalité a organisé l'événement.",
  imgThumbnail: ""
}
var peopleDocumentationEvent = {
  name :"Documentation",
  toString : "peopleDocumentationEvent",
  id:14,
  type: 9,
  description : "La personnalité a documenté l'événement.",
  imgThumbnail: ""
}
var peopleParticipeEvent = {
  name :"Participation",
  toString : "peopleParticipeEvent",
  id:15,
  type: 9,
  description : "La personnalité a participé à l'événement.",
  imgThumbnail: ""
}
var peopleAttaquePeople = {
  name :"Attaque",
  toString : "peopleCritiquePeople",
  id:16,
  type: 10,
  description : "La personnalité a attaqué une autre personnalité.",
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
  imgThumbnail: "",
  img:''
}
var mediaVehiculeMeme = {
  name :"Véhicule",
  toString : "mediaVehiculeMeme",
  id:18,
  type: 12,
  description : "Le média véhicule le meme.",
  imgThumbnail: "",
  img:''
}
var mediaVehiculeEvent = {
  name :"Sabote",
  toString : "mediaVehiculeEvent",
  id:19,
  type: 13,
  description : "Le site véhicule l'événement.",
  imgThumbnail: "",
  img:''
}
var mediaSaboteEvent = {
  name :"Sabote",
  toString : "mediaSaboteEvent",
  id:20,
  type: 13,
  description : "Le site sabote l'événement.",
  imgThumbnail: "",
  img:''
}
var mediaSoutienPeople = {
  name :"Soutien",
  toString : "mediaSoutienPeople",
  id:21,
  type: 14,
  description : "Le site soutient la personnalité.",
  imgThumbnail: "",
  img:''
}
var mediaSabotePeople = {
  name :"Sabote",
  toString : "mediaSabotePeople",
  id:22,
  type: 14,
  description : "Le site sabote la personnalité.",
  imgThumbnail: "",
  img:''
}
var mediaAttaqueMedia = {
  name :"Attaque",
  toString : "mediaAttaqueMedia",
  id:23,
  type: 15,
  description : "Le site attaque un autre site.",
  imgThumbnail: "",
  img:''
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
