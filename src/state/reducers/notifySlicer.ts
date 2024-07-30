import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notify } from '../types';

const notifySlice = createSlice({
  name: 'notify',
  initialState: { notificaitons: [] as Notify[]},
  reducers: {
    addNotification: (state, {payload}: PayloadAction<Notify>) => {
      state.notificaitons.unshift(payload)
    },
    setNotification: (state, {payload}: PayloadAction<Notify[]>) => {
      state.notificaitons = payload
    },
    updateNotification: (state, {payload}: PayloadAction<Notify>) => {
      state.notificaitons = state.notificaitons.map(_notificaiton => {
        if (_notificaiton.notificationId === payload.notificationId) {
          return payload
        }
        return _notificaiton
      })
    },
  },
});

export const { addNotification, updateNotification, setNotification } = notifySlice.actions;
export default notifySlice.reducer;
