var mainNodes;

function addToFilterD3(obj){

}

function getMainNodes(table){
  mainNodes = "";
  var result = table.nodes.filter(obj => {
    return obj.mainNode == true;
  })
  console.log(result);
  mainNodes = result;
};

function addRelatedToD3(table){
  getMainNodes(table)
  console.log(mainNodes);
};

function turnOffAllD3Circles(a){
  var blurCircle = document.getElementsByClassName('blur-circle');
  var patternCircle = document.getElementsByClassName('pattern-circle');
  var imageNode = document.getElementsByClassName('image-node');
  var toTurnOff = [blurCircle,patternCircle];
  switch (a) {
    case 0:
      for (var i = 0; i < toTurnOff.length; i++) {
        for (var j = 0; j < toTurnOff[i].length; j++) {
          toTurnOff[i][j].setAttribute('opacity', '0.33');
        }
      }
      for (var i = 0; i < imageNode.length; i++) {
        imageNode[i].setAttribute("filter", "url(#fGray)")
      }
      break;
    case 1:
      for (var i = 0; i < toTurnOff.length; i++) {
        for (var j = 0; j < toTurnOff[i].length; j++) {
          toTurnOff[i][j].setAttribute('opacity', '1');
        }
      }
      for (var i = 0; i < imageNode.length; i++) {
        imageNode[i].setAttribute("filter", "")
      }
      break;
    default:

  }

}
