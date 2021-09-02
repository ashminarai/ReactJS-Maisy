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
              <h6 className="owner">contact</h6>
              <hr className="hritem"></hr>
            </a>
          </span>
        </div>

        {/* images  start */}

        <div className="images-content">
          <div className="imgcontent">
            <div className="images">
              <img src="desk.jpg" className="desk"></img>
              <div className="txt">
                <h6>Card</h6>
              </div>
              <div className="heart">
                <span>$100</span>
                <i className="fas fa-heart"></i>
              </div>
            </div>

            {/* images end */}

            <div className="images">
              <img src="desk.jpg" className="desk"></img>
              <div className="txt">
                <h6>Card</h6>
              </div>
              <div className="heart">
                <span>$100</span>
                <i className="fas fa-heart"></i>
              </div>
            </div>

            <div className="images">
              <img src="desk.jpg" className="desk"></img>
              <div className="txt">
                <h6>Card</h6>
              </div>
              <div className="heart">
                <span>$100</span>
                <i className="fas fa-heart"></i>
              </div>
            </div>

            <div className="images">
              <img src="desk.jpg" className="desk"></img>
              <div className="txt">
                <h6>Card</h6>
              </div>
              <div className="heart">
                <span>$100</span>
                <i className="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* item-content ends */}

      {/* second-item content starts */}

      <div className="second-content">
        <div className="simg-content">
          <div className="admirer">
            <u><a href="#">293 Sales</a></u>
            <br></br>
            <u><a href="#">290 admirers</a></u>
            <hr className="hr"></hr>
          </div>
          <div className="simages">
            <img src="mob.jpg" className="ipad"></img>
            <div className="txt">
                <h6>Keyboard</h6>
              </div>
            <div className="dollar">
              <span>$70</span>
              <i className="fas fa-heart"></i>
            </div>
          </div>

          <div className="s-images">
            <img src="mob.jpg" className="ipad"></img>
            <div className="txt">
                <h6>Keyboard</h6>
              </div>
            <div className="dollar">
              <span>$70</span>
              <i className="fas fa-heart"></i>
            </div>
          </div>
        </div>

        <div className="report">
          <u><h6>Report this shop to yamphu</h6></u>
        </div>
        <hr className="reporthr"></hr>
      </div>
    </>
  );
};

export default Items;
