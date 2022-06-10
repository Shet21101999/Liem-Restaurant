import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialmenu flex__center section__padding" id="menu">
      <div className="app__specialmenu-title">
        <SubHeading title="Menu that fits your power" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialmenu-menu">
        <div className="app__specialmenu-menu_left flex__center">
          <p className="app__specialmenu-menu_heading">Wine and Beer</p>
          <div className="app__specialmenu-menu_items">
            {data.wines.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                tags={item.tags}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="app__specialmenu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="app__specialmenu-menu_right flex__center">
          <p className="app__specialmenu-menu_heading">Cocktails</p>
          <div className="app__specialmenu-menu_items">
            {data.cocktails.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                tags={item.tags}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View more
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
