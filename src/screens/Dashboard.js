import React, { useEffect, useState, createContext } from 'react';
import Filters from "../components/Filters/Filters";
import ImageContainer from "../components/ImageContainer/ImageContainer";

import Style from "./Dashboard.module.css";

const Data = createContext();

const DEFAULT_DATA = [
    {
        name: "Brightness",
        property: "brightness",
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: "%"
    },
    {
        name: "Saturate",
        property: "saturate",
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: "%"
    },
    {
        name: "Contrast",
        property: "contrast",
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: "%"
    },
    {
        name: "Sepia",
        property: "sepia",
        value: 0,
        range: {
            min: 0,
            max: 200
        },
        unit: "%"
    },
    {
        name: "Grayscale",
        property: "grayscale",
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: "%"
    }
];

function Dashboard() {
    const [Image, setImage] = useState(1);
    const [filterData, setFilterData] = useState(DEFAULT_DATA);

    console.log(filterData);

    function handleClick() {
        console.log("clicked");
        setImage(prev => prev + 1);
    }

    function handleClearFilter()
    {
        setFilterData(DEFAULT_DATA);
    }

    let imageApi = `https://source.unsplash.com/random/${Image}`;
    // useEffect(() => {


    // }, [Image]);

    return (
        <Data.Provider value={{ filterData, setFilterData, handleClearFilter}}>
            <div className={Style.dashboard}>
                <div className={Style.container1}>
                    <ImageContainer imageApi={imageApi} handleClick = {handleClick}/>
                </div>
                <div className={Style.container2}>
                    <Filters />
                </div>
            </div>
        </Data.Provider>

    );
}

export default Dashboard;
export { Data };