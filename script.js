function pageOnload(){

}

function draw() {
  document.getElementById("formPage").style.display = "none";
  document.getElementById("resultPage").style.display = "block";
  document.getElementById("resultDiv").style.height = document.getElementById("resultDiv").offsetWidth - 6;

  document.getElementById("result").src = "http://59.110.0.244/DrawMyLuck.aspx?name=" +
    document.getElementById("nameValue").value + "&subject=" +
    document.getElementById("subjectValue").value + "&year=201" +
    document.getElementById("yearValue").value + "&month=" +
    document.getElementById("monthValue").value + "&day=" +
    document.getElementById("dayValue").value;
  document.getElementById("result").style.height = document.getElementById("resultDiv").offsetWidth - 6;
  document.getElementById("result").style.width = document.getElementById("resultDiv").offsetWidth - 6;
}

function redraw() {
  document.getElementById("formPage").style.display = "block";
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("subjectValue").value = "";
  document.getElementById("yearValue").value = "";
  document.getElementById("monthValue").value = "";
  document.getElementById("dayValue").value = "";
}
