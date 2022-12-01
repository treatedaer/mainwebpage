
import React, { useRef, useState , useEffect } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import './vendors.css';

SwiperCore.use([Virtual, Navigation, Pagination,Autoplay]);

function Vendors() {
  useEffect(() =>{

     
    if(getDirection()=='vertical'){
      setslideperview(1)
 
     }
     else{
      setslideperview(3)
 
     }
  }, []);
  /*
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };








*/


const [slideperview, setslideperview] = useState(3);

/*
const handleMediaQueryChange = (matches) => {
  if(matches) {

    setresvendors('vertical')

  } else {

    setresvendors('horizontal')

  }

};

*/
  const partylist= 
  {
      servicelist:[

        {
          service:"DAIKIN",imglink:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/DAIKIN_logo.svg/1280px-DAIKIN_logo.svg.png',weblink:"https://www.daikinindia.com/"
        },
        {
          service:"Drivis",imglink:require('../imgs/drivis.png'),weblink:"https://luftek.in/"
        },
        {
          service:"luftek",imglink:"https://luftek.in/wp-content/uploads/2021/11/logo-dark.png",weblink:"https://luftek.in/"
        },
        {
          service:"maruthiengineeringsolutionstek",imglink:"https://maruthiengineeringsolutions.com/wp-content/uploads/2022/07/cropped-cropped-logo-300x97.png",weblink:"https://maruthiengineeringsolutions.com/"
        },
        {
          service:"cresco",imglink:"https://www.cresco.co.in/wp-content/uploads/2021/09/Cresco-New-2-768x357.png",weblink:"https://www.cresco.co.in/"
        },
        {
          service:"hitechtubes",imglink:"https://3.imimg.com/data3/BR/MR/MY-3316312/hi-tech-tubes-company-logo-120x120.png",weblink:"https://www.hitechtubes.co.in/"
        },
        {
          service:"bluestarindia",imglink:"https://www.bluestarindia.com/img/logo.png",weblink:"https://www.bluestarindia.com/"
        },
        {
          service:"airmaster",imglink:"https://airmaster.co.in/wp-content/uploads/2019/12/air-master-logo.png",weblink:"https://airmaster.co.in/"
        },
        {
          service:"krugerfan",imglink:"https://www.krugerfan.com/public/uploads/logo.png",weblink:"https://www.krugerfan.com/"
        },
        {
          service:"ostberg",imglink:"https://in.ostberg.com/wp-content/uploads/sites/23/2016/02/Oestberg_logo_web_default.png",weblink:"https://in.ostberg.com/our-products/fans/"
        },
       

      ]

  };



const slides=[];




      partylist.servicelist.map(serviceobj =>slides.push(<SwiperSlide key={`slide-${serviceobj.service}`}><a href={serviceobj.weblink} target="_blank"><div 
        style={
         {background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0.1%, rgba(0, 0, 0, 0)), url('${serviceobj.imglink}')`,
         backgroundSize: '50%',backgroundRepeat: 'no-repeat',backgroundPositionY:'50%, 50%',backgroundPositionX:'50%, 50%'
       }
     }
        className='desc'><div className='Vendorname'></div></div></a></SwiperSlide>) 

      )
/*
      partylist.servicelist.map(serviceobj =>slides.push(<SwiperSlide key={`slide-${serviceobj.service}`}><a href={serviceobj.weblink} target="_blank"><img src={serviceobj.imglink} ></img>
   
      <div className='desc'><div className='Vendorname'></div></div></a></SwiperSlide>) 

    )
    */
  
      function getDirection() {
        var windowWidth = window.innerWidth;
        if(window.innerWidth >= 1200){
          return 'horizontal'
        }
        else if(window.innerWidth < 1200 && window.innerWidth > 800){
          return 'middeverticalhor'
        }
        else{

          return 'vertical'
        }

       
      }
      window.addEventListener('resize', function(){
       let dir =getDirection(); 
       if(dir=='vertical'){

        setslideperview(1)
       }
       else if(dir=='middeverticalhor'){

        setslideperview(2)
       }
       else{

        setslideperview(4)

       }

      });
  return (
    <div id="vendors" className='Vendorscontainer'>
    <h1 className='sponcer_head'><div className="herearewe" >Here are our</div> <div className='venders_txt'>Partners</div></h1>
  
    <div className='Vendorsholder'>
<Swiper
    
        slidesPerView={slideperview}
        centeredSlides={false}
        spaceBetween={5}
        autoplay={{delay:80000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true}}
        direction={'horizontal'}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation={true}
        virtual
      >{slides}</Swiper>

</div></div>

  );

}

export default Vendors;