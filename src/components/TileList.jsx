import { useState } from 'react'
import Tile from './Tile';

function TileList({ totalTiles }) {

    // TODO: get tile icon from external api

    return (
        <>
            <div className="tiles">
                {
                    Array.from({ length: totalTiles }).map((_, index) => (
                        <Tile key={index} icon={"#"} />
                    ))
                }
            </div>
        </>
    )   
}

export default TileList;
