import React from "react";

// You can import global CSS files here.
import "../src/styles/global.scss"

// No-op wrapper.
export const Wrapper = ({
  children,
}) => {
  return <>{children}</>;
};