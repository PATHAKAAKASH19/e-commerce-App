import React from "react";
import { Link } from "react-router-dom";

export default function Button({ title, route, className }) {
  return (
    <Link to={`${route}`} >
      <button className={`${className}`}>{title}</button>
    </Link>
  );
}
