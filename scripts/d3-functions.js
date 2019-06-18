function d3Init(table){
  svgReset();
  toggleInfoDiv(0);
  removeTagFilter()
  toggleInterfaceEl(panSliderGroup, 0);
  $("#menu-right-text").html("Zoom et légende&thinsp;:");
  if (table == peopleData) {
    toggleInterfaceEl(switchDiv,0);
    toggleInterfaceEl(plusSvgWrapper,1);
    cleanCircles();
    $('#placeholder-text').html('Cliquer sur une personnalité pour voir les liens');
  } else {
    toggleInterfaceEl(switchDiv,1);
    toggleInterfaceEl(plusSvgWrapper,0);
  }
  toggleZoomSlider(1);
  togglePlusSvg(0);
  cleanD3();
  removePopUp();
  turnOffLabels();
  cleanSvg();
  run(table);
  toggleFilterGroup(0);
  switch (table) {
    case memesData:
      setCurrentView(0);
      break;
    case peopleData:
      setCurrentView(2);
      break;
    case mediasData:
      setCurrentView(3);
      break ;
    default:
  }
  updateFocus(window[currentFocus]);
  resetD3Zoom();
}
var svg = d3.select("#main-svg");

function resetD3Cursor(){
  svg.style("cursor", "default");
}

function dragged(d) {
  d3.select("#d3-group").attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}
var zoom = d3.zoom()
  .scaleExtent([0.65, 1.35])
  .on("zoom", zoomed);

var input = d3.select("#zoom-slider").datum({})
            .attr("type", "range")
            .attr("min", zoom.scaleExtent()[0])
            .attr("max", zoom.scaleExtent()[1])
            .attr("step", (zoom.scaleExtent()[1] - zoom.scaleExtent()[0]) / 100)
            .attr("value", (zoom.scaleExtent()[1]+zoom.scaleExtent()[0])/2)
            .on("input", slided);;

function zoomed() {
  const currentTransform = d3.event.transform;
  d3.select("#d3-group").attr("transform", d3.event.transform);
  input.property("value", currentTransform.k);
}
function slided(d) {
    zoom.scaleTo(svg, d3.select(this).property("value"));
}
function resetD3Zoom(){
  svg.call(zoom.transform, d3.zoomIdentity);
  d3.select("#zoom-slider").datum({}).property("value", 1);
  d3.select("#d3-group").attr("transform", "translate(0,0)scale(1,1)");
}
// function reset
function run(graph) {
  var radius = 28;
  var radiusMed = 15;
  var radiusS = 10;

  const simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody().strength(-400))
      .velocityDecay(.3).alphaDecay(.1)
  		.force('charge', d3.forceManyBody()
        .strength(-2000)
        .theta(0.4)
        .distanceMax(300)
      );
  		// .force('collide', d3.forceCollide()
      //   .radius(d => 10)
      //   .iterations(1)
      // )
    if (graph == peopleData) {
      simulation.force("center", d3.forceCenter(vw / 2.5, vh / 4));
    } else {
      simulation.force("center", d3.forceCenter(vw / 2.5, vh / 2));
    }

  svg.attr("width", vw*2).attr("height", vh*2).attr("viewBox", '0 0 ' + vw*2 + " " + vh*2);
  svg.style("cursor", "grab");
  svg.on("click", function(){if (d3.event.defaultPrevented) return;})
  svg.call(zoom).on("dblclick.zoom", null);

  var defs = d3.select("#main-svg-defs");

  var newsPattern = defs.append("pattern").attr("width", 1).attr("height", 1).attr('id', 'news-icon');
  var newsImage = newsPattern.append("image").attr('href', './assets/pics/navigation/newspaper.svg').attr('height', radiusMed*1.5).attr('width', radiusMed*1.5).attr('x', radiusMed/4).attr('y', radiusMed/4);
  var wikiPattern = defs.append("pattern").attr("width", 1).attr("height", 1).attr('id', 'wiki-icon');
  var wikiImage = wikiPattern.append("image").attr('href', './assets/pics/navigation/wiki.svg').attr('height', radiusMed*1.5).attr('width', radiusMed*1.5).attr('x', radiusMed/4).attr('y', radiusMed/4);
  var videoPattern = defs.append("pattern").attr("width", 1).attr("height", 1).attr('id', 'video-icon');
  var videoImage = videoPattern.append("image").attr('href', './assets/pics/navigation/video.svg').attr('height', radiusMed*1.5).attr('width', radiusMed*1.5).attr('x', radiusMed/4).attr('y', radiusMed/4);
  var sitePattern = defs.append("pattern").attr("width", 1).attr("height", 1).attr('id', 'site-icon');
  var siteImage = sitePattern.append("image").attr('href', './assets/pics/navigation/website.svg').attr('height', radiusMed*1.5).attr('width', radiusMed*1.5).attr('x', radiusMed/4).attr('y', radiusMed/4);
  var radioPattern = defs.append("pattern").attr("width", 1).attr("height", 1).attr('id', 'radio-icon');
  var radioImage = radioPattern.append("image").attr('href', './assets/pics/navigation/radio.svg').attr('height', radiusMed*1.5).attr('width', radiusMed*1.5).attr('x', radiusMed/4).attr('y', radiusMed/4);

  var popUpCurtain = svg.append("rect").attr("width", vw).attr("height", vh).attr('class', 'big-pop-up-curtain').attr('id', 'big-pop-up-curtain').attr('onclick','turnOffD3Div(); turnOffLinks(); toggleInfoDiv(0);');
  var circlePaths = svg.selectAll('clipPaths')
                      .data(graph.nodes.filter(function(d){return typeof d.img !== "undefined";})).enter()
                      .append('clipPath')
                      .attr("id", function(d){return "circlepath-" + d.id})
                      .append('circle');

  var d3Group = svg.append("g").attr("class", "d3-group").attr("id", "d3-group");

  var link = d3Group.append("g").attr("class", "link-group")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line").style("cursor", "default");

  var nodeGroup = d3Group.append("g")
                     .attr("class", "node-group")
                     .selectAll("circle");

  var filterNodesGroup = d3Group.append("g")
                      .attr("class", "filter-nodes-group")
                      .selectAll("circle").data(graph.nodes.filter(function(d){return d.mainNode == true;})).enter();

  var filterGroup = filterNodesGroup.append("g").attr("class", function(d){return "filter-group filter-group-"+d.id}).attr("id", function(d){return "filter-group-"+d.id});

  var blurNode = nodeGroup.data(graph.nodes).enter().append("circle")
                        .attr("class", function(d){
                          if (typeof d.parent !== "undefined") {
                            return "blur-circle "+ d.type+"-blur " + d.parent+"-blur"
                          }
                          else {
                            return "blur-circle "+ d.type+"-blur main-node-blur"
                          }
                        })
                        .attr("id", function(d){if (d.mainNode == true) {
                          return d.id+"-blur"
                        }})
                        .attr("data-tag", function(d){if(d.mainNode == true) {
                          return window[d.objToString].tagClass + '-blur'
                        }})
                        .attr("r", 2)

 var node = nodeGroup.data(graph.nodes).enter().append("circle")
                .attr("class", function(d){
                  if (d.mainNode == true) {
                    return "circle-node parent-circle-node circle-node-"+d.type
                  } else {
                    return "circle-node circle-node-"+d.type
                    }
                  })
                .attr("r", 2);

 var patternNode = nodeGroup.data(graph.nodes.filter(function(d){return typeof d.subType !== "undefined";})).enter().append("circle")
                        .attr("class", function(d){
                          if (typeof d.parent !== "undefined") {
                            return "pattern-circle "+ d.type+"-pattern " + d.parent+"-pattern pointer"
                          } else {
                            return "pattern-circle "+ d.type+"-pattern pointer"
                          }
                        })
                        .on("click", function(){if (d3.event.defaultPrevented) return;})
                        .attr("r", 2);

 var tooltip = d3.select("body")
                .append("div")
                .attr("class", "tooltip");

 var tooltipText =  tooltip.append("p").attr("class", "tooltip-text tooltip-title").html("");
 var tooltipLabel =  tooltip.append("p").attr("class", "tooltip-text tooltip-label").html("");
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
 var popUpImgDiv = popUp.append("div").attr("class", "big-pop-up-img-div");
 var popUpImg = popUpImgDiv.append("img").attr("class", "big-pop-up-img");

 link.on("mouseover", function(d){
        if (typeof d.linkDesc !== "undefined") {
          tooltipText.html(d.linkDesc);
          switch (d.type) {
            case "neutral":
              tooltipLabel.html("Lien neutre");
              break;
            case "bad":
              tooltipLabel.html("Lien de conflit");
              break;
            case "good":
              tooltipLabel.html("Lien d'intérêt");
              break;
            default:
          }
          d3.select(this).style("stroke-width", function(d){return d.weight*1}).attr('opacity', "1");
          return tooltip.style("visibility", "visible");
        }
       })
       .on("mousemove", function(){
            return tooltip.style("left",(event.pageX+10)+"px").style("top", (event.pageY+10)+"px");
        })
       .on("mouseout", function(){
         link.style("stroke-width", function(d){return d.weight*0.5}).attr('opacity', "0.25");
         return tooltip.style("visibility", "hidden");
         });


 patternNode.on("mouseover", function(d){
        tooltipText.html(d.author);
        switch (d.subType) {
          case "news":
            tooltipLabel.html("Article de presse");
            break;
          case "wiki":
            tooltipLabel.html("");
            break;
          case "site":
            tooltipLabel.html("Site internet");
            break;
          case "radio":
            tooltipLabel.html("Émission radio");
            break;
          default:
        }
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
                .attr("id", function(d){return d.id+"-img"})
                .attr("class", "image-node pointer")
                .attr("data-tag", function(d){if(d.mainNode == true) {
                  return window[d.objToString].tagClass + '-img'
                }})
                .call(d3.drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended));

  imgs.on("mouseover", function(d){
          if (typeof d.name !== "undefined") {
            tooltipText.html(d.name);
            switch (d.type) {
              case "meme":
                tooltipLabel.html("Meme");
                break;
              case "site":
                tooltipLabel.html("Site");
                break;
              case "people":
                tooltipLabel.html("Personnalité");
                break;
              default:
            }
            return tooltip.style("visibility", "visible");
          }
        })
        .on("click", function(){if (d3.event.defaultPrevented) return;})
        .on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
        .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
        .attr("data-id", function(d){return d.id})

  var filterNode = filterGroup.append("circle").attr('class', function(d){
                        return "circle-filter circle-filter-"+d.id
                      });

  // var filterBlur = filterGroup.append("circle").attr('class', function(d){
  //                       return "blur-filter blur-filter-"+d.id
  //                     });

  // var filterClip = svg.selectAll('clipPaths').data(graph.nodes.filter(function(d){return d.mainNode == true;})).enter()
  //                     .append('clipPath')
  //                     .attr("id", function(d){return "filter-clip-" + d.id})
  //                     .append('circle');
  // var filterImg = filterGroup.append("image").attr("clip-path",function(d){return "url('#filter-clip-" + d.id +"')"})
  //                     .attr('class', function(d){
  //                       return "image-filter circle-filter-"+d.id
  //                     });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    circlePaths
        .attr('r',function(d){
          switch (d.size) {
            case "big":
               return radius
              break;
            case "medium":
               return radiusMed
              break;
            case "small":
               return radiusS
              break;
            default:
          }
        })
        .style("fill", "#FFFFFF")
        .attr("cx", function (d) { return d.x+5; })
        .attr("cy", function(d) { return d.y-3; });

    link
        .attr("class", function(d){
            return "node-link link-"+d.source.id + " link-"+d.target.id
          })
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
        .attr('opacity', "0.25");

    blurNode
      .attr("r", function(d){
        switch (d.size) {
          case "big":
             return radius+radius/10
            break;
          case "medium":
             return radiusMed
            break;
          case "small":
             return radiusS
            break;
          default:
        }
      })
      .attr("fill", function(d){
        switch (d.type) {
          case "meme":
            return "#FFFFFF"
            break;
          case "people":
            return "#FF83D5"
            break;
          case "site":
            return "#FFC683"
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
           case "small":
              return radiusS
             break;
           default:
         }
       })
       .style("fill", function(d){
         switch (d.type) {
           case "meme":
              return '#000000'
             break;
           case "people":
             return "#d1d1d1"
             break;
           case "site":
             return "#d1d1d1"
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
           case "people":
             return "#FF83D5"
             break;
           case "media":
              return '#000000'
             break;
           default:
         }
       })
       .attr("stroke-width", "1px")
       .attr("cx", function (d) { return d.x+5; })
       .attr("cy", function(d) { return d.y-3; });

    patternNode.attr("r", radiusMed).style("fill", function(d){
      switch (d.subType) {
        case "news":
           return 'url(#news-icon)'
          break;
        case "wiki":
           return 'url(#wiki-icon)'
          break;
        case "video":
           return 'url(#video-icon)'
          break;
        case "site":
           return 'url(#site-icon)'
          break;
        case "radio":
           return 'url(#radio-icon)'
          break;
        default:
      }
    }).attr("cx", function (d) { return d.x+5; })
    .attr("cy", function(d) { return d.y-3; });

    imgs
       .attr("onclick", function(d){if (typeof d.objToString !== "undefined") {
         if (d.type == "people") {
            return "addPlusCircle("+d.objToString+", 1);appendPlusInfo("+d.objToString+");displayLinks(this); turnOffD3Div();"
         } else {
            return "toggleInfoDiv(1);appendInfo("+d.objToString+");displayLinks(this); turnOffD3Div();"
         }
        }
       })
       .attr("href", function(d){
          if (d.mainNode == true) {
           return d.folder+d.img
          }
         })
       .attr("width",function(d){
         switch (d.size) {
           case "big":
             return radius*2
             break;
           case "medium":
             return radiusMed*2
             break;
           case "small":
              return radiusS*2
             break;
           default:
         }
       })
       .attr("height",function(d){
         switch (d.size) {
           case "big":
             return radius*2
             break;
           case "medium":
             return radiusMed*2
             break;
           case "small":
              return radiusS*2
             break;
           default:
         }
       })
       .attr("x", function (d) {
         switch (d.size) {
           case "big":
             return d.x-radius+5;
             break;
           case "medium":
            return d.x-radiusMed+5;
             break;
           case "small":
            return d.x-radiusS+5;
             break;
           default:
         }
      })
       .attr("y", function(d) {
         switch (d.size) {
           case "big":
             return d.y-radius-3;
             break;
           case "medium":
            return d.y-radiusMed-3;
             break;
           case "small":
            return d.y-radiusS-3;
             break;
           default:
         }
       });

    filterNode
        .attr('r', radiusS)
        .style("opacity", 1)
        .attr("cx", function (d) { return d.x+5; })
        .attr("cy", function(d) { return d.y-radius*2+5; });

    // filterBlur
    //      .attr('r', radiusS*0.75)
    //      .style("opacity", 1)
    //      .attr("cx", function (d) { return d.x+5; })
    //      .attr("cy", function(d) { return d.y-radius*2+5; })
    //      .attr("filter", "url('#fBlurSmall')");

   // filterClip
   //     .attr('r', radiusS)
   //     .style("fill", "#FFFFFF")
   //     .attr("cx", function (d) { return d.x+5; })
   //     .attr("cy", function(d) { return d.y-radius*2+5; });

    // filterImg
    //     .attr('height', radiusS*2)
    //     .attr('width', radiusS*2)
    //     .attr("x", function (d) { return d.x+5-radiusS; })
    //     .attr("y", function(d) { return d.y-radius*2+5-radiusS; });
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
    if (typeof d.imgPopUp !== "undefined") {
      popUpImgDiv.style("display", "block");
      popUpImg.attr("src", function(){return './assets/pics/screenshots/'+d.folder+'/'+d.imgPopUp+'.png'});
    }
    if (d.subType == "video") {
      popUpImgDiv.style("display", "none");
      var popUpIframe = popUp.append("iframe").attr("class", "big-pop-up-iframe").attr("id", "big-pop-up-iframe").attr("width", "500").attr("height", "315").attr("frameborder", "0");
      popUpIframe.attr("src", function(){return d.src});
    }
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

  if ($(".big-pop-up-iframe").length !== 0) {
    $(".big-pop-up-iframe").remove();
  }

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

function toggleFilterGroup(a){
  var filterGroups = document.getElementsByClassName('filter-group');
  for (var i = 0; i < filterGroups.length; i++) {
    switch (a) {
      case 0:
        filterGroups[i].style.visibility= "hidden";
        break;
      case 1:
        filterGroups[i].style.visibility= "visible";
        break;
      default:
    }
  }
}
