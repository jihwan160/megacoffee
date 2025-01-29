// // 풀스크롤
// const fullpage = document.getElementsByClassName('fullpage')[0];
// const container = document.getElementsByClassName('section');
// let page = 0;
// const lastPage = container.length - 1;

// window.addEventListener('wheel', (e) => {
//   e.preventDefault();

//   if(e.deltaY > 0) {
//     page++;
//   }
//   if(e.deltaY < 0) {
//     page--;
//   }
//   if(page < 0) {
//     page = 0;
//   }
//   if(page > lastPage) {
//     page = lastPage
//   }
//   console.log(e.deltaY);
//   fullpage.style.top = page * -100 + 'vh';
// }, {passive: false})

let currentIndex = 0;
const section = document.querySelectorAll('.section');
const gnbLinks = document.querySelectorAll('.fullpageGnb a');
let isScrolling = false;

gnbLinks.forEach((link,index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection(index);
  })
})

document.addEventListener('wheel', (ev) => {
  if(isScrolling) return;
  isScrolling = true;

  if(ev.deltaY > 0) {
    if (currentIndex < section.length - 1) {
      currentIndex++
    }
  } else {
    if(currentIndex > 0) {
      currentIndex--;
    }
  }

  scrollToSection(currentIndex);

  setTimeout(() => {
    isScrolling = false;
  }, 800);


});

function scrollToSection(index) {
  section[index].scrollIntoView({behavior: 'smooth'});
  currentIndex = index;
  updateGnb();
}

function updateGnb () {
  gnbLinks.forEach((link,index) => {
    if(index === currentIndex) {
      link.classList.add('active')
    } else {
      link.classList.remove('active');
    }
  })
}

updateGnb();











// 스와이퍼js와 index.js가 충돌이나서 DOMContentLoaded 을 하면 충돌안남
document.addEventListener('DOMContentLoaded', () => {
  // 스와이퍼 슬라이드이미지 여러개 만들기
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  // 이미지 배열
  const imgUrl = [
    '/img/main/slide1.jpg',
    '/img/main/slide2.jpg',
    '/img/main/slide3.jpg',
    '/img/main/slide4.jpg',
    '/img/main/slide5.jpg',
    '/img/main/slide6.jpg',
    '/img/main/slide7.jpg',
    '/img/main/slide8.jpg',
    '/img/main/slide9.jpg',
    '/img/main/slide10.jpg',
    '/img/main/slide11.jpg',
  ]

  imgUrl.forEach((url, index) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    const img = document.createElement('img');
    img.src = url;
    img.alt = `slide ${index + 1}`;

    slide.appendChild(img);
    swiperWrapper.appendChild(slide);
  })

  // 스와이퍼
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

  });
})

