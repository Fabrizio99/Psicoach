import { createStore, combineReducers } from "redux";

export const authReducer = (
  state = {
    profile: {
      id: 0,
      role_id: 3,
      email: "aaaaa@aaa.com",
      name: "Fabrizio",
      surname: "Condori",
      phone: "999999999",
      document_id: 1,
      gender_id: 2,
      document_number: "88888888",
    },
    token: "-----------------",
  },
  action
) => {
  return state;
};

const reducers = combineReducers({
  auth: authReducer,
});

export const profileStoreTest = createStore(reducers);
