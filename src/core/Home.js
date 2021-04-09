import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";

export default function Home() {
  console.log("API IS", API);
  return (
    <Base title="Home Page" description="Welcom to Tshirt Store">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success">Text</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">Text</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">Text</button>
        </div>
      </div>
    </Base>
  );
}
