import { createStore } from "redux";

import redusers from "./index";

export default function configureStore() {
  return createStore(redusers);
}
