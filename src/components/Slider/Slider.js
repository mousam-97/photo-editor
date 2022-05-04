import React, { useContext } from 'react';
import { Data } from "../../screens/Dashboard";
import Style from "./Slider.module.css";

function Slider({ propertyName, value, min, max, handleChange }) {

    // const { filterData } = useContext(Data);
    

    return (
        <div className={Style.slider}>
            <div className={Style.box1}>
                <h3>{propertyName}</h3>
                <h3>{value} %</h3>
            </div>
            <div className={Style.box2}>
                <input 
                    name = {propertyName}
                    type="range" 
                    className={Style.slider}
                    value={value}    
                    min = {min}
                    max = {max}
                    onChange = {(e) => handleChange(e)}
                />
            </div>
        </div>
    );
}

export default Slider;