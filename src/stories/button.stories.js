import React from "react";

import Button from "../component/button";

export default {
  title: "Button",
  component: Button,
};

export const btnLg = () => (
  <Button
    value={"Large"}
    onClick={() => {
      alert("Hello");
    }}
    style={{
      background: "gray",
      color: "#fff",
      width: "150px",
      padding: "15px",
    }}
  />
);

export const btnMd = () => (
  <Button
    value={"Medium"}
    onClick={() => {
      alert("Hello");
    }}
    style={{
      background: "Blue",
      color: "#fff",
      width: "100px",
      padding: "10px",
    }}
  />
);

export const btnSm = () => (
  <Button
    value={"Small"}
    onClick={() => {
      alert("Hello");
    }}
    style={{
      background: "red",
      color: "#fff",
      width: "80px",
      padding: "10px",
    }}
  />
);
