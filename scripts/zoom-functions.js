

window.onload = function() {
  // Expose to window namespase for testing purposes
  window.panZoomInstance = svgPanZoom('#main-svg', {
    viewportSelector: '.dot-grid',
    panEnable:false,
    zoomEnabled: false,
    controlIconsEnabled: true,
    fit: false,
    center: false,
    minZoom: 1,
    maxZoom: 2
  });
};
