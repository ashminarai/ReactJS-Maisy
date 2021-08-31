import React from 'react'
import "./style.css"

const Items = () => {
    return (
        <>
            <div className="item">
                <h3 className="it">Items</h3>
            </div>

            <div className="items-content">
                <div className="icontent">
                    <input type="text" placeholder="Search items" className="itext" />
                </div>

                <div className="search">
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </>
    )
}

export default Items;
