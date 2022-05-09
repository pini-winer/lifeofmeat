window.onload = function(){
  createVipPics();
}

const createVipPics = function(){
  vipJson_ar.forEach(function(item){
    console.log(item);
    createImg(item.image,item.name);
  })
  lightBox_init()
}

const createImg = function(_src,_alt) {
  let id_row = document.querySelector("#id_row");
  id_row.innerHTML += `
  <div class="col-lg-3 my-2">
  <img data-img src="${_src}" class="w-100 img-thumbnail" alt="${_alt}" >
  </div>
  `
}