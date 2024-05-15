import { createStore } from "redux";
import reducer from "./Process/index.js";

const store = createStore(reducer);

export default store;