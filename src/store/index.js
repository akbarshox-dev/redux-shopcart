import { createStore } from "redux";
import cartStore from "./cartStore";


const store = createStore(cartStore);

export default store;