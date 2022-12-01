// loding
const loding = document.querySelector(".loding");
const projectClick = document.querySelector(".profect-click");
const projectBack = document.querySelector(".back");
const projectNext = document.querySelector(".next");

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

// profile
const profile = document.querySelector(".profile");
// profile btn
const profileBtn = document.querySelector(".profile-btn");
const profileBtnP = document.querySelector(".profile-btn p");

const skills = document.querySelectorAll(".ski");
const skills2 = document.querySelectorAll(".ski2");

// text
const txt = document.querySelectorAll(".txt-fixed p");
const txtBox = document.querySelector(".txt-fixed");

// project
const projectBox = document.querySelector(".project-box").offsetTop;
const projectHeigth = document.querySelector(".project-box").clientHeight;
const project = document.querySelector(".project");
const slider = document.querySelector(".slider");
const s_wid = slider.offsetWidth;
const s_li = slider.querySelectorAll("li");
const innerBar = document.querySelector(".bar");

const projectFiexd = document.querySelector(".project-fiexd");
const projectItme = document.querySelectorAll(".project-item");
const projectXBtn = document.querySelectorAll(".x-btn");
let ww = window.innerWidth;

// wheel 이벤트 최대치
let s_move_max = (s_wid - (ww/1.5)) * -1

// 포지션값
let s_pos = 0;
let li_pos = 0;

// bar style수정
let pct = 0;

// profile count
let s1Count = 0;
let s2Count = 0;


/** 맨위 상단의 scroll gage함수**/
const topScroll = ()=>{
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height1 = document.documentElement.scrollHeight; 
  let height2 = document.documentElement.clientHeight;
  let height = height1 - height2
  let scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-bar").style.width = scrolled + "%";
}  

/**porject 가로스크롤**/
const moveSlider = (eDeltaY)=>{
  s_pos -= eDeltaY;
  if(s_pos < s_move_max){
    s_pos ===s_move_max;
    return ; 
  }else if(s_pos > 0){
    s_pos = 0;
    return ;
  }

  slider.style.transform = `translateX(${s_pos}px)`
  liUpdown(eDeltaY);
}

/**project li 움직임**/
const liUpdown = (eDeltaY)=>{
  li_pos += eDeltaY;
  
  for(let i = 0; i < s_li.length; i++){
    if(i%2 !==0 ){
      if(s_pos ===0){
        li_pos = 0
        s_li[i].style.transform = ``;
      }else{
        s_li[i].style.transform = `translateY(${li_pos / (i*6)}px) scale(1)`;
      }
    }else{
      if(s_pos ===0){
        li_pos = 0
        s_li[i].style.transform = ``;
      }else{
        s_li[i].style.transform = `translateY(${-li_pos / (i*6)}px) scale(1)`;
      }
  }
  }
}

/**project 아래 게이지**/
const onbar = () =>{
  pct = s_pos * 100 / s_move_max;
  innerBar.style.clipPath =`polygon(0% 0%, ${pct}% 0%, ${pct}% 100%, 0% 100%)`
}
/**project 가로스크롤 여기까지 **/


/** project tab menu **/
const menuTab = (item)=>{
  const tabTarget = item.currentTarget;
  const target = tabTarget.dataset.tab;
  s_li.forEach((menu)=>{
      menu.classList.remove("tab");
  })
  projectItme.forEach((ob)=>{
      ob.classList.remove("target");
  })
  document.querySelector("#"+target).classList.add("target");
  tabTarget.classList.add("tab");
  console.log(tabTarget)
};

/** 탭 서브메뉴 없애주는 함수 */
const subDlete = ()=>{
  projectFiexd.style.opacity = 0;
  projectFiexd.style.pointerEvents = "";
  s_li.forEach((menu)=>{
    menu.classList.remove("tab");
  })
  projectItme.forEach((item)=>{
    item.classList.remove("target");
  })
};

s_li.forEach((item)=>{
  item.addEventListener("click",(e)=>{
      projectFiexd.style.opacity = 1;
      projectFiexd.style.pointerEvents = "all";
      menuTab(e)
  });
})

projectXBtn.forEach((item)=>{
  item.addEventListener("click",subDlete)
})


// 숫자 올라가는 함수
skills.forEach((skill) => {
  skill.addEventListener("mouseover",()=>{
    const set = setInterval(()=>{
      s1Count+=1
      skill.innerHTML =`${s1Count}%`
      if(s1Count >=80){
        s1Count = 0;
        clearInterval(set)
      }
    },10)
  })
});

skills2.forEach((skill) => {
  skill.addEventListener("mouseover",()=>{
    const set = setInterval(()=>{
      s2Count +=1
      skill.innerHTML =`${s2Count}%`
      if(s2Count>=50){
        s2Count = 0;
        clearInterval(set)
      }
    },15)
  })
});

window.addEventListener("scroll",()=>{
  // area2~10
  const area2 = document.querySelector(".area2").offsetTop;
  const area7 = document.querySelector(".area7").offsetTop;
  const area8 = document.querySelector(".area8").offsetTop;
  const area9 = document.querySelector(".area9").offsetTop;
  const area10 = document.querySelector(".area10").offsetTop;
  const noise = document.querySelector(".noise");
  const old = document.querySelector(".old");

  const wt = window.pageYOffset;

  wel1.style.transform = `translate(${wt}px)`
  wel2.style.transform = `translate(${-wt}px)`
  
  topScroll()

  profile.classList.remove("up");
  if(wt === 0){
    header.style.top = "-80px"
    profileBtn.style.top = ""
    profileBtnP.style.fontSize = ""
    profile.style.top = ""
  }
  // area2 ~ area7
  if(area2>wt){
    oneItem.style.width = ``;
    oneItem.style.height = ``;
    one.style.opacity = 0;
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
    profileBtnP.style.color = ""
    old.style.opacity = "";
    noise.style.opacity = "";
    header.classList.remove("main");
    headA.forEach((item)=>{
      item.classList.add("head-menu");
      item.classList.remove("head-menu2");
    })
  }else if(area7< wt){
    body.style.backgroundColor = "#392f31";
    profileBtnP.style.color = "#fff"
    one.style.display = "none";
    old.style.opacity = "0.05";
    noise.style.opacity = "0.03";
    header.classList.add("main");
    headA.forEach((item)=>{
      item.classList.add("head-menu2");
      item.classList.remove("head-menu");
    })
 
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

  // ~ 끝까지
   if(projectBox-(area2/2)<=wt){
    headA[0].classList.remove("border-color");
    headA[1].classList.add("border-color");
  
  }else{
    headA[0].classList.add("border-color");
    headA[1].classList.remove("border-color");
  }
});

window.onbeforeunload = function pushRefresh() {
  window.scrollTo(0, 0);
};

window.addEventListener("wheel",(e)=>{
  const ed = e.deltaY
  if(ed > 0){
    header.style.top = "0" 
    profileBtn.style.top = "100px"
    profileBtnP.style.fontSize = "2rem"
    
  }else{
    body.classList.remove("stop-scroll");
  }
 
})

//profile
profileBtn.addEventListener("click",()=>{
  if(profile.className === "profile up"){
    profile.classList.remove("up");
    profileBtn.style.top = ""
  }else{
    profile.classList.add("up")
    profileBtn.style.top = "65%"
  }
})


// headA click
headA[0].addEventListener("click",()=>{
  scrollTo({top: 0 , behavior:"smooth"});
})
headA[1].addEventListener("click",()=>{
  scrollTo({top: projectBox , behavior:"smooth"});
})

// project wheel
project.addEventListener("wheel",(e)=>{
  e.preventDefault;
  moveSlider(e.deltaY);
  onbar();
});

// project click
projectClick.addEventListener("click",()=>{
  window.scrollTo({top:projectBox+projectHeigth, behavior:"smooth"})
  loding.style.right = "0"
  body.style.overflow= "hidden"
  header.style.opacity = 0
  header.style.pointerEvents = "none"
  setTimeout(()=>{
    loding.style.right = ""
    project.style.opacity = 1
    project.style.pointerEvents = "all"
  },3000);
});

projectBack.addEventListener("click",()=>{
  loding.style.right = "0"
  body.style.overflow= ""
  header.style.opacity = 1
  header.style.pointerEvents = ""
  setTimeout(()=>{
    loding.style.right = ""
    project.style.opacity = 0
    project.style.pointerEvents = ""
  },3000);
})


window.addEventListener("resize",(e)=>{
  
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // 모바일인 경우
    projectBox
    projectHeigth 
  }else{
    window.addEventListener("mouseover",()=>{
        window.location.reload()
      })
    window.scrollTo(0, 0);
    projectBox
    projectHeigth 
  }
})

AOS.init();






