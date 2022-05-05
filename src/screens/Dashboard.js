import axios from "axios";
import React, { useEffect, useState, createContext } from 'react';
import { useDispatch } from "react-redux";
import Filters from "../components/Filters/Filters";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import { saveImage } from "../store/actions/image-actions";

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

// I have made the app with the most important features.
// Following are the features which I can implement if required:
// make it resonsive, abiity to move the overlay text, click an item to get previous saved image etc.
// Here I have used both useContext and Redux for demonstration.

function Dashboard() {
    const [image, setImage] = useState({});
    const [filterData, setFilterData] = useState(DEFAULT_DATA);
    const [textOverlay, setTextOverlay] = useState("");
    const [imageName, setImageName] = useState("");

    const dispatch = useDispatch();

    const accessKey = "of9TfZBc4s9Mm38MixFl3brmNqiK0-fbLrDWWGx6vew";
    let api = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

    const [imageURL, setImageURL] = useState(api);

    function handleClearFilter() {
        setFilterData(DEFAULT_DATA);
    }

    function handleNewImage() {

        dispatch(saveImage([image.id, imageURL, imageName, filterData]));
        setImageName("");

        (async function () {
            try {
                let res = await axios.get(api);
                setImageURL(res.data.urls.regular);
                setImage(res.data);
            }
            catch (error) {
                console.log(error);
            }
        })();
    }

    useEffect(() => {
        (async function () {
            try {
                let res = await axios.get(api);
                setImageURL(res.data.urls.regular);
                setImage(res.data);
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [api]);

    let contextData = {
        filterData,
        setFilterData,
        handleClearFilter,
        textOverlay,
        setTextOverlay,
        imageURL,
        handleNewImage,
        imageName,
        setImageName
    };
    return (
        <Data.Provider value={contextData}>
            <div className={Style.dashboard}>
                <div className={Style.container1}>
                    <ImageContainer />
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