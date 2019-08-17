const peopleData = {
  nodes : [
    /* PEOPLE */
    {id:'donald-trump', name:"Donald Trump", objToString:"donaldTrump", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '00-donaldTrump.png', size:'big',
      related:{memes:[0, 1, 7],
        events:[0, 1, 2],
        medias:[0, 1, 4, 6]
      }},
		{id:'hillary-clinton', name:"Hillary Clinton", objToString:"hillaryClinton", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '01-hillaryClinton.png', size:'big',
      related:{memes:[0,3],
        events:[0, 2],
        medias:[0, 1, 2]
      }},
    {id:'andrew-yang', name:"Andrew Yang", objToString:"andrewYang", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '02-andrewYang.png', size:'big',
      related:{memes:[2],
        events:[0, 2],
        medias:[0, 1, 2]
      }},
    {id:'bernie-sanders', name:"Bernie Sanders", objToString:"bernieSanders", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '03-bernieSanders.png', size:'big',
      related:{memes:[],
        events:[0, 4],
        medias:[5]
      }},
    {id:'shia-laboeuf', name:"Shia Laboeuf", objToString:"shiaLaboeuf", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '04-shiaLaboeuf.png', size:'big',
      related:{memes:[0],
        events:[1],
        medias:[0]
      }},
    {id:'marine-le-pen', name:"Marine Le Pen", objToString:"marineLePen", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '05-marineLePen.png', size:'big',
      related:{memes:[0],
        events:[2],
        medias:[0, 1, 2]
      }},
    {id:'jean-luc-melenchon', name:"Jean-Luc Mélenchon", objToString:"jeanLucMelenchon", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '06-jeanLucMelenchon.png', size:'big',
      related:{memes:[],
        events:[2],
        medias:[0, 1, 2]
      }},
    {id:'florian-philippot', name:"Florian Philippot", objToString:"florianPhilippot", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '07-florianPhilippot.png', size:'big',
      related:{memes:[8],
        events:[2],
        medias:[0]
      }},
    {id:'emmanuel-macron', name:"Emmanuel Macron", objToString:"emmanuelMacron", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '08-emmanuelMacron.png', size:'big',
      related:{memes:[8],
        events:[2],
        medias:[0]
      }},
    {id:'sargon', name:"Sargon of Akkad", objToString:"sargon", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '11-sargon.png', size:'big',
      related:{memes:[0],
        events:[9],
        medias:[0]
      }},
    // {id:'sargon', name:"Sargon of Akkad", objToString:"sargon", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '11-sargon.png', size:'big',
    //   related:{memes:[0],
    //     events:[9],
    //     medias:[0]
    //   }}
  ],
  links: [
    /* PEOPLE to PEOPLE */
    {source:'donald-trump',target:'hillary-clinton',type:'bad', linkDesc:"Idées opposées", weight:5},
    {source:'donald-trump',target:'bernie-sanders',type:'bad', linkDesc:"Idées opposées", weight:5},
    {source:'donald-trump',target:'andrew-yang',type:'bad', linkDesc:"Idées opposées", weight:5},
    {source:'donald-trump',target:'shia-laboeuf',type:'bad', linkDesc:"Idées opposées", weight:5},
    {source:'donald-trump',target:'marine-le-pen',type:'good', linkDesc:"Idées proches", weight:5},
    {source:'marine-le-pen',target:'jean-luc-melenchon',type:'bad', linkDesc:"Idées opposées", weight:5},
    {source:'marine-le-pen',target:'emmanuel-macron',type:'bad', linkDesc:"Idées opposées", weight:5},
    {source:'marine-le-pen',target:'florian-philippot',type:'good', linkDesc:"Idées proches", weight:5},
    {source:'marine-le-pen',target:'florian-philippot',type:'good', linkDesc:"Idées proches", weight:5},
    {source:'marine-le-pen',target:'florian-philippot',type:'good', linkDesc:"Idées proches", weight:5},
    {source:'emmanuel-macron',target:'hillary-clinton',type:'good', linkDesc:"Idées proches", weight:5},
    {source:'emmanuel-macron',target:'hillary-clinton',type:'good', linkDesc:"Idées proches", weight:5},
    {source:'emmanuel-macron',target:'donald-trump',type:'bad', linkDesc:"Idées opposées", weight:5},
  ]
}
