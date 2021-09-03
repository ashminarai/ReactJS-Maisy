import React from 'react'

const Review = () => {
    return (
        <>
        {/* start */}
        <div className="review-content">
            <div className="review-list">
                <div className="review">
                    <h3>Review</h3>
                </div>
            </div>
            
            {/* content start */}
            <div className="review-list">
                <div className="rfeedback">
                    <h3>Feedback</h3>
                </div>
            </div>
            {/* content end */}

            {/* content start */}
            <div className="sdrop">
                <div className="dropd">
                    <div className="rdown">
                    <span className="latest">Sort of:</span>
                    <i className="fas fa-caret-down rcaret"/>
                    </div>
                    <div className="list">
                        <a href="#">Latest</a><br/>
                        <hr className="lhr"/>
                        <a href="#">Recent</a>
                        <hr className="lhr"/>
                    </div>
                </div>
            </div>

            {/* content end */}
            
        </div>
        {/* ends */}
        </>
    )
}

export default Review;

