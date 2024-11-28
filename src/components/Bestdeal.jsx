import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import Bestdealimg from "../../assets/img/image-14@2x.png";

function Bestdeal() {
    return (
        <div className="best-deal">
        <img src={Bestdealimg} alt="best-deal-logo" />
       
       <div className="best-deal-content">
        <h1>Are you ready to order with the best deals?</h1>
        {/* <button><a href="#">PROCEED TO ORDER <SPan>&gt;</SPan></a></button> */}
       </div>
      </div>
    )
}

export default Bestdeal
