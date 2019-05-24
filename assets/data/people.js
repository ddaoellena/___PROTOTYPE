var donaldTrump = {
  name : "Donald Trump",
  toString : "donaldTrump",
  id:0,
  // imgThumbnail: "trump-small.png",
  img:'trump',
  relatedMemes : [0, 1],
  relatedEvents: [0],
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
  y: 200
}

var hillaryClinton = {
  name : "Hillary Clinton",
  toString : "hillaryClinton",
  id:1,
  img:'trump',
  relatedMemes : [0],
  relatedEvents: [0],
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
  y: 200
}

var andrewYang = {
  name : "Andrew Yang",
  toString : "andrewYang",
  id:2,
  img:'trump',
  relatedMemes : [2],
  relatedEvents: [],
  x: 600,
  y: 200,
  children: [
    {type: 0,
    id:2,
    link : 0
  }
  ]
}

var allPeople = [donaldTrump, hillaryClinton, andrewYang];
