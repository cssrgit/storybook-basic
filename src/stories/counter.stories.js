import React from "react";
import Counter from "../component/counter";

export default {
  title: "Counter App",
  component: Counter,
};

export const countAppFun = () => <Counter />;
export const countAppInitVal = () => <Counter initVal={10} />;
