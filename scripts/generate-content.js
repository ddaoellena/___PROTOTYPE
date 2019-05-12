var titleTarget = document.getElementById('title');
var descTarget = document.getElementById('description');

function clearInfo(){
  titleTarget.innerHTML = '';
  descTarget.innerHTML = '';
}
function appendInfo(obj){
  clearInfo();
  titleTarget.innerHTML = obj.name;
  descTarget.innerHTML = obj.description;
}
