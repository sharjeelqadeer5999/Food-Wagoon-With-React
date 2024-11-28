import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import Howdoesitworkimg1 from "../../assets/img/Group.png";
import Howdoesitworkimg2 from "../../assets/img/Menu.png";
import Howdoesitworkimg3 from "../../assets/img/invoice.svg";
import Howdoesitworkimg4 from "../../assets/img/donut-1.svg";

function Howdoesitwork() {
    return (
        <section className="how-does-it-work">
        <h1>How does it work</h1>
        <div className="how-does-it-work-content">
          <div className="how-does-it-work-content-height">
        <div className="how-does-it-work-content-logo">
          <img src={Howdoesitworkimg1} alt="Select Location-logo" />
          <h5>Select Location</h5>
          <p>Choose the location where your food will be delivered.</p>
        </div>
      </div>
      <div className="how-does-it-work-content-height">
        <div className="how-does-it-work-content-logo">
          <img src={Howdoesitworkimg2} alt="Choose Order-logo" />
          <h5>Choose Order</h5>
          <p>Check over hundreds of menus to pick your favourite food.</p>
        </div>
      </div>
      <div className="how-does-it-work-content-height">
        <div className="how-does-it-work-content-logo">
          <img src={Howdoesitworkimg3} alt="Pay Advanced-logo" />
          <h5>Pay Advanced</h5>
          <p>It's quick, safe and simple. Select several methods of payments.</p>
        </div>
      </div>
      <div className="how-does-it-work-content-height">
        <div className="how-does-it-work-content-logo">
          <img src={Howdoesitworkimg4} alt="Enjoy-meals-logo" />
          <h5>Enjoy meals</h5>
          <p>Food is made and delivered directly to your home.</p>
        </div>
      </div>
      </div>
      </section>
    )
}

export default Howdoesitwork
