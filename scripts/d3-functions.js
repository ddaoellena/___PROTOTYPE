function d3Init(table){
  toggleInfoDiv(0);
  toggleInterfaceEl(filterButton, 0);
  toggleInterfaceEl(panSliderGroup, 0);
  toggleCompass(0);
  toggleTimeline(0);
  cleanD3();
  removePopUp();
  toggleOffFilter();
  turnOffLabels();
  cleanSvg();
  run(table);
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

  graph.links.forEach(function(d){
    // d.source = d.source_id;
    // d.target = d.target_id;
  });
  var popUpCurtain = svg.append("rect").attr("width", vw).attr("height", vh).attr('class', 'big-pop-up-curtain').attr('id', 'big-pop-up-curtain').attr('onclick','turnOffD3Div(); toggleInfoDiv(0);');
  var circlePaths = svg.selectAll('clipPaths')
                      .data(graph.nodes.filter(function(d){return typeof d.img !== "undefined";})).enter()
                      .append('clipPath')
                      .attr("id", function(d){return "circlepath-" + d.id})
                      .append('circle');

  var link = svg.append("g")
                .style("stroke", "#aaa")
                .style("width", "0.5")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line");

  var nodeGroup = svg.append("g")
                     .attr("class", "node-group")
                     .selectAll("circle");

  var blurNode = nodeGroup.data(graph.nodes).enter().append("circle")
                        .attr("class", "blur-circle")
                        .attr("r", 2)
                        .call(d3.drag()
                          .on("start", dragstarted)
                          .on("drag", dragged)
                          .on("end", dragended));

  var node = nodeGroup.data(graph.nodes).enter().append("circle")
                .attr("class", "circle-node pointer")
                .attr("r", 2).on("mouseover", onMouseOver)
                .call(d3.drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended));

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

 node.on("mouseover", function(d){
        tooltip.html(d.author)
        return tooltip.style("visibility", "visible");
       })
       .on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
       .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
       .on("click", clicked);


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
        .attr("onclick", function(d){return "toggleInfoDiv(1);appendInfo("+d.objToString+");"});

  // var label = svg.append("g")
  //                .attr("class", "labels")
  //                .selectAll("text")
  //                .data(graph.nodes)
  //                .enter().append("text")
  //                .attr("class", "label")
  //                .text(function(d) { return d.id; });

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
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; })
        .attr('opacity', '0');

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
            return "#FFC683"
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
       .style("fill", "#C4C4C4")
       .style("opacity", "0.33")
       .style("stroke", "#424242")
       .style("stroke-width", "1px")
       .attr("cx", function (d) { return d.x+5; })
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

  function clicked(d){
    if (d3.event.defaultPrevented) return;
    popUp.style("display", "block").style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
    popUpTitle.html(d.name);
    popUpLink.attr("href", d.link);
    popUpAuthor.html(d.author);
    popUpImg.attr("src", d.imgPopUp);
  }
}

function cleanD3(){
  turnOffD3Div();
  $('.big-pop-up-wrapper').remove();
  $('.tooltip').remove();
}
function turnOffD3Div(){
  var bigPopUpWrapper = document.getElementById('big-pop-up-wrapper');
  if ($("#big-pop-up-wrapper").length !== 0){
    bigPopUpWrapper.style.display = "none";
  }
}
