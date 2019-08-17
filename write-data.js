// for (var i = 0; i < memesData.nodes.length; i++) {
//   var link  = document.createElement("a");
//   link.setAttribute("target", "_blank");
//   link.setAttribute("href", memesData.nodes[i].link);
//
//   link.innerHTML = memesData.nodes[i].id + ":     " + memesData.nodes[i].author +' ' + memesData.nodes[i].name +"<br><br>";
//   document.body.append(link);
  // var p  = document.createElement("p");
  // p.innerHTML = "convert " + memesData.nodes[i].imgPopUp + ".png -resize 40% " + memesData.nodes[i].imgPopUp +".png" ;
  //  document.body.append(p);
// }
var tablesToPrint = [allMemes, allEvents, allPeople, allMedias, allLinks];
for (var i = 0; i < tablesToPrint.length; i++) {

  for (var j = 0; j < tablesToPrint[i].length; j++) {
    document.body.innerHTML = JSON.stringify(tablesToPrint)
  }
}
// document.body.innerHTML = JSON.stringify(memesData)
// document.body.innerHTML = JSON.stringify(mediasData)
