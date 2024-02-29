import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState:Part[] = []

export const setDeletedAt = createAsyncThunk(
  'parts/setDeletedAt',
  async (args: { part:Part, deleted_at:string }, thunkAPI) => {
		let state:any = thunkAPI.getState()
		state[state.indexOf(args.part)] = Object.assign({}, state, {
			deleted_at: args.deleted_at
		})
  }
)

const partsSlice = createSlice({
	name: 'parts',
	initialState,
	reducers: {
		addPart(state, action) {
			state = state.slice();
			state.push(action.payload);
		},
	}
})

// Extract the action creators object and the reducer
const { actions, reducer } = partsSlice
// Extract and export each action creator by name
export const { 
	addPart
} = actions

export default reducer;
