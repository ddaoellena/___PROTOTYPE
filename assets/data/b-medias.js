const mediasData = {
  nodes : [
    /* MEDIAS */
    {id:'meme-1', name:"4chan", objToString:"fourChan", mainNode: true,  type:'site', folder:"./assets/pics/3-medias/",img: '00-fourChan.png', size:'big', related:{events:[0, 1, 2]}},
		{id:'meme-2', name:"5chan", objToString:"pepe", mainNode: true,  type:'site', folder:"./assets/pics/3-medias/",img: '00-fourChan.png', size:'big', related:{events:[0, 2]}},
    /* SITES */
  ],
  links: [
      /* MEDIAS to MEDIAS */
    {id:11,source:'meme-1',target:'meme-2',weight:3}
  ]
}
