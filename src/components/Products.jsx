import { useState, useEffect } from 'react'

function Products() {


const [result, setResult] = useState([]);


useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      setResult(result.products)
    })
}, [])

console.log(result)


  return (
    <div className="Products">
      {result.map((art, index) => {
            return (
              <div
              key={index}>
                    
                    <img src={art.images[0]}/>
                    <p >{art.title}</p>
                    <p >{art.brand}</p>
                    <p >{art.description}</p>
                    <p >${art.price}</p>
              </div>    
            );
          })}
    </div>
  )
}

export default Products