function pageOnload(){

}

function draw() {

  if(document.getElementById("drawImg").style.opacity == "1"){

    document.getElementById("drawImg").style.opacity = "0.75";

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
  } else {
    alert("天灵灵，地灵灵，不填信息可不行。\n注意填写的日期，期末佛脚签仅能透露2016年至2017年的考试玄机。");
  }
}

function redraw() {
  document.getElementById("formPage").style.display = "block";
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("subjectValue").value = "";
  document.getElementById("yearValue").value = "";
  document.getElementById("monthValue").value = "";
  document.getElementById("dayValue").value = "";
}

function textChange(id){
  if(id == "yearValue"){
    if(document.getElementById("yearValue").value != 6 &&
      document.getElementById("yearValue").value != 7){
        document.getElementById("yearValue").value = "";
      }
  }
  else if(id == "monthValue"){
    if( isNaN(document.getElementById("monthValue").value) ){
      document.getElementById("monthValue").value = "";
    }else if(document.getElementById("monthValue").value > 12 ||
      document.getElementById("monthValue").value < 1) {
        document.getElementById("monthValue").value = "";
      }
  }
  else if(id == "dayValue"){
    if( isNaN(document.getElementById("dayValue").value) ){
      document.getElementById("dayValue").value = "";
    }else if(document.getElementById("dayValue").value > 31 ||
      document.getElementById("dayValue").value < 1) {
        document.getElementById("dayValue").value = "";
      }
  }

  if(document.getElementById("nameValue").value != "" &&
      document.getElementById("subjectValue").value != "" &&
      document.getElementById("yearValue").value != "" &&
      document.getElementById("monthValue").value != "" &&
      document.getElementById("dayValue").value != ""){
      document.getElementById("drawImg").style.opacity = 1;
  }

}
