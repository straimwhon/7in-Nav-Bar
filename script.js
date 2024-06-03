function toggleDrawer() {
    var drawer = document.getElementById("myDrawer");
    var container = document.querySelector(".container");
    container.classList.toggle("change");
    if (drawer.style.width === "50%") {
      drawer.style.width = "0";
    } else {
      drawer.style.width = "50%";
      drawer.innerHTML = "<span class='close' onclick='closeDrawer()'>&times;</span>" + drawer.innerHTML;
    }
  }
  
  function closeDrawer() {
    var drawer = document.getElementById("myDrawer");
    var container = document.querySelector(".container");
    container.classList.toggle("change");
    drawer.style.width = "0";
  }
  