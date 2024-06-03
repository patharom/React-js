
import React from 'react'

const List_Rendering = () => {
  // const Quotes = [
//   "Every moment matters.",
//   "Be a voice, not an echo.",
//   "Character is power.",
//   "Only a life lived for others is a life worthwhile.",
//   "All is well.",
//   "Be here now.",
//   "You must be the change you wish to see in the world.",
//   "Spread love everywhere you go.",
//   "It always seems impossible until it's done.",
//   "Be yourself; everyone else is already taken.",
//   "The greatness of art is not to find what is common but what is unique.",
//   "Life is short, but it is wide. This too shall pass.",
//   "There are far better things ahead than any we leave behind.",
//   "Not all storms come to disrupt your life, some come to clear your path.",
//   "Turning dreams into plans."
// ]

const Product = [
  {id:1,name:"iphone15",price:89000,disc:"Best IOS Device",discount:"10%",color:"red",catagories:"mobile"},
  {
    id:2,
    name:"iphone15pro",
    price:189000,
    disc:"Best IOS Device",
    discount:"10%",
    color:"gray",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/81+GIkwqLIL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id:3,
    name:"iphone15pro",
    price:189000,
    disc:"Best IOS Device",
    discount:"5%",
    color:"black",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id:4,
    name:"iphone14",
    price:70000,
    disc:"Best Apple Device",
    discount:"10%",
    color:"pink",
    catagories:"mobile"
  },
  {
    id:5,
    name:"Dell",
    price:89000,
    disc:"Best Laptop Device",
    discount:"10%",
    color:"white",
    catagories:"laptop",
  },
  {
    id:6,
    name:"Dell",
    price:90000,
    disc:"Best Gaming Device",
    discount:"10%",
    color:"purple",
    catagories:"laptop",
  },
  {
    id:7,
    name:"lenovo",
    price:189000,
    disc:"Best Performance Device",
    discount:"2%",
    color:"gray",
    catagories:"laptop",
  },
  {
    id:8,
    name:"noise",
    price:9000,
    disc:"Best Watch",
    discount:"10%",
    color:"black",
    catagories:"watch",
  },
  {
    id:9,
    name:"noise",
    price:9000,
    disc:"Best Watch",
    discount:"10%",
    color:"gray",
    catagories:"watch",
  },
  {
    id:10,
    name:"oneplus",
    price:15000,
    disc:"Best Watch",
    discount:"10%",
    color:"gray",
    catagories:"watch",
  },
  {
    id:11,
    name:"firebolt",
    price:9000,
    disc:"Best Watch",
    discount:"10%",
    color:"black",
    catagories:"watch",
  },
  {
    id:12,
    name:"firebolt",
    price:9000,
    disc:"Best Watch",
    discount:"10%",
    color:"black",
    catagories:"watch",
  }
]

const FilterData = Product.filter((data) => data.catagories === "watch")

  console.log(FilterData);

  const Render_List  = FilterData.map(
    (item) => 
    <div className='flex'>
      <div>
        <div>
         <img src={item.img} alt="" />
        </div>
        <div>
          <h1>{item.name}</h1>
          <p>{item.disc}</p>
          <span>{item.price}</span>
        </div>
      </div>
    </div>
   )

  return (
    <div>
      <ul className='flex'>
        {Render_List}
      </ul>
    </div>
  )
}

export default List_Rendering
