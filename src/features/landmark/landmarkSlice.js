import { createSlice } from '@reduxjs/toolkit';

export const landmarkSlice = createSlice({
    name: 'landmark',
    initialState: {
        landmarkList: [
            {
                name: 'Test Landmark 1 ',
                editor: 'Editor 1',
                note: 'Foo'
            }, {
                name: 'Test Landmark 2 ',
                editor: 'Editor 2',
                note: 'Bar'
            }
        ]

    },
    reducers: {
        create: (state, action) => {
            state.landmarkList.push(action.payload);
        }
    }
})

export const { add } = landmarkSlice.actions
export default landmarkSlice.reducer