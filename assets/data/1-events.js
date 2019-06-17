var usa2016 = {
  name : "Élections présidentielles USA 2016",
  id: 0,
  toString : "usa2016",
  date:'Novembre 2016',
  children: [
    { type: 2, //trump
      id:0,
      link : 15, //participation
      linkDetail : 0, //trumpUsa2016
      children :[{type:3,id:0,link: 3, linkDetail : 4}, //4chan soutien
                 {type:3,id:4,link: 3, linkDetail : 5}, //rTheDonald soutien
                 {type:0,id:0,link: 3, linkDetail : 3} //Pepe soutien
                 // {type:0,id:1,link: 3, linkDetail : 4} //GodEmperor
               ]
    },
    { type: 2, //hillaryClinton
      id:1,
      link : 15, //participation
      linkDetail : 1, //clintonUsa2016
      children :[{type:0,id:3,link: 4, linkDetail : 6}, //Pizzagate sabotage
                 {type:3,id:4,link: 4, linkDetail : 7}, //rTheDonald sabotage
                 {type:3,id:0,link: 4, linkDetail : 8},//4chan
                 {type:0,id:0,link: 4, linkDetail : 9}] //Pepe sabotage
    },
    { type: 2, //bernieSanders
      id:3,
      link : 15, //participation
      linkDetail : 2, //sandersUsa2016
      children :[{type:3,id:5,link: 21}] //sandersStash
    }],
  x: 500,
  y: 50,
  or: "right"
}

var hwndu = {
  name: "He Will Not Divide Us",
  id :1,
  toString : 'hwndu',
  date:'Janvier 2017',
  children : [
    { type: 2, //shiaLaboeuf
      id:4,
      link : 13,
      linkDetail : 11,
      children :[{type:0,id:0,link: 4, linkDetail : 14},{type: 2, id:0,link : 10, linkDetail : 15}] //pepe & Trump
    },
  { type: 3, //4chan sabotage
    id:0,
    link : 4,
    linkDetail : 12
  },
  { type: 3, //JVC sabotage
    id:3,
    link : 4,
    linkDetail : 13
  }],
  x: 600,
  y: 50,
  or: "right"
}

var fra2017= {
  name : "Élections présidentielles françaises 2016",
  id :2,
  toString : "fra2017",
  date:'Mai 2017',
  children : [
    { type: 2, //marineLePen
      id:5,
      link : 15,
      children :[{type:0,id:0,link: 3}, //Pepe soutien
                 {type:3,id:0,link: 21}] //4chan soutien
  },
    { type: 2, //jeanLucMelenchon
      id:6,
      link : 15,
      children :[{type:3,id:2,link: 21}, //discord soutien
                 {type:3,id:3,link: 21}] //jvc soutien
  },
    { type: 2, //florianPhilippot
      id:7,
      link : 15,
      children :[{type:0,id:4,link: 11}]//Risitas réappropriation
  },
    { type: 2, //emmanuelMacron
      id:8,
      link : 15, //participation
      children :[{type:3,id:0,link: 22}] //Risitas réappropriation
  }],
    x: 800,
    y: 50,
    or: "right"
}

var mediaLayoffs= {
  name : "Mises à pied de journalistes",
  id :3,
  toString : "mediaLayoffs",
  date:'',
  children : [
  ],
    x: 1560,
    y: 50
}

var usa2020= {
  name : "Élections présidentielles USA 2020",
  id :4,
  toString : "usa2020",
  date:'',
  children : [{ type: 2, //trump
    id:0,
    link : 15
  },
  { type: 2, //hillaryClinton
    id:2,
    link : 15,
    children :[{type:0,id:2,link: 3}] //YangGang
  },
    ],
    x: 2400,
    y: 50,
    or: "down"
}

var allEvents= [usa2016, hwndu, fra2017, mediaLayoffs, usa2020];
