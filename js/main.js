
// welcome txt
const wel1 = document.querySelector(".top");
const wel2 = document.querySelector(".bottom");

// one
const one = document.querySelector(".one");
const oneItem = document.querySelector(".one-item");

// body
const body = document.body

// head
const headA = document.querySelectorAll(".head-menu");
const header = document.querySelector("header");

// pagenation
const pagenations = document.querySelectorAll(".pagenation span");

// text
const txt = document.querySelectorAll(".txt-fixed p");
const txtBox = document.querySelector(".txt-fixed");

// profile
const profileBox = document.querySelector(".profile1-box").offsetTop;

// project
const projectBox = document.querySelector(".project-box").offsetTop;
const projectHeigth = document.querySelector(".project-box").clientHeight;

// footer
const footerBox = document.querySelector(".footer").offsetTop;
const footerHeight = document.querySelector(".footer").clientHeight;

// 슬라이드
const projectAll = document.querySelector(".pc-slide")
const projectSlide = document.querySelector(".pc-mask");
const projectItems = document.querySelectorAll(".pc-item");
const arrow = document.querySelector(".pc-arrow");

// 슬라이드 헤드
const webSite = document.querySelector(".pc-website");
const front = document.querySelector(".pc-mini");
const app = document.querySelector(".pc-app");

// 슬라이드 전체 횟수
const page = document.querySelector(".pc-page");

// m-슬라이드
const MprojectAll = document.querySelector(".m-slide");
const MprojectSlide = document.querySelector(".m-mask");
const MprojectItems = document.querySelectorAll(".m-item");
const Marrow = document.querySelector(".m-arrow");

// m-슬라이드 헤드
const MwebSite = document.querySelector(".m-website");
const Mfront = document.querySelector(".m-mini");
const Mapp = document.querySelector(".m-app");

// m-슬라이드 전체 횟수
const Mpage = document.querySelector(".m-page");

const ww = window.innerWidth;


// 슬라이드 크기  + 움직이는 값
let margin = 100;
let itemWidth = projectItems[0].clientWidth + margin;


// 슬라이드 메인 카운트/트렌슬레이트
let projectCount = 0; //슬라이드 번호
let translate = 0; //슬라이드 위치값

let pagesCount = projectItems.length;
let pageCount =  1;


// m-슬라이드 크기  + 움직이는 값
let Mmargin = 100;
let MitemWidth = MprojectItems[0].clientWidth + margin;


// 슬라이드 메인 카운트/트렌슬레이트
let MprojectCount = 0; //슬라이드 번호
let Mtranslate = 0; //슬라이드 위치값

let MpagesCount = MprojectItems.length;
let MpageCount =  1;

const slide = (e)=>{
  // 슬라이드 메인
  
  e.preventDefault();
  console.log(projectCount)
  if(e.target.className === "right"){
    if(projectCount !== (projectItems.length/2)-1){
      translate -= itemWidth;
      projectSlide.style.transform = `translateX(${translate*2}px)`
      projectCount +=1;
      pageCount+=1;
    }
  }else if(e.target.className === "left"){
    if(projectCount !== 0){
      translate += itemWidth;
      projectSlide.style.transform= `translateX(${translate*2}px)`;
      projectCount -=1;
      pageCount-=1;
    }
  } 

  // 슬라이드 헤드 텍스트 바꿔주기
  if(projectCount===0){
    webSite.style.display = "block";
    front.style.display = "none";
    app.style.display = "none";
  }else if(projectCount === 1){
    webSite.style.display = "none";
    front.style.display = "block";
    app.style.display = "none";
  }else if(projectCount === 2){
    webSite.style.display = "none";
    front.style.display = "none";
    app.style.display = "block";
  }

  page.textContent = `${pageCount} / ${pagesCount/2}`
}

const mSlide= (e)=>{
  e.preventDefault()
  console.log(MprojectCount);
  if(e.target.className === "right"){
    if(MprojectCount !== MprojectItems.length-1){
      Mtranslate -= MitemWidth;
      MprojectSlide.style.transform = `translateX(${Mtranslate}px)`
      MprojectCount +=1;
      MpageCount+=1;
    }
  }else if(e.target.className === "left"){
    if(MprojectCount !== 0){
      Mtranslate += MitemWidth;
      MprojectSlide.style.transform= `translateX(${Mtranslate}px)`;
      MprojectCount -=1;
      MpageCount-=1;
    }
  } 

  // 슬라이드 헤드 텍스트 바꿔주기
  if(MprojectCount===0 || MprojectCount===1 ){
    MwebSite.style.display = "block";
    Mfront.style.display = "none";
    Mapp.style.display = "none";
  }else if(MprojectCount === 2 || MprojectCount == 3 ){
    MwebSite.style.display = "none";
    Mfront.style.display = "block";
    Mapp.style.display = "none";
  }else if(MprojectCount === 4 || MprojectCount === 5){
    MwebSite.style.display = "none";
    Mfront.style.display = "none";
    Mapp.style.display = "block";
  }

  Mpage.textContent = `${MpageCount} / ${MpagesCount}`
}


const topScroll = ()=>{
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height1 = document.documentElement.scrollHeight; 
  let height2 = document.documentElement.clientHeight;
  let height = height1 - height2
  let scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-bar").style.width = scrolled + "%";
}  


page.textContent = `${pageCount} / ${pagesCount/2}`
Mpage.textContent = `${MpageCount} / ${MpagesCount}`
arrow.addEventListener("click",slide);
Marrow.addEventListener("click",mSlide);

window.addEventListener("scroll",()=>{
  // area2~10
  const area2 = document.querySelector(".area2").offsetTop;
  const area7 = document.querySelector(".area7").offsetTop;
  const area8 = document.querySelector(".area8").offsetTop;
  const area9 = document.querySelector(".area9").offsetTop;
  const area10 = document.querySelector(".area10").offsetTop;

  const wt = window.pageYOffset;

  wel1.style.transform = `translate(${wt}px)`
  wel2.style.transform = `translate(${-wt}px)`
  
  topScroll()

  // area2 ~ area7
  if(area2>wt){
    oneItem.style.width = ``;
    oneItem.style.height = ``;
    one.style.opacity = 0;
    pagenations[0].classList.add("scale12");
    pagenations[0].classList.remove("scale12w");
    body.style.backgroundColor = "";
    header.classList.remove("main");
    headA.forEach((item)=>{
      item.classList.add("head-menu");
      item.classList.remove("head-menu2");
    })
  }
  else if(area2<=wt && area7 > wt){
    one.style.opacity = 1
    one.style.display = "flex"
    if(window.innerWidth <= 1000){
      // one.style.transform = `scale(${wt/120})`;
      oneItem.style.width = `${wt/4}px`;
      oneItem.style.height = `${wt/4}px`;
    }else{
      // one.style.transform = `scale(${wt/80})`;
      oneItem.style.width = `${wt/2.5}px`;
      oneItem.style.height = `${wt/2.5}px`;
    }
    body.style.backgroundColor = "";
    header.classList.remove("main");
    headA.forEach((item)=>{
      item.classList.add("head-menu");
      item.classList.remove("head-menu2");
    })
    pagenations[0].classList.add("scale12");
    pagenations[0].classList.remove("scale12w");
  }else if(area7< wt){
    body.style.backgroundColor = "#343434";
    one.style.display = "none";
    header.classList.add("main");
    headA.forEach((item)=>{
      item.classList.add("head-menu2");
      item.classList.remove("head-menu");
    })
    pagenations[0].classList.add("scale12w");
    pagenations[0].classList.remove("scale12");
 
  }

  // area7 ~ area10
  if((area7+(area2/2))<=wt && area8>wt){
    txt[0].style.opacity = 1
    txt[1].style.opacity = 0
    txt[2].style.opacity = 0
    txt[3].style.opacity = 0
    txt[4].style.opacity = 0
  }else if(area8<=wt && (area8+(area2/2))>wt){ 
    txt[0].style.opacity = 1
    txt[1].style.opacity = 1
    txt[2].style.opacity = 0
    txt[3].style.opacity = 0
    txt[4].style.opacity = 0
  }else if((area8+(area2/2))<=wt && area9>wt){
    txt[0].style.opacity = 1
    txt[1].style.opacity = 1
    txt[2].style.opacity = 1
    txt[3].style.opacity = 0
    txt[4].style.opacity = 0
  }else if(area9<=wt && (area9+(area2/2))>wt){
    txt[0].style.opacity = 1
    txt[1].style.opacity = 1
    txt[2].style.opacity = 1
    txt[3].style.opacity = 1
    txt[4].style.opacity = 0
  }else if((area9+(area2/2))<=wt && area10 > wt){
    txt[0].style.opacity = 1
    txt[1].style.opacity = 1
    txt[2].style.opacity = 1
    txt[3].style.opacity = 1
    txt[4].style.opacity = 1
  }else{
    txt.forEach((item)=>{
      item.style.opacity = 0;
    })
  }

  // ~ footer 까지
  if((area10+(area2/2))<=wt && projectBox-(area2/2)> wt){
    headA[0].classList.remove("border-color");
    headA[1].classList.add("border-color");
    headA[2].classList.remove("border-color");
    headA[3].classList.remove("border-color");

    pagenations[0].classList.remove("scale12w");
    pagenations[1].classList.add("scale12w");
    pagenations[2].classList.remove("scale12w");
    pagenations[3].classList.remove("scale12w");

  }else if(projectBox-(area2/2)<=wt && footerBox-(area2/2) > wt){
    headA[0].classList.remove("border-color");
    headA[1].classList.remove("border-color");
    headA[2].classList.add("border-color");
    headA[3].classList.remove("border-color");

    pagenations[0].classList.remove("scale12w");
    pagenations[1].classList.remove("scale12w");
    pagenations[2].classList.add("scale12w");
    pagenations[3].classList.remove("scale12w");
  }else if(footerBox-(area2/2) <= wt){
    headA[0].classList.remove("border-color");
    headA[1].classList.remove("border-color");
    headA[2].classList.remove("border-color");
    headA[3].classList.add("border-color");

    pagenations[0].classList.remove("scale12w");
    pagenations[1].classList.remove("scale12w");
    pagenations[2].classList.remove("scale12w");
    pagenations[3].classList.add("scale12w");
  }else{
    headA[0].classList.add("border-color");
    headA[1].classList.remove("border-color");
    headA[2].classList.remove("border-color");
    headA[3].classList.remove("border-color");

    pagenations[1].classList.remove("scale12w");
    pagenations[2].classList.remove("scale12w");
    pagenations[3].classList.remove("scale12w");
  }

});

window.onbeforeunload = function pushRefresh() {
  window.scrollTo(0, 0);
};


// headA click
headA[0].addEventListener("click",()=>{
  scrollTo({top: 0 , behavior:"smooth"});
})
headA[1].addEventListener("click",()=>{
  scrollTo({top: profileBox , behavior:"smooth"});
})
headA[2].addEventListener("click",()=>{
  scrollTo({top: projectBox , behavior:"smooth"});
  console.log(projectBox)
})
headA[3].addEventListener("click",()=>{
  scrollTo({top: footerBox+footerHeight , behavior:"smooth"});
})

// pagenations click 
pagenations[0].addEventListener("click",()=>{
  scrollTo({top: 0 , behavior:"smooth"});
})
pagenations[1].addEventListener("click",()=>{
  scrollTo({top: profileBox , behavior:"smooth"});
})
pagenations[2].addEventListener("click",()=>{
  scrollTo({top: projectBox , behavior:"smooth"});
})
pagenations[3].addEventListener("click",()=>{
  scrollTo({top: footerBox+footerHeight, behavior:"smooth"});
})

window.addEventListener("resize",(e)=>{
  
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // 모바일인 경우
    profileBox
    projectBox
    projectHeigth 
    footerBox
    footerHeight
  }else{
    window.addEventListener("mouseover",()=>{
        window.location.reload()
      })
    window.scrollTo(0, 0);
    profileBox
    projectBox
    projectHeigth 
    footerBox
    footerHeight
  }
})

AOS.init();






