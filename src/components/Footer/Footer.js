
import './footer.css';
const Footer =()=> {
    return(

     <footer>
<div className="row primary">
  <div className="column about">

  <h3>Treatedaer</h3>

   <p>
   Treatedaer is an Independent company specialized on 
   mechanical consulting.
  </p>


</div>

<div className="column links">
<h3>Our Partners</h3>

 <ul>
 <li>
   Daikin
  </li>
  <li>
   Cresco
  </li>
 <a href={"#/home#whyus"} ><li onClick={(e) => document.getElementById("whyus").scrollIntoView() } >
   And Many More
  </li></a>
 </ul>

</div>


<div class="column links">
  <h3>Contact Us</h3>
   <ul>
    <li>
     <a href="#faq">Phone</a>
     <div className='info'>+91 8489792955</div>
    </li>
    <li>
     <a href="#faq">Email</a>
     <div className='info'>treatedaer@gmail.com</div>
    </li> 
  </ul>
</div>

<div className="column links">


<div className="social-container2">
    <ul className="social-icons">
        <li><a href="https://instagram.com/treatedaer?igshid=YmMyMTA2M2Y="><i className="fa fa-instagram"></i></a></li>

        <li><a href=""><i className="fa fa-facebook"></i></a></li>
    </ul>
    </div>
</div>


</div>
<div className="website-builder-credits">
   Website Done and Maintained by Void it.
</div>
</footer> 


    )
}

export default Footer;
