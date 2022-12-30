import Rightside from '../Rightside/Topform';
import './Services.css';
import React, {  useEffect } from 'react';
import Footer from '../Footer/Footer';
import { Helmet } from "react-helmet";



function Ventilation() {
  const product_display_holder = 
  {
    mainhead:"Testing & Commisoning",
    subhead:"at Cheap Rates",
    product_list: [{
      topic:"",
      details:[
        "100% Commisioning works to be completed",
        "Annual Maintanance Service-",
        "Labour maintanance service" ],
       imglink:""
       
    }
    ]
  }
  useEffect(() => {  

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0

         },[]);
  return (
   <div>
    <div className='maintaince_container'><Rightside  type="productdisplay"  product_display_Banner={product_display_holder}/>
    <Helmet>

<title>Service and Maintaince - AC Services , Replacement & Installation  - Treatedaer</title>
<meta
  name="description"
  content="AC service cost vary based on problem, for AC installation, 
  uninstallation, general service, and deep cleaning we provide fixed 
  price on the website for AC repair we can provide quote after inspect 
  the AC unit. Find the complete AC service charges."
/>
</Helmet>
  
    
   
    </div>
    <Footer/>
    </div>
  );

}

export default Ventilation;