var donaldTrump = {
  name : "Donald Trump",
  toString : "donaldTrump",
  id:0,
  description : "Donald Trump [ˈdɒnəld tɹʌmp], né le 14 juin 1946 à New York, est un homme d'affaires, animateur de télévision et homme d'État américain, président des États-Unis depuis le 20 janvier 2017. Fils du promoteur immobilier Fred Trump, il travaille dans l'entreprise de son père pendant ses études à l’école de commerce de Wharton. Il prend en 1971 la tête de l'entreprise familiale, qu'il renomme The Trump Organization.À partir des années 1970, il se constitue un empire immobilier et une notoriété grâce à des bâtiments prestigieux qui portent généralement son nom. Une partie de ses immeubles — dont plusieurs gratte-ciel, parmi lesquels la Trump Tower — se trouvent dans l'État de New York, mais il en possède également dans d'autres pays. Propriétaire de casinos, de résidences de luxe et de terrains de golf, il réalise par ailleurs de nombreux investissements dans divers domaines (sports, médias et concours de beauté notamment). Célébrité médiatique aux États-Unis dès les années 1980, impliqué dans le secteur du divertissement télévisuel, il est de 2004 à 2015 l'animateur de l'émission de téléréalité The Apprentice.",
  imgThumbnail: "trump-small.png",
  img:'trump',
  relatedMemes : [0, 1],
  relatedEvents: [0],
  // relatedLinks : [1],
  x: 200,
  y: 200
}

var hillaryClinton = {
  name : "Hillary Cliton",
  toString : "clinton",
  id:1,
  description : "hello I'm Hillary",
  imgThumbnail: "clinton-small.png",
  img:'trump',
  relatedMemes : [0],
  relatedEvents: [],
  x: 400,
  y: 200
}

var andrewYang = {
  name : "Andrew Yang",
  toString : "andrewYang",
  id:1,
  description : "hello I'm Hillary",
  imgThumbnail: "yang-small.png",
  img:'trump',
  relatedMemes : [0],
  relatedEvents: [],
  x: 600,
  y: 200
}

var allPeople= [donaldTrump, hillaryClinton, andrewYang];

function addTypePeople(){
  for (var i = 0; i < allPeople.length; i++) {
    allPeople[i].type = 2;
  }
}

addTypePeople();
