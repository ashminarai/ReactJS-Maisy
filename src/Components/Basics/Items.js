import React from "react";
import "./style.css";

const Items = () => {
  return (
    <>
      <div className="item">
        <div class="icont">
          <h3 className="it">Items</h3>
        </div>
        <div className="dropdown">
          <div className="dropcontent">
            <span className="sort">Sort: most recent</span>
            <i className="fa fa-caret-down"></i>
          </div>
        </div>
      </div>

      <div className="searchitem">
        <div className="searchcontent">
          <span>
            <input type="text" name="" className="itemscon"></input>
          </span>
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="itemlist-content">
        <div  className="all">
          <span><a href="#">All<br/>
          <a href="#">Sale</a><br></br>
          <a href="#">Vintage</a><br></br>
          <a href="#">Arts</a><br></br>
          <a href="#">Deskplanner</a></a></span>
        </div>
        {/* <div className="on">
          <a href="#">On sale</a>
        </div>
        <div className="wall">
          <a href="#">Wallpapers</a>
        </div>
        <div className="app">
          <a href="#">App icon packs</a>
        </div>
        <div className="digi">
          <a href="#">Digital Planners</a>
        </div> */}
        <div className="itempictures">
          <img src="desk.jpg" className="desk"></img>
        </div>
      </div>

      <div className="contactshop-content">
        <div className="shopcontent">
          <span a href="#" className="shoptext"><i className="fas fa-envelope"></i>Contact shop owner</span>
        </div>

      </div>
    </>
  );
};

export default Items;
