import { useState } from 'react'
import Tile from './Tile';
import ViteIcon from '../../public/vite.svg'

function TileList({ totalTiles }) {

    // TODO: get tile icon from external api

    return (
        <>
            <div className="tiles">
                {
                    Array.from({ length: totalTiles }).map((_, index) => (
                        <Tile key={index} icon={ViteIcon} />
                    ))
                }
            </div>
        </>
    )   
}

export default TileList;
