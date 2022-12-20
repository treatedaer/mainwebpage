
import ResNav from "./ResNav";
import React,{  useEffect ,useState} from "react";
import whatsapp from "../imgs/WhatsApp_icon.png"
import whatsapp_chatwithus from "../imgs/wa_chatwithus.png"
import sheduleameeting from "../imgs/schedule_meeting.png"
import thclogo from "../imgs/tac1logo.png"
import banner_3 from "../imgs/banner_3.jpg"
import { useLocation } from 'react-router-dom';
import SwiperCore, { Virtual, Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from "../imgs/banner_1.jpg";
import banner2 from "../imgs/banner_2.jpg";
import banner1mobile from "../imgs/banner_1_mobile.jpg";
import banner2mobile from "../imgs/banner_2_mobile.jpg";
import banner3mobile from "../imgs/Banner_mobile_banner3.jpg"
import { useBetween } from "use-between";
import NavControl from "./NavControl";


SwiperCore.use([Virtual, Navigation, Pagination,Autoplay]);


const servicelistnavbarmain = [
  {
    values: [
    ],
    name: "Home",
    link: "Home",
  },
  {
    values: [
      "Car parking Area",
      "Basement",
      "Electrical Panel Room",
      "Restroom",
    ],
    name: "Ventilation",
    link: "Ventilation",
  },
  {
    values: [
      "Hospitals",
      "Residence",
      "Shopping Malls",
      "Server Area",
      "Pharmacy",
    ],

    name: "Cooling",
    link: "Cooling",
  },
  {
    values: [
      "Commisioning works to be completed",
      "Annual Maintanance Service",
      "Labour maintanance service ",
    ],
    imglink: require("../imgs/handShake.jpg"),
    name: "Service and Maintaince",
    link: "Maintaince_Repair",
  },
];

const partylist= 
  {
      servicelist:[
  
        {
          service:"Get In touch",link:banner1,bgcolor:"white",link_mobile:banner1mobile
        },
        {
          service:"Future",link:banner2,bgcolor:"#03142e",link_mobile:banner2mobile
        }
        ,
        {
          service:"OfferBanner",link:banner_3,bgcolor:"#03142e",link_mobile:banner3mobile
        }
      ]
  
  };

const Product_display = (props) => {
  const [slideperview, setslideperview] = useState(1);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [weekdayquote, setWeekdayquote] = useState(null);
  const productdetail = props.product_details;
  const location = useLocation()
  const useSharednavbar = () => useBetween(NavControl);
  const { opennavfc, closenavfc, opennav } = useSharednavbar();

  const openclosenav=()=>{
   if(opennav.enable){
     closenavfc()
   }
   else{
     opennavfc()
   }
  }
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  const slides=[];
  
  
  
  
        partylist.servicelist.map(serviceobj =>slides.push(<SwiperSlide key={`slide-${serviceobj.service}`}><img src={windowSize.innerWidth>673?serviceobj.link:serviceobj.link_mobile} 
         
          className='desc'></img></SwiperSlide>) 
  
        )
 /*
 
      partylist.servicelist.map(serviceobj =>slides.push(<SwiperSlide key={`slide-${serviceobj.service}`}><div 
          style={
           {background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0.1%, rgba(0, 0, 0, 0)), url('${windowSize.innerWidth>800?serviceobj.link:serviceobj.link_mobile}')`,
           backgroundSize: '100%',backgroundRepeat: 'no-repeat',backgroundPositionY:'50%, 50%',backgroundPositionX:'50%, 50%',backgroundColor:serviceobj.bgcolor
         }
       }
          className='desc'><div className='Vendorname'></div></div></SwiperSlide>) 
  
        )
 
 
 
 
 
 
 
 
 
 position: absolute;
top: 10px;
right: 15px;
margin-top: 4px;
z-index: 5;
width: 90px;

margin-top: 160px;
 */
  useEffect(() => {
     closenavfc()
      document.getElementsByClassName("What we offer?").length>0 &&
      document.getElementsByClassName("What we offer?")[0].addEventListener("click",()=>{
      document.getElementById("servicelist").scrollIntoView();
      const element = document.createElement("div");
      element.className = "highlight_background";

      document.getElementsByClassName("serviceholder")[0].parentElement.appendChild(element)
      setTimeout(()=>{document.getElementsByClassName("serviceholder")[0].classList.add("highlight");}, 500);
      
      setTimeout(()=>{
          document.getElementsByClassName("highlight_background")[0].style.opacity=0;
          document.getElementsByClassName("highlight_background")[0].style.opacity=0;
          setTimeout(()=>{

            document.getElementsByClassName("highlight_background")[0].remove()

            document.getElementsByClassName("serviceholder")[0].classList.remove("highlight")
            document.getElementsByClassName("serviceholder")[0].classList.remove("highlight")
            document.getElementsByClassName("highlight_background")[0].remove()


          },500);
      
      
      }, 2000);  

         
       })
 


       const weekday = ["A Sunday Well Spent Brings a week of concept",
                        "Make each day a master piece",
                         "Work Hard in Silence, Let success make the noise",
                         "Oppurtunities dont happen, You create them",
                         "Stay in your lane, comparison kills creativity ",
                         "Your Patience is your power",
                         "Done is better than perfect"
                        ];

       const d = new Date();
       setWeekdayquote(weekday[d.getDay()])
       

     
       function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
      
   },[]);
console.log(productdetail)
  return (
     
    <div>
     
      <center>
      <img 
      
        src={thclogo} className="logoimg"
        />
        <h1 className="company_name">Treatedaer</h1>
    <div className={windowSize.innerWidth>800?"navitem-holder":"navitem-holder mobile"}>
    <div className="phone_holder meeting_desktop_img_holder"><a href="#/Book_a_meeting" >{windowSize.innerWidth>800?<img className="whatsapp_img" src={sheduleameeting}/>:<img className="whatsapp_img_mobile shcedulemeeting" src={sheduleameeting}/>}</a></div>
        <div className="navitemsholder">

        
        {servicelistnavbarmain.map((item2)=>(
          <div className="item">
           <div className="item_a_conatiner"> <a onClick={closenavfc} href={"#/"+item2.link}>{item2.name}</a></div>
          <div className="navitemsection">
          {
          item2.values.map((item) => (
          <div className="navitem_subsection">
              
              <a item={item.replace(/ /g,"_")} onClick={(e) => document.getElementById(e.target.getAttribute("item")).scrollIntoView() } href={"#/"+item2.link + "#" + item.replace(/\s/g,"_")}>
                {item}
              </a>
         
          </div>
        )
        
        
        )}
         
        </div>
        </div>
        )
        )
        
        
        }
 
        </div>
        <div className="phone_holder"><a href="https://wa.me/918489792955" target="_blank">{windowSize.innerWidth>800?<img className="whatsapp_img" src={whatsapp_chatwithus}/>:<img className="whatsapp_img_mobile" src={whatsapp}/>}</a></div>
</div>
{location.pathname=="/Home" ? 
      <Swiper
    
    slidesPerView={slideperview}
    centeredSlides={true}
    spaceBetween={5}
    autoplay={{delay:15000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true}}
    direction={'horizontal'}
    modules={[Pagination]}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    navigation={true}
    virtual
  >{slides}</Swiper>:null}
     
    </center>
      <center>





     







{location.pathname=="/home"?<h1>{productdetail.mainhead}</h1>:<h1 className="h1_otherthanhome" >{productdetail.mainhead}</h1>}
        <h2 className={productdetail.subhead}>{productdetail.subhead}</h2>
        <div className="item">
           <div> <a onClick={closenavfc} href="#/quoteform">Get Product</a></div>
           </div>
      </center>

      <div className="imgbanner">
        
      <ResNav />
      
     


      
     
          
        {productdetail.product_list.map((products,i) => (
          <div className="product_display_holder"  style={{ 
            backgroundImage: "url('"+products.bgimg+"')"
          }} >
            {products.imglink.length==0?null:<img width={250} src={products.imglink}></img>}
            <div  className={products.imglink.length==0?"products_holder noimgstyle":"products_holder"}>
            <h2>   {products.main_topic_link==0?products.topic:<a href={"/"+products.main_topic_link}>{products.topic}</a>}</h2>
              {products.details.map((details_point) => (
               
                <div  className="product_name">{details_point}</div>
              ))}
              <button value={products.topic} onClick={(e) => window.location.href='#/quoteform?_q='+e.target.value} >Get Quote</button>
            </div>
          </div>
        ))}
         </div>
      </div>

    
  );
};
export default Product_display;
