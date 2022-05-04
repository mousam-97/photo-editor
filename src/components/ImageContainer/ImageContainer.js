import React, { useContext } from 'react';
import { Data } from "../../screens/Dashboard";
import Style from "./ImageContainer.module.css";

function ImageContainer({ imageApi, handleClick }) {
  const { filterData } = useContext(Data);

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
      <button className={Style.button} onClick={handleClick}>New Image</button>
      <div>
        {imageApi && <img className={Style.image} style={imageStyleUsingFilter()} src={imageApi} alt="random pic" />}
      </div>
      <div>
        <p>Recent images</p>
      </div>
    </div>
  );
}

export default ImageContainer;