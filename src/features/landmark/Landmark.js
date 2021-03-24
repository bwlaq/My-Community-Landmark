import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './landmarkSlice';
import './Landmark.css';

export function Landmark() {
    const landmark = useSelector(state => state.landamrk.landmarkList)
    const dispatch = useDispatch()

    return (

        <div>
            <h2 className='title'>Landmark List</h2>
            <div>
                <ul>
                    {landmark.map((i, index) => (<ul
                        className='no-bullets'
                        key={index}>
                        <h3>{i.name}</h3>
                        <i><h5 className="editor">by {i.editor}</h5></i>
                        <li>{i.note}</li>
                        <br />
                    </ul>))}
                </ul>
            </div>
        </div>
    )
}

export default Landmark;