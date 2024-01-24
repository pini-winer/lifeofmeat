function burger_init(){
  let burger_btn = document.querySelector("#burger_btn");
  let nav_burger = document.querySelector("#nav_burger");

  burger_btn.addEventListener("click", function(){
    if(nav_burger.className == "nav_bar"){
      nav_burger.className = "nav_bar nav_bar_inside"
      // nav_burger.style.display = "block";
    }
    else{
      nav_burger.className = "nav_bar";
      // nav_burger.style.display = "none";
    }
  })
}


burger_init();
