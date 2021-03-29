import React, { useState } from "react";
import "./TaskList.css";
import PropTypes from "prop-types";

export default function TaskList({ title }){

    const [count, setCount] = useState(0);
    return(
        <div className="tasklist">
        <div className="title">{title}</div>
        <div className="content"></div>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired
}