import React from "react";
import { CiStar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";




const ContentItem = ({title, price, image}) => {

    return(
    <div className="content_item">

        <div className="content_item__image">  
            <CiStar className="content_item__icon"/>
            <img src={image}></img>
            <CiShoppingCart className="content_item__icon"/>
        </div> 

        <p>{title}</p>
        <span>{price} $</span>  

    </div>
    )
};

export default ContentItem



{/* 
//   let content = document.querySelectot(".content");
//   content.innerHTML = ""; // очищаем див
 
//   backPacks.forEach(product => { 
//       // для каждого product делаем:

//       let contentItem = document.createElement("div");
//           contentItem.classList.add("content_item");
//       
//       let imageElement = document.createElement("img");
//           imageElement.src = ${backPacks.image}; 

//       let titleElement = document.createElement("p");
//           titleElement.innerText = ${backPacks.title};

//       let priceElement = document.createElement("span");
//           priceElement.innerText = `${backPacks.price} $`;

//       contentItem.append(imageElement); 
//       contentItem.append(titleElement); 
//       contentItem.append(priceElement); 
//
//   })
// } */}
