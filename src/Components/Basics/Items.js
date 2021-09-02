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
        <div className="all">
          <span>
            <a href="#">
              All
              <br />
              <a href="#">Sale</a>
              <br></br>
              <a href="#">Vintage</a>
              <br></br>
              <a href="#">Arts</a>
              <br></br>
              <a href="#">Deskplanner</a>
            </a>
          </span>
        </div>

        <div className="images-content">
          <div className="imgcontent">
            <div className="images">
              <img src="desk.jpg" className="desk"></img>
              <div className="heart">
                <span>$100</span>
                <i className = "fas fa-heart"></i>
              </div>
            </div>
            
            <div className="images">
              <img src="desk.jpg" className="desk"></img>
              <div className="heart">
                <span>$100</span>
                <i className = "fas fa-heart"></i>
              </div>
            </div>

            <div className="images">
              <img src="desk.jpg" className="desk"></img>
              <div className="heart">
                <span>$100</span>
                <i className = "fas fa-heart"></i>
              </div>
            </div>


          </div>
        </div>  
      </div>
    </>
  );
};

export default Items;
