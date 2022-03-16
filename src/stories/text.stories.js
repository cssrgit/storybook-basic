import React from "react";
import Text from "../component/text";

export default {
  title: "Text",
  component: Text,
};

export const textLg = () => {
  return <Text value="Kahan ho" style={{ color: "red" }} />;
};
