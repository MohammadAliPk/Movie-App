import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjkxOTFjOGZmNTU1YzA5MjE5YmFmMWVkYTM1Njg2YSIsInN1YiI6IjY0NzNkZGQwNWNkMTZlMDBhNjU2NzRmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Us2ScDTCUT5GVlDUfykDmIB3sZblEoZjzks19aTEa_4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
