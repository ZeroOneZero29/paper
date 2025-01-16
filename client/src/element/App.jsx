import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewsTech from "./NewsTech";
import Quote from "./Quote";
import Weather from "./Weather";
import NewsBusiness from "./NewsBusiness";

export default function App() {
  return (
      <React.StrictMode>
        <Header />
        <Quote />
        <Weather />
        <NewsTech />
        <NewsBusiness />
      </React.StrictMode>
  );
}
