import { init } from "@rematch/core";
import * as models from "./results";

// initialise the rematch/redux store
const store = init({ models });
export default store;