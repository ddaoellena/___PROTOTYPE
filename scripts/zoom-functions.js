
window.onload = function() {
  window.panZoomMainGroup = svgPanZoom('#main-svg', {
    viewportSelector: '.main-svg-group',
    panEnable:false,
    zoomEnabled: false,
    controlIconsEnabled: false,
    disableZoom: true,
    fit: true,
    center: true,
  });
  panZoomMainGroup.disablePan();
};
function panTimeline(val) {
  panZoomMainGroup.pan({x:-((val/220)*viewWidth),y:0})
}
// function zoomTimeline(val) {
//   console.log(val);
//   panZoomMainGroup.zoom(-0.1*val);
// }
