import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.ts';

// 스토어 생성
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// RootState 및 AppDispatch 타입 추출 (컴포넌트에서 타입 지정에 사용)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
