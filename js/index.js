// 풀스크롤

let currentIndex = parseInt(sessionStorage.getItem('currentIndex')) || 0;
const section = document.querySelectorAll('.section');
const gnbLinks = document.querySelectorAll('.fullpageGnb a');
let isScrolling = false;

window.addEventListener('load', () => {
  scrollToSection(currentIndex, false);
})

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

function scrollToSection(index, save = true) {
  section[index].scrollIntoView({behavior: 'smooth'});
  currentIndex = index;
  updateGnb();

  if(save) {
    sessionStorage.setItem('currentIndex', currentIndex);
  }
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

  // header fixed
  let header = document.querySelector('.header');
  let logo = document.querySelector('.logoImg');
  console.log(header);

  window.addEventListener('scroll', function () {
    if(window.scrollY > 50) {
      header.classList.add('headerFixed');
      logo.src = '/img/header/logo.png'
    } else {
      header.classList.remove('headerFixed');
      logo.src = '/img/header/logo_b.png'
    }
  })


  // 스와이퍼 슬라이드이미지 여러개 만들기
  const swiperWrapper = document.querySelector('.sec1 .swiper-wrapper');
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
  const swiper = new Swiper('.sec1 .swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

  });

    // 스와이퍼
    const swiper2 = new Swiper('.sec2 .swiper', {
      // Optional parameters
      // direction: 'vertical',
      autoplay : {
        delay : 5000,
      },
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
      navigation: {
        nextEl: '.sec2 .swiper-button-next',
        prevEl: '.sec2 .swiper-button-prev',
      },
  
    });

    document.querySelector('.sec2 .swiper-button-prev').addEventListener('click', () => {
      swiper2.autoplay.stop();
    })

    document.querySelector('.sec2 .swiper-button-next').addEventListener('click', () => {
      swiper2.autoplay.stop();
    })

    const swiperWrapper2 = document.querySelector('.right .swiper-wrapper');

    const imgUrl2 = [
      {
        img : 'img/main/sec2/slideImg1.jpg',
        alt : '왕메가 딸기라떼',
        title : '왕메가 딸기라떼',
        text : 'Big Mega Strawberry Latte',
        desc : ' 이보다 더 딸기가 많을 순 없다 왕메가사이즈에 듬뿍 넣은 딸기과육과 부드러운 우유의 핑크빛 하모니를 하루종일 느낄 수 있는 딸기시즌 한정 왕메가 딸기라떼',
      },
      {
        img : 'img/main/sec2/slideImg2.jpg',
        alt : '딸기젤라또 퐁당 프라페',
        title : '딸기젤라또 퐁당 프라페',
        text : 'Strawberry Gelato Frappe',
        desc : '딸기과육 듬뿍넣은 상큼한 딸기스무디에 부드러운 휘핑크림과 쫀득한 딸기젤라또를 올린 딸기시즌 한정 프라페',
      },
      {
        img : 'img/main/sec2/slideImg3.jpg',
        alt : '별빛가득 딸기 요구르트',
        title : '별빛가득 딸기 요구르트',
        text : 'Strawberry Yogurt',
        desc : ' 별빛이 흐르는 딸기코코젤리 다리를 건너 바람부는 딸기 숲을지나 언제나 나를 ~ 기다리는 상큼달콤 딸기 요구르트 품으로 쏘옥 들어간 딸기시즌 한정 요구르트',
      },
      {
        img : 'img/main/sec2/slideImg4.jpg',
        alt : '달콤상큼 딸기라임펀치',
        title : '달콤상큼 딸기라임펀치',
        text : 'Strawberry Lime Punch',
        desc : '받아라 달콤상큼 빔! 달콤한 딸기에 상큼한 라임과 향긋한 패션티를 더한 청량감이 매력적인 딸기시즌 한정 펀치음료',
      },
      {
        img : 'img/main/sec2/slideImg5.jpg',
        alt : '딸기요정 핑크 츄러스',
        title : '딸기요정 핑크 츄러스',
        text : 'Pink Churros',
        desc : '딸기요정이 솔솔 뿌리고 간 딸기설탕 묻은 바삭한 핑크 츄러스에 부드럽고 달콤한 화이트 초코 딥을 콕! 찍어먹는 딸기시즌 한정 디저트	',
      },
      {
        img : 'img/main/sec2/slideImg6.jpg',
        alt : '메가베리 아사이볼',
        title : '메가베리 아사이볼',
        text : 'Mega Berry Acai Bowl',
        desc : '상큼달콤 아사이볼 속에 세가지의 달콤한 베리와 건강한 그래놀라가 더해져 시원 달달하게 즐길 수 있는 딸기시즌 한정 디저트',
      },
      {
        img : 'img/main/sec2/slideImg7.jpg',
        alt : '노티드 메가 스마일 우유 케이크',
        title : '노티드 메가 스마일 우유 케이크',
        text : 'Knotted Mega Smile milk cake',
        desc : "노티드의 시그니처 '스마일 케이크'가 메가MGC커피에 떴다! 메가MGC커피와 노티드의 두번째 만남! 촉촉한 화이트 시트에 부드럽고 달콤한 우유크림을 레이어해 더욱 맛있게 즐기는 연말 파티 홀케이크",
      },
    ]

    imgUrl2.forEach((url) => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';

      const img = document.createElement('img');
      img.src = url.img;
      img.alt = url.alt;

      const text = document.createElement('div');
      text.className = 'textArea';

      const title = document.createElement('h2');
      title.className = 'title';
      title.textContent = url.title;

      const subtitle = document.createElement('p');
      subtitle.className = 'subTitle';
      subtitle.textContent = url.text;

      const desc = document.createElement('p');
      desc.className = 'desc';
      desc.textContent = url.desc;

      slide.appendChild(img);
      text.appendChild(title);
      text.appendChild(subtitle);
      text.appendChild(desc);

      slide.appendChild(text)
      swiperWrapper2.appendChild(slide);
    })
})

