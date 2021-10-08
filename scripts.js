$(document).ready(function(){

    var dropdown = document.querySelector(".dropdown-content");
    var dropdownBtn = document.querySelector(".dropdown-button");
    var boxes = document.getElementsByClassName("box");
    var maincontent = document.querySelector("#main-content");
    var x = false;
    
    function toggleDropDown() {
      x = !x;
      if (x == true) {
          dropdown.style.display = "block";
          dropdownBtn.style.backgroundColor = "CornflowerBlue";
      } else {
          dropdown.style.display = "";
          dropdownBtn.style.backgroundColor = "";
      }
    }
    function hideDropDown() {
      if (!event.target.matches('.dropdown-button')) {
        x = false;
        dropdown.style.display = "";
        dropdownBtn.style.backgroundColor = "";
      }
    }
    
    function toggleBox(obj) {
      //[0] makes it a javascript object and not a Jquery object
      let child = $(obj.currentTarget).children(".main")[0];
      if (child.style.height == "fit-content") {
        child.style.height = "";
      } else {
        child.style.height = "fit-content";
      }
    }
    
    $(dropdownBtn).click(toggleDropDown);
    window.onclick = hideDropDown;
    $(boxes).click(toggleBox);
    });