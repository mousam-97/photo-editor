import React from 'react';
import Style from "./SavedImages.module.css";

function SavedImages({imageURL, imageName}) {
    return (
        <div className={Style.saved_images}>
            <img className={Style.image} src = {imageURL} alt="saved pic"/>
            <p>{imageName}</p>
        </div>
    );
}

export default SavedImages;