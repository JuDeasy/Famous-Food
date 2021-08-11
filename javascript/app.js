document.querySelector('.storeDetail .submenu').addEventListener('click', e => {
    if(e.target.nodeName === 'LI'){
      let id_value = e.target.dataset.link;
      document.querySelector(id_value).scrollIntoView({behavior : 'smooth'});
    }
  });

const FaHeart = document.querySelector(".heart");

function paintHeart(){
  if(FaHeart.classList.contains("redHeart")){
    FaHeart.classList.remove("redHeart");
    FaHeart.innerHTML = "<i class=\"far fa-heart\"></i>"
  } else{
    FaHeart.classList.add("redHeart");
    FaHeart.innerHTML = "<i class=\"fas fa-heart\"></i>"    
  }
}
FaHeart.addEventListener("click", paintHeart);