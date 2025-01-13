import React, { useEffect, useState } from "react";
import Header from "./Header";
import News from "./News";
import Quote from "./Quote";
import Weather from "./Weather";
import { Margin, usePDF } from "react-to-pdf";
import { CronJob } from "cron";
export default function App() {
  

  const time =  new Date().toJSON().replace(new RegExp(':', 'g'),'.');
  let timestamp = time.slice(0,19).toString()
  console.log(timestamp); 

  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: `${timestamp}.pdf`,
    page: { margin: Margin.NONE },
  });

  function refreshPage() {
    console.log("Clicked");
    // window.location.reload();
  }

  console.log(__dirname);
  
  useEffect(() => {
    const job = new CronJob(
      "* * * * *", // cronTime
      function () {
        console.log("TEST CRONE");
        toPDF();
      }
    );
    const jobTwo = new CronJob(
      "20 * * * * *", // cronTime
      function () {
        console.log("da");
        window.location.reload()
      } // onTick
    );

      //job.start()
      //jobTwo.start()
  

  }, []);

  return (
    <div ref={targetRef}>
      <React.StrictMode>
        <Header />
        <Quote />
        <Weather />
        <News />
      </React.StrictMode>
  
    </div>
  );
}
