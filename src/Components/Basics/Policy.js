import React from "react";
import "./style.css";

const Policy = () => {
  return (
    <>
      <div className="policy-content">
        <div className="content">
          <h5>Shop policy</h5>
        </div>
        <div className="p1">
          <h5>Last updated on 7 Sept</h5>
          <hr className="policyhr"></hr>
        </div>
      </div>

      <div className="policy-content1">
          <div className="content1">
              <h5>Shipping</h5>
          </div>
          <div className="p2">
              <h4>Processing time</h4><br/>
              <h6>The time I need to prepare an order for shipping varies. For details, see individual items.</h6><br></br>
              <h4>Customs and import taxes</h4><br/>
              <h6>Buyers are responsible for any customs and import taxes that may apply. I'm not responsible for delays due to customs.</h6>
              <hr className="policyhr"></hr>
          </div>
      </div>

      <div className="policy-content3">
         <div className="content2">
             <h5>Digital Downloads</h5>
         </div>
         <div className="p3">
             <h5>Files Download</h5><br/>
             <h6>Your files will be available to download once payment is confirmed. Here's how.</h6>
             <hr className="policyhr"></hr>
         </div>
      </div>

      <div className="policy-content4">
         <div className="content3">
             <h5>Payment Options</h5>
         </div>
         <div className="p4">
             <h5>Security options</h5><br/>
             <div className="policyimage-content">
               <div className="policyimage">
                 <img src="esewa.png" className="esewa"></img>
               </div>
               <div className="policyimage1">
                 <img src="cod.png" className="cod"></img>
               </div>

              
             </div>
         </div>
      </div>

      
    </>
  );
};

export default Policy;
