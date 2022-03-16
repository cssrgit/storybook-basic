import React, { useState } from "react";
import Button from "./button";
import Text from "./text";

const Counter = ({ initVal = 0 }) => {
  const [count, setCount] = useState(initVal);
  return (
    <>
      <Text value={"Counter App"} />
      <div>{count}</div>
      <Button value={"Increment"} onClick={() => setCount(count + 1)} />
      <Button value={"Decerement"} onClick={() => setCount(count - 1)} />
    </>
  );
};

export default Counter;
