import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import Popularitemsimgmap from "../../assets/img/map-marker-alt.png";
import Popularitemsimg1 from "../../assets/img/frame-40@2x.png";
import Popularitemsimg2 from "../../assets/img/frame-40-1@2x.png";
import Popularitemsimg3 from "../../assets/img/frame-40-2@2x.png";
import Popularitemsimg4 from "../../assets/img/frame-40-3@2x.png";
import Popularitemsimg5 from "../../assets/img/frame-40-4@2x.png";

function Popularitems() {
    return (
        <section id="popular-items-card">
        <h1>Popular Items</h1>
        <div className="popular-items-card-flex">
        <div className="less-greater-icon">
          {/* <P><a href="#popular-items-card">&lt;</a></P> */}
        </div>
        <div className="popular-items-card-content-flex">
        <div className="popular-items-card-content">
        <div className="popular-items-card-img">
          <img src={Popularitemsimg1} alt="food-deal-card" />
        </div>
        <h5>Cheese Burger</h5>
        <div className="popular-items-card-icon">
          <img src={Popularitemsimgmap} alt="location" />
          <p>Burger Arena</p>
        </div>
        <h5>$3.88</h5>
        <button>Order Now</button>
        </div>
        <div className="popular-items-card-content">
        <div className="popular-items-card-img">
          <img src={Popularitemsimg2} alt="food-deal-card" />
        </div>
        <h5>Toffe's Cake</h5>
        <div className="popular-items-card-icon">
          <img src={Popularitemsimgmap} alt="location" />
          <p>Top Sticks</p>
        </div>
        <h5>$4.00</h5>
        <button>Order Now</button>
        </div>
        <div className="popular-items-card-content">
        <div className="popular-items-card-img">
          <img src={Popularitemsimg3} alt="food-deal-card" />
        </div>
        <h5>Dancake</h5>
        <div className="popular-items-card-icon">
          <img src={Popularitemsimgmap} alt="location" />
          <p>Cake World</p>
        </div>
        <h5>$1.99</h5>
        <button>Order Now</button>
        </div>
        <div className="popular-items-card-content">
        <div className="popular-items-card-img">
          <img src={Popularitemsimg4} alt="food-deal-card" />
        </div>
        <h5>Crispy Sandwitch</h5>
        <div className="popular-items-card-icon">
          <img src={Popularitemsimgmap} alt="location" />
          <p>Fastfood Dine</p>
        </div>
        <h5>$3.00</h5>
        <button>Order Now</button>
        </div>
        <div className="popular-items-card-content">
        <div className="popular-items-card-img">
          <img src={Popularitemsimg5} alt="food-deal-card" />
        </div>
        <h5>Thai Soup</h5>
        <div className="popular-items-card-icon">
          <img src={Popularitemsimgmap} alt="location" />
          <p>Foody man</p>
        </div>
        <h5>$2.79</h5>
        <button>Order Now</button>
        </div>
        </div>
        <div className="less-greater-icon">
          {/* <P><a href="#popular-items-card">&gt;</a></P> */}
        </div>
        </div>
      </section>
    )
}

export default Popularitems
