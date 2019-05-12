/* script file for every function related website navigation */
/* declare global variables here */
var infoWrapperDiv = document.getElementById('info-wrapper');
var curtainDiv = document.getElementById('curtain-div');
function toggleInfoDiv(){

  if (infoWrapperDiv.classList[2] == 'collapsed') {
    infoWrapperDiv.classList.remove('collapsed');
    infoWrapperDiv.classList.add('expanded');
    infoWrapperDiv.style.bottom = "0%";
    curtainDiv.style.display = "block";
  }
  else if (infoWrapperDiv.classList[2] == 'expanded') {
    infoWrapperDiv.classList.remove('expanded');
    infoWrapperDiv.classList.add('collapsed');
    infoWrapperDiv.style.bottom = "-55%";
    curtainDiv.style.display = "none";
  }
}
