import './App.css'
import { addToCart, removeToCart, emptyCart } from './ProductData/Redux/Action'
import { useDispatch } from 'react-redux'
import { ProductData } from './ProductData/ProductRedux/ProductAction'
import Header from './Header'

function App() {

  const dispatch = useDispatch()

  const product = {
    name: 'iphone',
    color: 'Matteblue',
    price: 60000,
    chip: 'M2'
  }

  return (
    <>
      <Header/>
      <button className='btn' onClick={() => dispatch(addToCart(product))}>AddToCart</button>
      <button className='btn' onClick={() => dispatch(removeToCart(product))}>AddToCart</button>
      <button className='btn' onClick={() => dispatch(emptyCart())}>AddToCart</button>
      <button className='btn' onClick={() => dispatch(ProductData())}>ProductCart</button>
    </>
  )
}

export default App