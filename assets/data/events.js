var usa2016 = {
  name : "Élections présidentielles USA 2016",
  id: 0,
  toString : "usa2016",
  children: [
    { type: 2,
      id:0,
      link : 1,
      children :[{type:3,id:0,link: 2}]
    },
    { type: 0,
      id:2,
      link : 1,
      children :[{type:3,id:0,link: 2}]
    },
    { type: 0,
      id:2,
      link : 1,
      children :[{type:3,id:0,link: 2}]
    }],
  x: 500,
  y: 200,
  or: "left"
}

var hwndu = {
  name: "He Will Not Divide Us",
  id :1,
  toString : 'hwndu',
  children : [
    { type: 2,
      id:3,
      link : 1
  },
    { type: 2,
      id:0,
      link : 1
  }],
  x: 600,
  y: 200,
  or: "right"
}

var fra2017= {
  name : "Élections présidentielles françaises 2016",
  id :2,
  toString : "fra2017",
  children : [
    { type: 2,
      id:3,
      link : 1
  }],
    x: 800,
    y: 200
}

var mediaLayoffs= {
  name : "Mises à pied de journalistes",
  id :3,
  toString : "mediaLayoffs",
  children : [
    { type: 2,
      id:3,
      link : 1
  }],
    x: 1560,
    y: 200
}


var allEvents= [usa2016, hwndu,fra2017, mediaLayoffs];
