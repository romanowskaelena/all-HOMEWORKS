import React from "react"
import DropdownSelect from "./DropdownSelect"
import { useState } from 'react'
import Aside from "./aside"
import ContentItem from "./ContentItem"



const Main = ()=> {

// массив для DropMenu
const [dropMenu, setSort] = useState(
    [
      {
        id: "1",
        label: "Сортировать по: ",
        selected: true
      },
      {
        id: "2",
        label: "- популярности",
        selected: false
      },
       {
        id: "3",
        label: "- цене",
        selected: false
      }
    ]
  );

  
// ф-ция DropMenu
const handleSort = (marker) => {
    const updateSort = dropMenu.map(item => ({
        // Для каждого элемента массива dropMenu создаем новый объект
        ...item, // Переносим все свойства из текущего элемента item
        selected: item.id === marker.id
      }))
  
      setSort(updateSort) 
      } //setSort- устанавливает новое значение updateSort = перерисовкa компонента.  используется хук useState
 
      
// Массив товаров "Рюкзаки"
const backPacks = [ 
    {
        id: '1',
        title: 'Рюкзак Louis Vuitton Discovery ',
        price: 1500,
        image: 'https://i.pinimg.com/originals/a4/b0/2d/a4b02dd9c6ec52fe882845b2866c5f2e.png'
    },
    {
        id: '2',
        title: 'Рюкзак Louis  Discovery GPT-2 ',
        price: 1700,
        image: 'https://pngimg.com/uploads/backpack/backpack_PNG6348.png'
    },
    {
        id: '3',
        title: 'Рюкзак YVL Great Britain ',
        price: 1200,
        image: 'https://avatanplus.com/files/resources/original/57592237cdda0155342daa23.png'
    },
    {
      id: '4',
      title: 'Рюкзак vvbv   GPT-2 ',
      price: 9700,
      image: 'https://pngimg.com/uploads/backpack/backpack_PNG6348.png'
    },
    {
      id: '5',
      title: 'Рюкзак fgrddff  555-h2 ',
      price: 1300,
      image: 'https://pngimg.com/uploads/backpack/backpack_PNG6348.png'
    },
    {
      id: '6',
      title: 'Рюкзак YVL Great Britain ',
      price: 1200,
      image: 'https://avatanplus.com/files/resources/original/57592237cdda0155342daa23.png'
  },
  {
    id: '7',
    title: 'Рюкзак YVL Great Britain ',
    price: 1200,
    image: 'https://avatanplus.com/files/resources/original/57592237cdda0155342daa23.png'
},
{
  id: '8',
  title: 'Рюкзак Louis Vuitton Discovery ',
  price: 1230,
  image: 'https://i.pinimg.com/originals/a4/b0/2d/a4b02dd9c6ec52fe882845b2866c5f2e.png'
},
{
  id: '9',
  title: 'Рюкзак Louis Vuitton Discovery ',
  price: 1600,
  image: 'https://i.pinimg.com/originals/a4/b0/2d/a4b02dd9c6ec52fe882845b2866c5f2e.png'
},
{
  id: '10',
  title: 'Рюкзак Louis Vuitton Discovery ',
  price: 1400,
  image: 'https://i.pinimg.com/originals/a4/b0/2d/a4b02dd9c6ec52fe882845b2866c5f2e.png'
},
];  

return (
<main className="main">
    <div className='main__container'>

      <Aside />

      <div className="content-wrapper">
            <div className='drop-container'>
                <DropdownSelect
                labels={dropMenu}     
                onSelect={handleSort} />
            </div>

            <div className="content">
                
                {/* <ContentItem 
                  image='https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png'
                  title='example'
                  price='example'
                /> */}
               
                {
                  backPacks && backPacks.map(backPack => (
                    <ContentItem
                        title={backPack.title}
                        price={backPack.price}
                        image={backPack.image}
                    />
                  ))
                }

              
            </div>
       </div>
    
    </div>
</main>
    )
}

export default Main

