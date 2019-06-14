function d3Init(table){
  toggleInfoDiv(0);
  toggleInterfaceEl(panSliderGroup, 0);
  toggleInterfaceEl(plusSvgWrapper,0);
  toggleZoomSlider(1);
  togglePlusSvg(0);
  cleanD3();
  removePopUp();
  turnOffLabels();
  cleanSvg();
  run(table);
  switch (table) {
    case memesData:
      setCurrentView(0);
      return;
    case mediasData:
      setCurrentView(3);
      return ;
    default:
      return;
  }
}
var svg = d3.select("#main-svg");

function run(graph) {
  var radius = 28;
  var radiusMed = 15;

  let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody().strength(-400))
  		.force('charge', d3.forceManyBody()
        .strength(-1000)
        .theta(0.8)
        .distanceMax(500)
      )
  		// .force('collide', d3.forceCollide()
      //   .radius(d => 30)
      //   .iterations(2)
      // )
      .force("center", d3.forceCenter(vw / 3, vh / 2));

  // graph.links.forEach(function(d){
  //   // d.source = d.source_id;
  //   // d.target = d.target_id;
  // });
  var defs = d3.select("#main-svg-defs");

  var newsPattern = defs.append("pattern").attr("width", 1).attr("height", 1).attr('id', 'news-icon');
  var newsImage = newsPattern.append("image").attr('href', './assets/pics/navigation/newspaper.svg').attr('height', radiusMed*1.5).attr('width', radiusMed*1.5).attr('x', radiusMed/4).attr('y', radiusMed/4);
  var wikiPattern = defs.append("pattern").attr("width", 1).attr("height", 1).attr('id', 'wiki-icon');
  var wikiImage = wikiPattern.append("image").attr('href', './assets/pics/navigation/wiki.svg').attr('height', radiusMed*1.5).attr('width', radiusMed*1.5).attr('x', radiusMed/4).attr('y', radiusMed/4);
  var videoPattern = defs.append("pattern").attr("width", 1).attr("height", 1).attr('id', 'video-icon');
  var videoImage = videoPattern.append("image").attr('href', './assets/pics/navigation/video.svg').attr('height', radiusMed*1.5).attr('width', radiusMed*1.5).attr('x', radiusMed/4).attr('y', radiusMed/4);

  var popUpCurtain = svg.append("rect").attr("width", vw).attr("height", vh).attr('class', 'big-pop-up-curtain').attr('id', 'big-pop-up-curtain').attr('onclick','turnOffD3Div(); turnOffLinks(); toggleInfoDiv(0);');
  var circlePaths = svg.selectAll('clipPaths')
                      .data(graph.nodes.filter(function(d){return typeof d.img !== "undefined";})).enter()
                      .append('clipPath')
                      .attr("id", function(d){return "circlepath-" + d.id})
                      .append('circle');

  var link = svg.append("g").attr("class", "link-group")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line");

  var nodeGroup = svg.append("g")
                     .attr("class", "node-group")
                     .selectAll("circle");

  var blurNode = nodeGroup.data(graph.nodes).enter().append("circle")
                        .attr("class", function(d){return "blur-circle "+ d.type+"-blur"})
                        .attr("id", function(d){if (d.mainNode == true) {
                          return d.id+"-blur"
                        }})
                        .attr("r", 2)

 var node = nodeGroup.data(graph.nodes).enter().append("circle")
                .attr("class", "circle-node pointer")
                .attr("r", 2).on("mouseover", onMouseOver);

  var patternNode = nodeGroup.data(graph.nodes.filter(function(d){return typeof d.subType !== "undefined";})).enter().append("circle")
                        .attr("class", "pattern-circle pointer")
                        .attr("r", 2);

 var tooltip = d3.select("body")
                .append("div")
                .attr("class", "tooltip")
                .html("");

 var popUp = d3.select("body")
                .append("div")
                .attr("class", "big-pop-up-wrapper")
                .attr("id", "big-pop-up-wrapper")
                .html("");

 // var popUpClose = popUp.append("div").attr("class", "big-pop-up-close-div");
 var popUpTitle = popUp.append("div").attr("class", "big-pop-up-title-div").append("h2").attr("class", "big-pop-up-title");
 var popUpLink = popUp.append("a").attr("target","_blank");
 var popUpLinkDiv = popUpLink.append("div").attr("class", "big-pop-up-link pointer");
 var popUpAuthor = popUp.append("div").attr("class", "big-pop-up-author-div").append("p").attr("class", "big-pop-up-author");
 var popUpImg = popUp.append("div").attr("class", "big-pop-up-img-div").append("img").attr("class", "big-pop-up-img");

 patternNode.on("mouseover", function(d){
        tooltip.html(d.author)
        return tooltip.style("visibility", "visible");
       })
       .on("mousemove", function(){
            return tooltip.style("left",(event.pageX+10)+"px").style("top", (event.pageY+10)+"px");
        ;})
       .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
       .on("click", displayPopUp);


  var imgs = nodeGroup.data(graph.nodes.filter(function(d){return typeof d.img !== "undefined";}))
                .enter().append("image")
                .attr("clip-path",function(d){return "url('#circlepath-" + d.id +"')"})
                .attr("class", "image-node pointer")
                .attr("onclick", "toggleInfoDiv(1)")
                .call(d3.drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended));

  imgs.on("mouseover", function(d){
         t_text = d.name;
         tooltip.html(t_text)
         return tooltip.style("visibility", "visible");
        })
        .on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
        .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
        .attr("data-id", function(d){return d.id})
        .attr("onclick", function(d){return "toggleInfoDiv(1);appendInfo("+d.objToString+");displayLinks(this)"});

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    circlePaths
        .attr('r',radius)
        .style("fill", "#FFFFFF")
        .attr("cx", function (d) { return d.x+5; })
        .attr("cy", function(d) { return d.y-3; });

    link
        .attr("class", function(d){return "node-link link-"+d.source.id+ " link-"+d.target.id})
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; })
        .style("stroke", function(d){
          switch (d.type) {
            case "neutral":
              return "#aaa";
              break;
            case "good":
              return "#00FF55";
              break;
            case "bad":
              return "#FF3333";
              break;
            default:
          }
        })
        .style("stroke-width", function(d){return d.weight*0.5})
        .attr('opacity', '0.33');

    blurNode
      .attr("r", function(d){
        switch (d.size) {
          case "big":
             return radius+radius/10
            break;
          case "medium":
             return radiusMed
            break;
          default:
        }
      })
      .attr("fill", function(d){
        switch (d.type) {
          case "meme":
            return "#FFFFFF"
            break;
          case "media":
            return "#CCCCCC"
            break;
          default:
        }
      })
      .attr("cx", function (d) { return d.x+5; })
      .attr("cy", function(d) { return d.y-3; })
      .attr("filter", "url('#fBlur')");

    node
       .attr("r", function(d){
         switch (d.size) {
           case "big":
              return radius
             break;
           case "medium":
              return radiusMed
             break;
           default:
         }
       })
       .style("fill", function(d){
         switch (d.type) {
           case "meme":
              return '#FFFFFF'
             break;
           case "media":
              return '#000000'
             break;
           default:
         }
       })
       .attr("opacity", "0.75")
       .style("stroke", function(d){
         switch (d.type) {
           case "meme":
              return '#FFFFFF'
             break;
           case "media":
              return '#000000'
             break;
           default:
         }
       })
       .style("stroke-width", "1px")
       .attr("cx", function (d) { return d.x+5; })
       .attr("cy", function(d) { return d.y-3; });

    patternNode.attr("r", radiusMed).style("fill", function(d){
      switch (d.subType) {
        case "news":
           return 'url(#news-icon)'
          break;
        case "video":
           return 'url(#video-icon)'
          break;
        default:
      }
    }).attr("cx", function (d) { return d.x+5; })
    .attr("cy", function(d) { return d.y-3; });

    imgs
       .attr("href", function(d){ return d.folder+d.img })
       .attr("width",radius*2)
       .attr("height",radius*2)
       .attr("x", function (d) { return d.x-radius+5; })
       .attr("y", function(d) { return d.y-radius-3; });

    // label
  	// 	 .attr("x", function(d) { return d.x; })
    //    .attr("y", function (d) { return d.y; })
    //    .style("font-size", "10px").style("fill", "#333");
  }
  function onMouseOver(){
    d3.select(this).attr({r: 30 });
  }
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart()
    d.fx = d.x
    d.fy = d.y
  //  simulation.fix(d);
  }

  function dragged(d) {
    d.fx = d3.event.x
    d.fy = d3.event.y
  //  simulation.fix(d, d3.event.x, d3.event.y);
  }

  function dragended(d) {
    d.fx = d3.event.x
    d.fy = d3.event.y
    if (!d3.event.active) simulation.alphaTarget(0);
    //simulation.unfix(d);
  }

  function displayPopUp(d){
    if (d3.event.defaultPrevented) return;
    turnOffD3Div();
    if (event.pageX <= midW && event.pageY <= midH) {
      popUp.style("display", "block").style("left",(event.pageX+10)+"px").style("top", (event.pageY-10)+"px");
    } else if (event.pageX >= midW && event.pageY <= midH) {
      popUp.style("display", "block").style("left",(event.pageX-520)+"px").style("top", (event.pageY-10)+"px");
    } else if (event.pageX <= midW && event.pageY >= midH) {
      popUp.style("display", "block").style("left",(event.pageX+10)+"px").style("top", (event.pageY-330)+"px");
    } else if (event.pageX >= midW && event.pageY >= midH) {
      popUp.style("display", "block").style("left",(event.pageX+-520)+"px").style("top", (event.pageY-330)+"px");
    }
    popUpTitle.html(d.name);
    popUpLink.attr("href", d.link);
    popUpAuthor.html(d.author);
    popUpImg.attr("src", d.imgPopUp);
  }

}

function cleanD3(){
  turnOffD3Div();
  $('pattern').remove();
  $('.big-pop-up-wrapper').remove();
  $('.tooltip').remove();
}
function turnOffD3Div(){
  var bigPopUpWrapper = document.getElementById('big-pop-up-wrapper');
  if ($("#big-pop-up-wrapper").length !== 0){
    bigPopUpWrapper.style.display = "none";
    bigPopUpWrapper.style.left = "";
    bigPopUpWrapper.style.right = "";
    bigPopUpWrapper.style.top = "";
    bigPopUpWrapper.style.bottom = "";
  }
}
function turnOffLinks(){
  var links = document.getElementsByClassName('node-link');
  for (var i = 0; i < links.length; i++) {
    links[i].style.opacity = 0.33;
  }
}
function displayLinks(el){
  turnOffLinks();
  var linksToDisplay = document.getElementsByClassName('link-'+el.dataset.id);
  for (var i = 0; i < linksToDisplay.length; i++) {
    linksToDisplay[i].style.opacity = 1;
  }
}
