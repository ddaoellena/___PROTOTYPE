
window.onload = function() {
  window.panZoomMainGroup = svgPanZoom('#main-svg', {
    viewportSelector: '.timeline-svg-group',
    panEnable:false,
    zoomEnabled: false,
    controlIconsEnabled: false,
    disableZoom: true,
    fit: true,
    center: true,
  });
  panZoomMainGroup.disablePan();
  panZoomMainGroup.setMaxZoom(1);
};
function panTimeline(val) {
  panZoomMainGroup.pan({x:-((val/220)*viewWidth),y:0})
}

// function zoomTimeline(val) {
//   console.log(val);
//   panZoomMainGroup.zoom(-0.1*val);
// }
