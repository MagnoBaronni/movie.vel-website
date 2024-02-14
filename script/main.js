/**------Config Swiper-----**/
var swiper = new Swiper(".popular-content" ,{
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    breakpoints:{
       280:{ slidesPerView:1,
            spaceBetween:10,
       },
       320:{ slidesPerView: 2,
            spaceBetween: 10,
       },
       510:{ slidesPerView: 2,
        spaceBetween: 10,
       },
       758:{ slidesPerView: 3,
        spaceBetween: 15,
       },
       900:{ slidesPerView: 4,
        spaceBetween: 20,
       },
    },

  });

  //Show Video
   //Captura da Classes e IDs
  let myVideo = document.querySelector('#myvideo')
  let playButton = document.querySelector('.test')
  let video = document.querySelector('.video-container')
  let closebtn = document.querySelector('.close-video')

  //Atribuição e Captura de eventos 
  //Play Video
   playButton.addEventListener('click', play)
   function play(){
     video.classList.add("show-video")
    myVideo.play()
   }
   console.log(video)
   
   //Pause Video
   closebtn.addEventListener('click', close)
   function close(){
     video.classList.remove("show-video")
    myVideo.pause()
   }
 /*-----------------------------------------------*/ 
 /*playButton.onclik = () =>{
    video.classList.add("show-video")
    myVideo.play()
  }
   closebtn.onclik = () =>{
   video.classList.remove("show-video")
   myVideo.pause()
  }*/