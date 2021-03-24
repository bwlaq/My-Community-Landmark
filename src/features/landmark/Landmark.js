import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './landmarkSlice';

export function Landmark() {
    const landmark = useSelector(state => state.landamrk.landmarkList)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <ul>
                    {landmark.map((i, index) => (<ul key={index}>
                        <h3>{i.name}</h3>
                        <li>{i.editor}</li>
                        <li>{i.note}</li>
                        <br />
                    </ul>))}
                </ul>
            </div>
        </div>
    )
}

export default Landmark;