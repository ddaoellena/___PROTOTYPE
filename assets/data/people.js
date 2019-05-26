var donaldTrump = {
  name : "Donald Trump",
  toString : "donaldTrump",
  id:0,
  img:'trump',
  children: [
    { type: 0,
      id:0,
      link : 0,
      children :[{type:3,id:0,link : 0},{type:3,id:0,link : 0}]},
    { type: 0,
      id:1,
      link : 1,
      children :[{type:3,id:0,link : 0},{type:0,id:0,link: 2}]},
    { type: 1,
      id:0,
      link : 0,
      children :[{type:3,id:0,link : 0},{type:0,id:0,link: 2},{type:0,id:0,link:2}]},
    { type: 0,
      id:1,
      link : 1,
      children :[{type:3,id:0,link : 0}, {type:0,id:0,link: 2}]}
  ],
  x: 200,
  y: 200,
  or : ""
}

var hillaryClinton = {
  name : "Hillary Clinton",
  toString : "hillaryClinton",
  id:1,
  img:'trump',
  children: [
    {type: 0,
    id:0,
    link : 1
  },
    {type: 1,
    id:0,
    link : 0
  }
  ],
  x: 400,
  y: 200,
  or : "down"
}

var andrewYang = {
  name : "Andrew Yang",
  toString : "andrewYang",
  id:2,
  img:'trump',
  x: 600,
  y: 200,
  children: [
    {type: 0,
    id:2,
    link : 0
  }
  ]
}

var shiaLaboeuf = {
  name : "Shia Laboeuf",
  toString : "shiaLaboeuf",
  id:3,
  img:'trump',
  relatedMemes : [],
  relatedEvents: [],
  children: [
  ],
  x:1400,
  y:300
}

var people = {
  name : "Shia Laboeuf",
  toString : "people",
  id:4,
  img:'trump',
  relatedMemes : [],
  relatedEvents: [],
  children: [
  ],
  x:1400,
  y:100
}
var allPeople = [donaldTrump, hillaryClinton, andrewYang, shiaLaboeuf, people];
