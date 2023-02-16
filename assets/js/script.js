// Create by Walter Gonçalves

// =========== Swiper slider ====================//
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    speed: 800,
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5000,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  
  var newSwiper = new Swiper(".carousel", {
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination-tho",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
 
  
// =========== MENU NAV ====================//

  const menuToggle = document.querySelector('.menu-toggle');

  menuToggle.addEventListener("click", function(){
      let menuNav = document.querySelector('.nav-sidebar');
      let menuIcon = document.querySelector('.menu-icon');
      if( menuNav.classList.contains('show') == true && menuIcon.classList.contains('close') == true ){
          menuNav.classList.remove('show');
          menuIcon.classList.remove('close');
      } else {
          menuNav.classList.add('show');
          menuIcon.classList.add('close');
      }
      
  });
  

// =========== TABS ====================
let tabs = document.querySelectorAll('.tab');
let tab_content = document.querySelectorAll('.tab-content');

  tabs.forEach((tab, index)=> {
        tab.addEventListener('click', ()=> {
            tab_content.forEach((tab_content)=>{
                tab_content.classList.remove('tb-active');
            });
            tabs.forEach( (tab)=>{
                tab.classList.remove('tb-active');
             });

             tab_content[index].classList.add('tb-active');
             tabs[index].classList.add('tb-active');
    })
  });

// =========== CARDS ====================
let cards = document.querySelectorAll('.cardid');
let card_content = document.querySelectorAll('.select');

  cards.forEach((cardid, index)=> {
        cardid.addEventListener('click', ()=> {
          card_content.forEach((card_content)=>{
                card_content.classList.remove('cd-active');
            });
            cards.forEach( (cardid)=>{
              cardid.classList.remove('cd-active');
             });
             cards[index].classList.add('cd-active');
    })
  });


// =========== Dropdown ====================
function dropdFunction() {
  document.getElementById("dropdown01").classList.toggle("dropdown-show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn-dropdown')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown-show')) {
        openDropdown.classList.remove('dropdown-show');
      }
    }
  }
}

// =========== Upload image Avatar ====================

document.getElementById('buttonid').addEventListener('click', openDialog);

function openDialog() {
  document.getElementById('fileid').click();
}

document.querySelector("#fileid").oninput = async (evt) => {
  try {
    const file = evt.target.files[0];
    const bitmap = await createImageBitmap(file);
    const canvas = document.querySelector("canvas");
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(bitmap, 0, 0);
  }
  catch(err) {
    console.error(err);
  }
};


