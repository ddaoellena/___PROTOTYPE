const mediasData = {
  nodes : [
    /* MEMES */
    {id:'meme-1', group:1, hasImg: true, img: 'default.png', size:'big', type:'meme'},
		{id:'meme-2', group:2, hasImg: true, img: 'default.png', size:'big', type:'meme'},
    /* MEDIA */
    {id:'media-1', group:2, size:'medium', type:'media'},
		{id:'media-2', group:3, size:'medium', type:'media'},
		{id:'media-3', group:4, size:'medium', type:'media'},
    {id:'media-4', group:2, size:'medium', type:'media'},
    {id:'media-5', group:4, size:'medium', type:'media'},
    {id:'media-6', group:4, size:'medium', type:'media'},
    {id:'media-7', group:4, size:'medium', type:'media'},
    {id:'media-8', group:4, size:'medium', type:'media'},
    {id:'media-9', group:4, size:'medium', type:'media'},
    {id:'media-10', group:4, size:'medium', type:'media'},
    {id:'media-11', group:4, size:'medium', type:'media'},
    {id:'media-12', group:4, size:'medium', type:'media'},
    {id:'media-13', group:4, size:'medium', type:'media'},
    {id:'media-14', group:4, size:'medium', type:'media'},
    {id:'media-15', group:4, size:'medium', type:'media'},
    {id:'media-16', group:4, size:'medium', type:'media'}
    /* PEOPLE */
  ],
  links: [
    /* MEME to MEDIA */
    {id:1,source:'meme-1',target:'media-1',weight:1},
		{id:2,source:'meme-1',target:'media-2',weight:3},
    {id:3,source:'meme-1',target:'media-3',weight:3},
    {id:4,source:'meme-1',target:'media-4',weight:3},
    {id:5,source:'meme-1',target:'media-5',weight:3},
    {id:6,source:'meme-1',target:'media-6',weight:3},
    {id:7,source:'meme-1',target:'media-7',weight:3},
    {id:8,source:'meme-1',target:'media-8',weight:3},
    {id:9,source:'meme-1',target:'media-9',weight:3},
    {id:10,source:'meme-2',target:'media-10',weight:3},
    {id:11,source:'meme-1',target:'media-11',weight:3},
    {id:12,source:'meme-1',target:'media-12',weight:3},
    {id:13,source:'meme-1',target:'media-13',weight:3},
    {id:14,source:'meme-1',target:'media-14',weight:3},
    {id:15,source:'meme-2',target:'media-15',weight:3},
    {id:15,source:'meme-2',target:'media-16',weight:3},
    /* MEME to MEME */
    {id:11,source:'meme-1',target:'meme-2',weight:3}
  ]
}
