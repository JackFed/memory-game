import { useState } from 'react'

function Tile({ icon }) {

    return (
        <>
            <button className="tile">
              <img src={icon} alt="" />
            </button>
        </>
    )   
}

export default Tile;
