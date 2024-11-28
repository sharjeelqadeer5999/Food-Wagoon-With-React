import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import Installtheappimgframe from "../../assets/img/Background.png";
import Installtheappimgdailydiscount1 from "../../assets/img/icon.svg";
import Installtheappimgdailydiscount2 from "../../assets/img/icon-1.svg";
import Installtheappimgdailydiscount3 from "../../assets/img/icon-2.svg";
import Installtheappimginstall1 from "../../assets/img/google-play-download@2x.png";
import Installtheappimginstall2 from "../../assets/img/app-store-download-button.svg";
import Installtheappimgyourorder from "../../assets/img/image-13@2x.png";

function Installtheapp() {
    return (
        <div className="install-the-app">
      <div className="install-the-app-frame">
        <img src={Installtheappimgframe} alt="frame" />
      </div>
      <div className="daily-discount-content">
        <div className="daily-discount">
          <img src={Installtheappimgdailydiscount1} alt="daily-discount-logo" />
          <div className="heading">
            <h4>Daily</h4>
            <h4>Discounts</h4>
          </div>
        </div>
        <div className="daily-discount">
          <img src={Installtheappimgdailydiscount2} alt="daily-discount-logo" />
          <div className="heading">
            <h4>Live</h4>
            <h4>Tracing</h4>
          </div>
        </div>
        <div className="daily-discount">
          <img src={Installtheappimgdailydiscount3} alt="daily-discount-logo" />
          <div className="heading heading-no-border">
            <h4>Quick</h4>
            <h4>Delivery</h4>
          </div>
        </div>
      </div>
      <div className="install">
        <h1>Install The App</h1>
        <p>It's never been easier to order food. Look for the finest discount and you'll be lost in a world of detectable food.</p>
        <div className="install-img">
          <div className="install-img-1stimg">
          <img src={Installtheappimginstall1} alt="google-play-logo" />
          </div>
          <div className="install-img-2ndimg">  
          <img src={Installtheappimginstall2} alt="app-store-logo" />
        </div>
        </div>
      </div>
      <div className="your-order">
        <img src={Installtheappimgyourorder} alt="your-order-logo" />
      </div>
     </div>
    )
}

export default Installtheapp
