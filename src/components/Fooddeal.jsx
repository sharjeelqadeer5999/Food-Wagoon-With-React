import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import Fooddealimg1 from "../../assets/img/image-1@2x.png";
import Fooddealimg2 from "../../assets/img/image-2@2x.png";
import Fooddealimg3 from "../../assets/img/image-3@2x.png";
import Fooddealimg4 from "../../assets/img/image-4@2x.png";

function Fooddeal() {
    return (
        <section className="food-deal-card">
        <div className="food-deal-card-content">
        <div className="food-deal-card-img">
          <img src={Fooddealimg1} alt="food-deal-card" />
        </div>
        <div className="discount">
          <p className="discountvalue">15</p>
          <div className="percentage-symble">
            <p className="percentage">%</p>
            <p>off</p>
          </div>
        </div>
        <div className="greys-vage">
          <h5>Greys Vage</h5>
          <button>6 Days Remaining</button>
        </div>
      </div>
      <div className="food-deal-card-content">
        <div className="food-deal-card-img">
          <img src={Fooddealimg2} alt="food-deal-card" />
        </div>
        <div className="discount">
          <p className="discountvalue">10</p>
          <div className="percentage-symble">
            <p className="percentage">%</p>
            <p>off</p>
          </div>
        </div>
        <div className="greys-vage">
          <h5>Greys Vage</h5>
          <button>6 Days Remaining</button>
        </div>
      </div>
      <div className="food-deal-card-content">
        <div className="food-deal-card-img">
          <img src={Fooddealimg3} alt="food-deal-card" />
        </div>
        <div className="discount">
          <p className="discountvalue">25</p>
          <div className="percentage-symble">
            <p className="percentage">%</p>
            <p>off</p>
          </div>
        </div>
        <div className="greys-vage">
          <h5>Greys Vage</h5>
          <button>7 Days Remaining</button>
        </div>
      </div>
      <div className="food-deal-card-content">
        <div className="food-deal-card-img">
          <img src={Fooddealimg4} alt="food-deal-card" />
        </div>
        <div className="discount">
          <p className="discountvalue">20</p>
          <div className="percentage-symble">
            <p className="percentage">%</p>
            <p>off</p>
          </div>
        </div>
        <div className="greys-vage">
          <h5>Greys Vage</h5>
          <button>8 Days Remaining</button>
        </div>
      </div>
      </section>
    )
}

export default Fooddeal
