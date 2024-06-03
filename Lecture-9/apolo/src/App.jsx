import { useState } from 'react'
import List_Rendring from './List_Rendring'

// const Quotes = [
//   "    The 20-year-old continued to impress for Delhi and dominated attacks, clearly",
//   "   demonstrating that he belonged at a much higher level; that junior cricket ",
//   "   was beneath his standards. Kohli then traveled to Australia in 2009 for the ",
//   "   Emerging players tournament and stamped his authority all over the bowling ",
//   "   attacks. He added 'big-match temperament' to his résumé too, lacing a fluent ",
//   "   hundred in the final against South Africa, and guiding his team to a clinical",
//   "   victory. The young prodigy, barely old enough to receive his man-of-the-match"
// ]






const Product = [
  {
    id: 1,
    name: "iphone15pro",
    price: "80000",
    disc: "Best IOS device",
    discount: "10%",
    color: "black",
    catagories: "mobile",
    img: "https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg"
  },

  {
    id: 2,
    name: "iphone15pro",
    price: "88000",
    disc: "Best IOS device",
    discount: "10%",
    color: "white",
    catagories: "mobile",
    img: "https://m.media-amazon.com/images/I/71nvkHnPpZL._AC_UY327_FMwebp_QL65_.jpg"
  },

  {
    id: 3,
    name: "jacob&co",
    price: "50000",
    discount: "5%",
    color: "gray",
    catagories: "watch"
  },

  {
    id: 4,
    name: "iphone11pro",
    price: "30000",
    disc: "Best IOS device",
    discount: "9%",
    color: "yellow",
    catagories: "mobile"
  },

  {
    id: 5,
    name: "iphone12pro",
    price: "80000",
    disc: "Best IOS device",
    discount: "10%",
    color: "red",
    catagories: "mobile"
  },

  {
    id: 6,
    name: "iphone12",
    price: "80000",
    disc: "Best IOS device",
    discount: "10%",
    color: "red",
    catagories: "mobile"
  },

  {
    id: 7,
    name: "iphone14",
    price: "80000",
    disc: "Best IOS device",
    discount: "10%",
    color: "red",
    catagories: "mobile"
  },

  {
    id: 8,
    name: "iphone14pro",
    price: "80000",
    disc: "Best IOS device",
    discount: "10%",
    color: "red",
    catagories: "mobile"
  },

  {
    id: 9,
    name: "iphone15",
    price: "80000",
    disc: "Best IOS device",
    discount: "10%",
    color: "red",
    catagories: "mobile"
  },

  {
    id: 10,
    name: "iphone15pro",
    price: "80000",
    disc: "Best IOS device",
    discount: "10%",
    color: "red",
    catagories: "mobile",  
    img: "https://m.media-amazon.com/images/I/71nvkHnPpZL._AC_UY327_FMwebp_QL65_.jpg"

  },

  {
    id: 11,
    name: "readminoe10",
    price: "8000",
    disc: "Best IOS device",
    discount: "10%",
    color: "red",
    catagories: "mobile"
  },

  {
    id: 12,
    name: "readminoe10pro",
    price: "8000",
    disc: "Best IOS device",
    discount: "10%",
    color: "red",
    catagories: "mobile"
  }
  
]







function App() {

  const FliterData = Product.filter((data) => data.name === "iphone15pro")

  console.log(FliterData);

  const Render_List = FliterData.map(
    (item) =>
      <div className=''>
        <div>
          <div className='border-2 border-gray-950 m-3 p-4 hover:bg-sky-700 shadow-2xl '>
            <img src="" alt="" />
            <div>
            <img src={item.img} alt="" />
              <h1>{item.name}</h1>
              <h1>{item.color}</h1>
            </div>
          </div>
        </div>
      </div>
  )





  // const Render_List = Quotes.map((item) => <li>{item}</li>)


  return (
   
    <>
      <ul className='flex m-4 p-4 '>
        {Render_List}
      </ul>
    </>
 


  )
}

export default App
