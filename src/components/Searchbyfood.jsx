import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import Searchbyfoodimg1 from "../../assets/img/food-photo@2x.png";
import Searchbyfoodimg2 from "../../assets/img/food-photo-1@2x.png";
import Searchbyfoodimg3 from "../../assets/img/food-photo-2@2x.png";
import Searchbyfoodimg4 from "../../assets/img/food-photo-3@2x.png";
import Searchbyfoodimg5 from "../../assets/img/food-photo-4@2x.png";
import Searchbyfoodimg6 from "../../assets/img/food-photo-5@2x.png";

function Searchbyfood() {
    return (
        <section id="search-by-food">
        <div className="search-view-all">
          <h1>Search By Food</h1>
          <div className="view-all">
            <button><a href="#search-by-food">View All <span>&gt;</span></a></button>
          <div className="less-greater-icon">
            {/* <P><a href="#search-by-food">&lt;</a></P> */}
          </div>
        <div className="less-greater-icon">
          {/* <P><a href="#search-by-food">&gt;</a></P> */}
        </div>
          </div>
        </div>
        <div className="search-by-food-flex">
        <div className="search-by-food-content">
          <img src={Searchbyfoodimg1} alt="" />
          <p>Pizza</p>
        </div>
        <div className="search-by-food-content">
          <img src={Searchbyfoodimg2} alt="" />
          <p>Burger</p>
        </div>
        <div className="search-by-food-content">
          <img src={Searchbyfoodimg3} alt="" />
          <p>Noodles</p>
        </div>
        <div className="search-by-food-content">
          <img src={Searchbyfoodimg4} alt="" />
          <p>Sub-Sandwitch</p>
        </div>
        <div className="search-by-food-content">
          <img src={Searchbyfoodimg5} alt="" />
          <p>Chowmein</p>
        </div>
        <div className="search-by-food-content">
          <img src={Searchbyfoodimg6} alt="" />
          <p>Steak</p>
        </div>
      </div>
      </section>
    )
}

export default Searchbyfood
