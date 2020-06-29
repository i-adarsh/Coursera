function verticalFullName() {
  var fullname = document.getElementById("fullname").value;
  if (fullname == "") {
    document.getElementById("output").innerHTML = "Please input a name.";
  } else {
    var i = 0;
    while (i < fullname.length) {
      document.getElementById("output").innerHTML += fullname[i] + "<br>";
      i++;
    }
  }
}
