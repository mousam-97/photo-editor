import React, { useContext } from 'react';
import { Data } from "../../screens/Dashboard";
import Style from "./ImageContainer.module.css";

function ImageContainer({ imageApi, handleClick }) {
  const { filterData, textOverlay } = useContext(Data);

  function imageStyleUsingFilter() {
    const filters = filterData.map(item => {
      return `${item.property}(${item.value}${item.unit})`;
    });
    let style = { filter: filters.join(" ") };
    return style;
  }

  console.log(imageStyleUsingFilter());

  return (
    <div className={Style.container}>
      <div className={Style.topbar}>
        <input type="text" placeholder="Picture name" />
        <button className={Style.button} onClick={handleClick}>New Image</button>
      </div>

      <div className={Style.image}>
        {imageApi && <img className={Style.image} style={imageStyleUsingFilter()} src={imageApi} alt="random pic" />}
        <h4>{textOverlay}</h4>
      </div>
      <div>
        <p>Recent images</p>
      </div>
    </div>
  );
}

export default ImageContainer;