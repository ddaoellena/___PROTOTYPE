var donaldTrump = {
  name : "Donald Trump",
  toString : "donaldTrump",
  nodeClass: "donald-trump",
  id:0,
  tag: "Politique",
  children: [
    { type: 0,
      id:0,
      link : 0,
      linkDetail: 0,
      children :[{type:3,id:0,link : 0},{type:3,id:0,link : 0}]},
    { type: 0,
      id:1,
      link : 1,
      linkDetail: 0,
      children :[{type:3,id:0,link : 0},{type:0,id:0,link: 2}]},
    { type: 1,
      id:0,
      link : 0,
      linkDetail: 0,
      children :[{type:3,id:0,link : 0},{type:0,id:0,link: 2},{type:0,id:0,link:2}]},
    { type: 0,
      id:1,
      link : 1,
      linkDetail: 0,
      children :[{type:3,id:0,link : 0}, {type:0,id:0,link: 2}]}
  ],
  or : ""
}

var hillaryClinton = {
  name : "Hillary Clinton",
  toString : "hillaryClinton",
  nodeClass: "hillary-clinton",
  id:1,
  tag: "Politique",
  children: [
    {type: 0,
    id:0,
    link : 1,
    linkDetail: 0
  },
    {type: 1,
    id:0,
    link : 0,
    linkDetail: 0
  }
  ]
}

var andrewYang = {
  name : "Andrew Yang",
  toString : "andrewYang",
  nodeClass: "andrew-yang",
  id:2,
  tag: "Politique",
  children: [
    {type: 0,
    id:2,
    link : 0,
    linkDetail: 0
    }
  ]
}

var bernieSanders = {
  name : "Bernie Sanders",
  toString : "bernieSanders",
  nodeClass: "bernie-sanders",
  id:3,
  tag: "Politique",
  children: [
  ]
}

var shiaLaboeuf = {
  name : "Shia Laboeuf",
  toString : "shiaLaboeuf",
  nodeClass: "shia-laboeuf",
  id:4,
  tag: "Médiatique",
  children: [
  ]
}

var marineLePen={
  name : "Marine Le Pen",
  toString : "marineLePen",
  nodeClass: "marine-le-pen",
  id:5,
  tag: "Politique",
  children: [
  ]
}

var jeanLucMelenchon={
  name : "Jean-Luc Mélenchon",
  toString : "jeanLucMelenchon",
  nodeClass: "jean-luc-melenchon",
  id:6,
  tag: "Politique",
  children: [
  ]
}

var florianPhilippot={
  name : "Florian Philippot",
  toString : "florianPhilippot",
  nodeClass: "florian-philippot",
  id:7,
  tag: "Politique",
  children: [
  ]
}
var emmanuelMacron={
  name : "Emmanuel Macron",
  toString : "emmanuelMacron",
  nodeClass: "emmanuel-macron",
  tag: "Politique",
  id:8,
  children: [
  ]
}

var jawadBendaoud={
  name : "Jawad Bendaoud",
  toString : "jawadBendaoud",
  nodeClass: "jawad-bendaoud",
  tag: "Médiatique",
  id:9,
  children: [
  ]
}

var sargon={
  name : "Sargon of Akkad",
  toString : "sargon",
  nodeClass: "sargon",
  tag: "Politique",
  id:11,
  children: [
  ]
}

var sargon={
  name : "Sargon of Akkad",
  toString : "sargon",
  nodeClass: "sargon",
  tag: "Politique",
  id:11,
  children: [
  ]
}

var allPeople = [
  //USA
  donaldTrump, hillaryClinton, andrewYang, bernieSanders, shiaLaboeuf,
  //France
  marineLePen, jeanLucMelenchon, florianPhilippot, emmanuelMacron, jawadBendaoud, sargon];
