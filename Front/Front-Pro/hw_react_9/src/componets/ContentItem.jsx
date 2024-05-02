import React from "react";


const ContentItem = ({title, price, image}) => {

    return(
    <div className="content_item">
                     
        <img src={image}></img>
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
