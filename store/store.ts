import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import userSlice, { IUserStateInitialState } from "@/slices/userSlice";

const persistConfig = {
  key: "root_peony_web..902hi",
  storage,
  blacklist: ["products"],
  timeout: 5,
};

const rReducer = combineReducers({
  user: userSlice,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === "user/logOutUser") {
    // state.user = undefined;
    // state.notifications = undefined;
    // state.wishlist = [];
  }
  return rReducer(state, action);
};
const persisted = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persisted,
  // middleware: [thunk],
});

export let persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export interface IRootState {
  user: IUserStateInitialState;
}
