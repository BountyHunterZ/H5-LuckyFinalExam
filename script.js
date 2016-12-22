function pageOnload(){

}

function draw() {
  document.getElementById("formPage").style.display = "none";
  document.getElementById("resultPage").style.display = "block";
  document.getElementById("resultDiv").style.height = document.getElementById("resultDiv").offsetWidth - 6;
}

function redraw() {
  document.getElementById("formPage").style.display = "block";
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("subjectValue").value = "";
  document.getElementById("yearValue").value = "";
  document.getElementById("monthValue").value = "";
  document.getElementById("dayValue").value = "";
}
