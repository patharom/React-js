import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {

  const cartData = useSelector(state => state.Reducer)

  const amount = cartData.length && cartData.map((item) => item.price).reduce((prev , next) => prev + next)
  return (
      <>
      <h1 className='text-3xl text-center my-10 font-bold'>Shooping Cart</h1>
    <div className='flex justify-around container mx-auto'>

    <table className='border w-full text-cente mt-10 tabel-fix max-w-[800px]'>
    <thead>

      <tr className='h-20'>
        <th className='border-4 border-black'>Item Image</th>
        <th className='border-4 border-black'>Item Name</th>
        <th className='border-4 border-black'>Item Price</th>
      </tr>
    </thead>
      {
        cartData.map((item) =>{
          return(
          
            <tbody key={item.id}>

            <tr className='text-center'>
              <td className='border-2 border-black'><img className='h-28 mx-auto ' src={item.image} alt=""/></td>
              <td className='border-2 border-black'>{item.title}</td>
              <td className='border-2 border-black'>{item.price}</td>

            </tr>
            </tbody>
        
          )
        })
      }
    </table>

    <div>
      <table className='mt-52 border-4 border-black text-center'>
        <thead>

        <tr>
          <th>Total Price</th>
        </tr>
        <tr className='border-4 border-black'>
          <td>{amount}</td>
        </tr>
        </thead>
      </table>
    </div>
    </div>
  </>
  )
}

export default Cart