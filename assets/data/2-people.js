var donaldTrump = {
  name : "Donald Trump",
  toString : "donaldTrump",
  id:0,
  img:'trump',
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
  x: 1000,
  y: 80,
  or : ""
}

var hillaryClinton = {
  name : "Hillary Clinton",
  toString : "hillaryClinton",
  id:1,
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
  ],
  x: 400,
  y: 80,
  or : "down"
}

var andrewYang = {
  name : "Andrew Yang",
  toString : "andrewYang",
  id:2,
  x: 500,
  y: 80,
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
  id:3,
  relatedMemes : [],
  relatedEvents: [],
  children: [
  ],
  x:240,
  y:80
}

var shiaLaboeuf = {
  name : "Shia Laboeuf",
  toString : "shiaLaboeuf",
  id:4,
  relatedMemes : [],
  relatedEvents: [],
  children: [
  ],
  x:580,
  y:160
}

var marineLePen={
  name : "Marine Le Pen",
  toString : "marineLePen",
  id:5,
  relatedMemes : [],
  relatedEvents: [],
  children: [
  ],
  x:1080,
  y:80
}

var jeanLucMelenchon={
  name : "Jean-Luc Mélenchon",
  toString : "jeanLucMelenchon",
  id:6,
  relatedMemes : [],
  relatedEvents: [],
  children: [
  ],
  x:320,
  y:80
}

var florianPhilippot={
  name : "Florian Philippot",
  toString : "florianPhilippot",
  id:7,
  relatedMemes : [],
  relatedEvents: [],
  children: [
  ],
  x:1080,
  y:160
}

var emmanuelMacron={
  name : "Emmanuel Macron",
  toString : "emmanuelMacron",
  id:8,
  relatedMemes : [],
  relatedEvents: [],
  children: [
  ],
  x:580,
  y:80
}

var allPeople = [
  //USA
  donaldTrump, hillaryClinton, andrewYang, bernieSanders, shiaLaboeuf,
  //France
  marineLePen, jeanLucMelenchon, florianPhilippot, emmanuelMacron];
