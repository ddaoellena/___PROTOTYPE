var pepe = {
  name : "Pepe the frog",
  toString : "pepe",
  id :0,
  img:'default.png',
  children:[
    {type: 2,
      id:3,
      link : 1
    }
  ],
  x: 300,
  y: 300
}

var godEmperor = {
  name : "God Emperor Trump",
  id : 1,
  toString : "godEmperor",
  img:'god-emperor.png',
  children:[
    {type: 2,
      id:3,
      link : 1
    }
  ],
  x: 300,
  y: 300
}

var yangGang = {
  name : "Yang Gang",
  toString : "yangGang",
  id :2,
  img:'yang-gang.png',
  children:[
    {type: 2,
      id:3,
      link : 1
    }
  ],
  x: 300,
  y: 300
}

var allMemes= [pepe, godEmperor, yangGang];
