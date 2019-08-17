d3.select("#timeline-svg-group").call(d3.drag()
        .on("drag", panTimeline));

function panTimeline(d){
   var timeline = document.querySelector('#timeline-svg-group');
   timeline.style.transform = "translate(" + -d*14.8 + "px, " + topOffset + "px)";
   // console.log(d)
}

function getRangeValue(){
  var panSlider = document.querySelector('#pan-slider');
  return panSlider.value;
}

function setTimlinePos(){
  var currentValue = getRangeValue();
  panTimeline(currentValue);
}
