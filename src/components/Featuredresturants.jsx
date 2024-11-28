import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
// import Fresturantsimg20off from "../../assets/img/20%off.png";
// import Fresturantsimgfast from "../../assets/img/fast.png";
// import Fresturantsimgstar from "../../assets/img/star.png";
// import Fresturantsimg1 from "../../assets/img/image-5@2x.png";
// import Fresturantsimglogo1 from "../../assets/img/restaruant-logo@2x.png";
// import Fresturantsimg2 from "../../assets/img/image-6@2x.png";
// import Fresturantsimglogo2 from "../../assets/img/restaruant-logo-1@2x.png";
// import Fresturantsimg3 from "../../assets/img/image-7@2x.png";
// import Fresturantsimglogo3 from "../../assets/img/restaruant-logo-2@2x.png";
// import Fresturantsimg4 from "../../assets/img/image-8@2x.png";
// import Fresturantsimglogo4 from "../../assets/img/restaruant-logo-3@2x.png";
// import Fresturantsimg5 from "../../assets/img/image-9@2x.png";
// import Fresturantsimglogo5 from "../../assets/img/restaruant-logo-4@2x.png";
// import Fresturantsimg6 from "../../assets/img/image-10@2x.png";
// import Fresturantsimglogo6 from "../../assets/img/restaruant-logo-5@2x.png";
// import Fresturantsimg7 from "../../assets/img/image-11@2x.png";
// import Fresturantsimglogo7 from "../../assets/img/restaruant-logo-6@2x.png";
// import Fresturantsimg8 from "../../assets/img/image-12@2x.png";
// import Fresturantsimglogo8 from "../../assets/img/restaruant-logo-7@2x.png";

function Featuredresturants() {
    return (
        <section id="featured-resturants-content">
        {/* <h1>Featured Resturants</h1>
        <div className="featured-resturants-flex">
        <div className="featured-resturants">
        <div className="featured-resturants-card-img">
          <img src={Fresturantsimg1} alt="food-deal-card" />
        </div>
        <div className="discount">
          <div className="card-1st">
            <img src={Fresturantsimg20off} alt="discount-logo" />
            <p>20% off</p>
          </div>
          <div className="card-2nd">
            <img src={Fresturantsimgfast} alt="fast-logo" />
            <p>Fast</p>
          </div>
        </div>
        <div className="food-like">
          <img src={Fresturantsimglogo1} alt="restaruant-logo" />
          <div className="food-like-description">
            <p>Food World</p>
            <div className="food-like-description1">
              <img src={Fresturantsimgstar} alt="star-logo" />
              <p>46</p>
            </div>
          </div>
        </div>
        <button className="hidden">Open Tomorrow</button>
        <button className="vissible display-none">Open Now</button>
      </div>
      <div class="featured-resturants">
        <div class="featured-resturants-card-img">
          <img src={Fresturantsimg2} alt="food-deal-card" />
        </div>
        <div class="discount">
          <div class="card-1st">
            <img src={Fresturantsimg20off} alt="discount-logo" />
            <p>15% off</p>
          </div>
          <div class="card-2nd">
            <img src={Fresturantsimgfast} alt="fast-logo" />
            <p>Fast</p>
          </div>
        </div>
        <div class="food-like">
          <img src={Fresturantsimglogo2} alt="restaruant-logo" />
          <div class="food-like-description">
            <p>Pizza Hub</p>
            <div class="food-like-description1">
              <img src={Fresturantsimgstar} alt="star-logo" />
              <p>40</p>
            </div>
          </div>
        </div>
        <button class="hidden">Open Tomorrow</button>
        <button class="vissible display-none">Open Now</button>
      </div>
      <div class="featured-resturants">
        <div class="featured-resturants-card-img">
          <img src={Fresturantsimg3} alt="food-deal-card" />
        </div>
        <div class="discount">
          <div class="card-1st">
            <img src={Fresturantsimg20off} alt="discount-logo" />
            <p>10% off</p>
          </div>
          <div class="card-2nd">
            <img src={Fresturantsimgfast} alt="fast-logo" />
            <p>Fast</p>
          </div>
        </div>
        <div class="food-like">
          <img src={Fresturantsimglogo3} alt="restaruant-logo" />
          <div class="food-like-description">
            <p>Donuts hut</p>
            <div class="food-like-description1">
              <img src={Fresturantsimgstar} alt="star-logo" />
              <p>20</p>
            </div>
          </div>
        </div>
        <button class="hidden display-none">Open Tomorrow</button>
        <button class="vissible">Open Now</button>
      </div>
      <div class="featured-resturants">
        <div class="featured-resturants-card-img">
          <img src={Fresturantsimg4} alt="food-deal-card" />
        </div>
        <div class="discount">
          <div class="card-1st">
            <img src={Fresturantsimg20off}alt="discount-logo" />
            <p>15% off</p>
          </div>
          <div class="card-2nd">
            <img src={Fresturantsimgfast} alt="fast-logo" />
            <p>Fast</p>
          </div>
        </div>
        <div class="food-like">
          <img src={Fresturantsimglogo4} alt="restaruant-logo" />
          <div class="food-like-description">
            <p>Donuts Hut</p>
            <div class="food-like-description1">
              <img src={Fresturantsimgstar} alt="star-logo" />
              <p>50</p>
            </div>
          </div>
        </div>
        <button class="hidden display-none">Open Tomorrow</button>
        <button class="vissible">Open Now</button>
      </div>
      <div class="featured-resturants">
        <div class="featured-resturants-card-img">
          <img src={Fresturantsimg5} alt="food-deal-card" />
        </div>
        <div class="discount">
          <div class="card-1st">
            <img src={Fresturantsimg20off} alt="discount-logo" />
            <p>10% off</p>
          </div>
          <div class="card-2nd">
            <img src={Fresturantsimgfast} alt="fast-logo" />
            <p>Fast</p>
          </div>
        </div>
        <div class="food-like">
          <img src={Fresturantsimglogo5} alt="restaruant-logo" />
          <div class="food-like-description">
            <p>Ruby Tuesday</p>
            <div class="food-like-description1">
              <img src={Fresturantsimgstar} alt="star-logo" />
              <p>26</p>
            </div>
          </div>
        </div>
        <button class="hidden display-none">Open Tomorrow</button>
        <button class="vissible">Open Now</button>
      </div>
      <div class="featured-resturants">
        <div class="featured-resturants-card-img">
          <img src={Fresturantsimg6} alt="food-deal-card" />
        </div>
        <div class="discount">
          <div class="card-1st">
            <img src={Fresturantsimg20off} alt="discount-logo" />
            <p>25% off</p>
          </div>
          <div class="card-2nd">
            <img src={Fresturantsimgfast} alt="fast-logo" />
            <p>Fast</p>
          </div>
        </div>
        <div class="food-like">
          <img src={Fresturantsimglogo6} alt="restaruant-logo" />
          <div class="food-like-description">
            <p>Kuakata Fired Chicken</p>
            <div class="food-like-description1">
              <img src={Fresturantsimgstar} alt="star-logo" />
              <p>53</p>
            </div>
          </div>
        </div>
        <button class="hidden display-none">Open Tomorrow</button>
        <button class="vissible">Open Now</button>
      </div>
      <div class="featured-resturants">
        <div class="featured-resturants-card-img">
          <img src={Fresturantsimg7} alt="food-deal-card" />
        </div>
        <div class="discount">
          <div class="card-1st">
            <img src={Fresturantsimg20off} alt="discount-logo" />
            <p>10% off</p>
          </div>
          <div class="card-2nd">
            <img src={Fresturantsimgfast} alt="fast-logo" />
            <p>Fast</p>
          </div>
        </div>
        <div class="food-like">
          <img src={Fresturantsimglogo7} alt="restaruant-logo" />
          <div class="food-like-description">
            <p>Red Square</p>
            <div class="food-like-description1">
              <img src={Fresturantsimgstar} alt="star-logo" />
              <p>45</p>
            </div>
          </div>
        </div>
        <button class="hidden display-none">Open Tomorrow</button>
        <button class="vissible">Open Now</button>
      </div>
      <div class="featured-resturants">
        <div class="featured-resturants-card-img">
          <img src={Fresturantsimg8} alt="food-deal-card" />
        </div>
        <div class="discount">
          <div class="card-1st">
            <img src={Fresturantsimg20off} alt="discount-logo" />
            <p>10% off</p>
          </div>
          <div class="card-2nd">
            <img src={Fresturantsimgfast} alt="fast-logo" />
            <p>Fast</p>
          </div>
        </div>
        <div class="food-like">
          <img src={Fresturantsimglogo8} alt="restaruant-logo" />
          <div class="food-like-description">
            <p>Taco Bell</p>
            <div class="food-like-description1">
              <img src={Fresturantsimgstar} alt="star-logo" />
              <p>35</p>
            </div>
          </div>
        </div>
        <button class="hidden display-none">Open Tomorrow</button>
        <button class="vissible">Open Now</button>
      </div>
    </div>
    <button className="view-all">
      <a href="#featured-resturants-content">View All <span>&gt;</span></a>
    </button> */}
      </section>
    )
}

export default Featuredresturants
