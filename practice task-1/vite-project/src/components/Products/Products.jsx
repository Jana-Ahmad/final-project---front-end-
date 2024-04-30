import {useState} from 'react'

function products() {
    let [items,setItems] = useState([
        {
          "id": 1,
          "title": "iPhone 9", 
          "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        
        },
    
        {
          "id": 2,
          "title": "iPhone X",
          "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        },
        {
          "id": 3,
          "title": "Samsung Universe 9",
          "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    
        },
        ])
    const changeItems= ()=>{
        setItems([
            ...items,
            {
                    "id": 4,
                    "title": "OPPOF19",
                    "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"

                  
            }
        ])
      
    }
  return ( 
    <>
    {
        items.map(item=>
            <div className="dummyItems" key={item.id}>
             <h2>{item.title}</h2>
             <img src={item.thumbnail}/>

       </div>   
       )

    }
    <button onClick={changeItems}>Add Items</button>
    </>
       );
   
    
    
    }
  

export default products