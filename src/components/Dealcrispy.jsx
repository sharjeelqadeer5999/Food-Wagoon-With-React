import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import Dealcrispyimg1 from "../../assets/img/right@2x.png";
import Dealcrispyimg2 from "../../assets/img/right-1@2x.png";
import Dealcrispyimg3 from "../../assets/img/right-2@2x.png";

function Dealcrispy() {
    return (
        <div className="deal-crispy">
      <div className="deal-crispy-flex-gap">
      <div className="deal-crispy-flex">
      <div className="deal-crispy-content">
        <h1>Best deals <span>Crispy Sandwitches</span></h1>
        <p>Enjoy the large size of Sandwitches. Complete perfect slice of Sandwitches.</p>
        {/* <button><a href="#">PROCEED TO ORDER <SPan>&gt;</SPan></a></button> */}
      </div>
      <img src={Dealcrispyimg1} alt="deal-crispy-logo" />
    </div>
    <div className="deal-crispy-flex flex-order-two">
      <div className="deal-crispy-content">
        <h1>Celebrate parties with <span>Fried Chicken</span></h1>
        <p>Get the best fried chicken smeared with a lip smacking lemon chilli flavor. Check out best deals for fried chicken.</p>
        {/* <button><a href="#">PROCEED TO ORDER <SPan>&gt;</SPan></a></button> */}
      </div>
      <img src={Dealcrispyimg2} alt="deal-crispy-logo" />
    </div>
    <div className="deal-crispy-flex">
      <div className="deal-crispy-content">
        <h1>Wanna Eat Hot & Spicy <span>Pizza?</span></h1>
        <p>Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.</p>
        {/* <button><a href="#">PROCEED TO ORDER <SPan>&gt;</SPan></a></button> */}
      </div>
      <img src={Dealcrispyimg3} alt="deal-crispy-logo" />
    </div>
    </div>
     </div>
    )
}

export default Dealcrispy
