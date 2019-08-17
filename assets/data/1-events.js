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
  x: 700,
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
  x: 800,
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
      children :[{type:3,id:0,link: 22}, //4chan sabotage
                 {type:0,id:8,link: 22}] //macronGate
  }],
    x: 940,
    y: 50,
    or: "right"
}

var mediaLayoffs= {
  name : "Mises à pied de journalistes",
  id :3,
  toString : "mediaLayoffs",
  date:'Janvier 2019',
  children : [
  ],
    x: 1760,
    y: 50
}

var usa2020= {
  name : "Élections présidentielles USA 2020",
  id :4,
  toString : "usa2020",
  date: 'Novembre 2020',
  children : [{ type: 2, //trump
    id:0,
    link : 15, //participation
    children : [{type:3,id:0,link: 3}],
  },
  { type: 2, //andrew
    id:2,
    link : 15,
    children :[{type:0,id:2,link: 3},//YangGang
               {type:0,id:2,link: 3}]
   }],
    x: 2620,
    y: 50,
    or: "down"
}

var christchurch= {
  name : "Tuerie de Christchurch",
  id :5,
  toString : "christchurch",
  date:'15 mars 2019',
  children : [
  ],
    x: 1820,
    y: 50
}

var midterms2018= {
  name : "Élections de mi-mandat américaines",
  id :6,
  toString : "midterms2018",
  date:'Novembre 2018',
  children : [
  ],
    x: 1660,
    y: 50
}

var attentatParis= {
  name : "Attentats du 13 novembre 2015",
  id :7,
  toString : "attentatParis",
  date:'13 novembre 2013',
  children : [{type:2, //jawadBendaoud
              id:9,
              link: 3,
              children:[{type: 0, id: 17, link:1}] //jawad
            }],
    x: 220,
    y: 50
}

var article13event= {
  name : "Présentation de l'article 13",
  id :8,
  toString : "article13event",
  date:'Septembre 2018',
  children : [{type:0,id:18,link: 3}
  ],
    x: 1580,
    y: 50
}
var brexit= {
  name : "Brexit",
  id :9,
  toString : "brexit",
  date:'23 juin 2016',
  children : [
  ],
    x: 500,
    y: 50
}

var allEvents= [usa2016, hwndu, fra2017, mediaLayoffs, usa2020, christchurch, midterms2018, attentatParis, article13event, brexit];
