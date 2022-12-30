import "./maincontent.css";
import { useState } from "react";
import { useBetween } from "use-between";
import NavControl from "./NavControl";
import Product_Display from "./Product_Display";
import Navbar from "./Navbar";
import SwiperCore, { Virtual, Navigation, Pagination,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from "react";
import { Helmet } from "react-helmet";
SwiperCore.use([Virtual, Navigation, Pagination,Autoplay]);



const Rightside = (props) => {
  const useSharednavbar = () => useBetween(NavControl);
  const [touchPosition, setTouchPosition] = useState(null);
  const { closenavfc, opennav } = useSharednavbar();
  // ...
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      closenavfc();
    }

    

    setTouchPosition(null);
  };

  useEffect(() => {
    closenavfc()
  
   
  }, [])
  


 
  /*<Product_Display product_details={product_display_holder}/>*/ 
  
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="rightside"
    >
   <Navbar/>
   {props.type=="quoteform" &&  <Product_Display product_details={props.product_display_Banner}/>}
   {props.type=="productdisplay" &&  <Product_Display product_details={props.product_display_Banner}/>}
   
  
   
   <Helmet>
<title>Get Quote Now - Treatedaer</title>
<meta
  name="description"
  content="Get the Most Affortable Quote in the market now"
/>

</Helmet>


   

    
   
       
      </div>
   
  );
};
export default Rightside;
