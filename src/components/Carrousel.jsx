import {React, useState} from "react";

export function Carrousel({images}){
    
    const imageQuantity= images?.length;
    const [ActualImage, setImage] = useState(0);

    if(!Array.isArray(images) || imageQuantity === 0){
        return;
    }

    const NextImg = () => {
      setImage(ActualImage === imageQuantity - 1 ? 0 : ActualImage + 1)
    }

    const LastImg = () => {
      setImage(ActualImage === 0 ? imageQuantity - 1 : ActualImage - 1)
    }

    return(
        <section className="carrousel-section">
            <button className="carrousel-slide" onClick={LastImg}> ◀ </button>
            <div className="carrousel-body">
                {images.map((image, index) => {
                    return( <>{ActualImage === index && (<img key={index} src={image} className="carrousel-image"/>)}</>)
                    })}
            </div>
            <button className="carrousel-slide" onClick={NextImg}> ▶ </button>
        </section>
    )
  }