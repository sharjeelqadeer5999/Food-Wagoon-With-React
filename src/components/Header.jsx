import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import logo from "../../assets/img/Logo.png";
import mapmarker from "../../assets/img/map-marker-alt.png";
import Search from "../../assets/img/Search.png";
import user from "../../assets/img/user.png";
import Icon from "../../assets/img/Icon.png";
import pickup from "../../assets/img/pickup.png";
import location from "../../assets/img/location.png";
import searchicon from "../../assets/img/search icon 12.png";
import heroheader from "../../assets/img/hero-header.png";

function Header() {
    return (
        <header>
        <ul className="navbar">
          <li><img src={logo} alt="" /></li>
          <ul className="nav-item-1">
            <li><span>Deliver to:</span></li>
            <li>
              <img src={mapmarker} alt="location-logo" />
            </li>
            <li>Current location</li>
            <li><span>Mohammadpur Bus Stand, Dhaka</span></li>
          </ul>
          <ul className="nav-item-2">
            <li>
              <img src={Search} alt="search-logo" />
              </li>
              <li>
                <label for="seardh"></label>
                <input type="search" name="text" id="search" placeholder="Search Food" />
              </li>
            <li>
              <button>
                <img src={user} alt="login-logo" /><span
                  >Login</span
                >
              </button>
            </li>
          </ul>
        </ul>

{/* -----------------------------header-are-you-straving------------------------------- */}

        <div className="are-you-straving">
          <div className="are-you-straving-content">
            <h1>Are you starving?</h1>
            <p>
              With in a few clicks, find meals thar are accessiable near you
            </p>
            <div className="food-location">
              <div className="delivery-pickup">
                <button className="delivery">
                  <img src={Icon} alt="delivery-logo" />
                  Delivery
                </button>
                <button className="pickup">
                  <img src={pickup} alt="pickup-logo" />
                  Pickup
                </button>
              </div>
              <div className="food-location-content">
                <div className="location">
                  <img src={location} alt="location-logo" />
                  <label for="location"></label>
                  <input
                    type="location"
                    name="text"
                    id="location"
                    placeholder="Enter Your address"
                  />
                </div>
                <div className="food">
                  <button>
                    <img src={searchicon} alt="search-logo" />Find
                    Food
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="straving-logo">
            <img src={heroheader} alt="straving-logo" />
          </div>
        </div>
      </header>
    )
}

export default Header
