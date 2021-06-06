import React from "react";
import "./style.css";

const ToggleSwitch = (props) => {
    return (
        <div>
            <div className="CheckBoxWrapper">
                <div className="CheckBox" id="aaa" type="checkbox" />
                <div className="CheckBoxLabel" htmlFor="aaa" />
            </div>
        </div>
    );
};
export default ToggleSwitch;
