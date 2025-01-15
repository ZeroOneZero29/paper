import React, { useEffect, useState } from "react";
import Header from "./Header";
import News from "./News";
import Quote from "./Quote";
import Weather from "./Weather";

export default function App() {
  return (
      <React.StrictMode>
        <Header />
        <Quote />
        <Weather />
        <News />
      </React.StrictMode>
  );
}
