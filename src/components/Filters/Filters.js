import React, { useContext } from 'react';
import { Data } from "../../screens/Dashboard";
import Slider from "../Slider/Slider";
import Style from "./Filters.module.css";

function Filters() {
    const { filterData, setFilterData, handleClearFilter } = useContext(Data);

    function handleChange(e) {
        setFilterData(prev => {
            return prev.map(item => {
                if (item.name === e.target.name) {
                    return { ...item, value: e.target.value };
                }
                else {
                    return item;
                }
            });
        });
    }

    let filters = filterData.map((item, index) => {
        return <Slider
            key={index}
            propertyName={item.name}
            value={item.value}
            min={item.range.min}
            max={item.range.max}
            handleChange={handleChange}
        />;
    });

    return (
        <div className={Style.filters}>
            <div className={Style.topbar}>
                <h1>Filters</h1>
                <button onClick={handleClearFilter} className={Style.button}>Clear Filter</button>
            </div>

            <div className={Style.container}>

                <div className={Style.box1}>
                    {filters}
                </div>
                <div className={Style.box2}>
                    <h1>Text overlay</h1>
                </div>

            </div>
        </div>

    );
}

export default Filters;