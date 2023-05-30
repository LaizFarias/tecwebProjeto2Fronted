import React, {useEffect} from "react";
import "./Logo.css"

function Logo(){
    const [show, setShow] = React.useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setShow(window.scrollY > 100);
      });
    }, []);
  
    return (
      <div className={`logo-container ${show && "logo-container-black"}`}>
        <img
          className="logo-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
        ></img>
        <img
          className="logo-avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
          alt="Deu Merda"
        ></img>
      </div>
    );
  }
  

export default Logo;