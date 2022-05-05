import React, { useContext} from 'react';
import { useSelector } from "react-redux";
import { Data } from "../../screens/Dashboard";
import SavedImages from "../SavedImages/SavedImages";
import Style from "./ImageContainer.module.css";

function ImageContainer() {

  const { filterData,
    textOverlay,
    imageURL,
    handleNewImage,
    imageName,
    setImageName } = useContext(Data);

  function imageStyleUsingFilter() {
    const filters = filterData.map(item => {
      return `${item.property}(${item.value}${item.unit})`;
    });
    let style = { filter: filters.join(" ") };
    return style;
  }


  const products = useSelector((state) => state.allImages.images);
  let savedPictures = products.map((item, index) => {

    // here item[0] refers to image id, item[1] refers to url and item[2] refers to image name (way it is stored in the redux store)
    return <SavedImages key={item[0]} imageURL={item[1]} imageName={item[2]} />;
  });


  return (
    <div className={Style.container}>
      <div className={Style.topbar}>
        <input type="text" value={imageName} onChange={(e) => setImageName(e.target.value)} placeholder="Picture name" />
        <button className={Style.button} onClick={handleNewImage}>New Image</button>
      </div>

      <div className={Style.image}>
        {imageURL && <img className={Style.image} style={imageStyleUsingFilter()} src={imageURL} alt="random pic" />}
        <h4>{textOverlay}</h4>
      </div>
      <p>Recent images</p>
      <div className={Style.savedImages}>
        {savedPictures}
      </div>
    </div>
  );
}

export default ImageContainer;