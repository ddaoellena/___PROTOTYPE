const peopleData = {
  nodes : [
    /* PEOPLE */
    {id:'donald-trump', name:"Donald Trump", objToString:"donaldTrump", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '00-donaldTrump.png', size:'big',
      related:{memes:[0, 1, 2],
        events:[0, 1, 2],
        medias:[0, 1, 2]
      }},
		{id:'hillary-clinton', name:"Hillary Clinton", objToString:"hillaryClinton", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '01-hillaryClinton.png', size:'big',
      related:{memes:[0],
        events:[0, 2],
        medias:[0, 1, 2]
      }},
    {id:'andrew-yang', name:"Andrew Yang", objToString:"andrewYang", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '02-andrewYang.png', size:'big',
      related:{memes:[0],
        events:[0, 2],
        medias:[0, 1, 2]
      }},
    {id:'bernie-sanders', name:"Bernie Sanders", objToString:"bernieSanders", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '03-bernieSanders.png', size:'big',
      related:{memes:[0],
        events:[0, 2],
        medias:[0, 1, 2]
      }},
    {id:'shia-laboeuf', name:"Shia Laboeuf", objToString:"shiaLaboeuf", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '04-shiaLaboeuf.png', size:'big',
      related:{memes:[0],
        events:[0, 2],
        medias:[0, 1, 2]
      }},
    {id:'marine-le-pen', name:"Marine Le Pen", objToString:"marineLePen", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '05-marineLePen.png', size:'big',
      related:{memes:[0],
        events:[0, 2],
        medias:[0, 1, 2]
      }},
    {id:'jean-luc-melenchon', name:"Jean-Luc Mélenchon", objToString:"jeanLucMelenchon", mainNode: true,  type:'people', folder:"./assets/pics/2-people/",img: '06-jeanLucMelenchon.png', size:'big',
      related:{memes:[0],
        events:[0, 2],
        medias:[0, 1, 2]
      }}


  ],
  links: [
    /* PEOPLE to PEOPLE */
    {source:'donald-trump',target:'hillary-clinton',type:'bad',weight:5},
    {source:'donald-trump',target:'bernie-sanders',type:'bad',weight:5},
    {source:'donald-trump',target:'andrew-yang',type:'bad',weight:5},
    {source:'donald-trump',target:'shia-laboeuf',type:'bad',weight:5},
    {source:'donald-trump',target:'marine-le-pen',type:'good',weight:5},
    {source:'marine-le-pen',target:'jean-luc-melenchon',type:'bad',weight:5},
  ]
}
