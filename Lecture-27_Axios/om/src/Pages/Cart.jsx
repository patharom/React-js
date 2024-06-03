import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.Reducer);

  const amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  return (
    <>
      <h1 className="text-3xl text-center my-10 font-bold">Shoping Cart</h1>
      <div className="flex justify-around container mx-auto">
        <table className="border w-full text-center mt-20 table-fix max-w-[1000px]">
          <thead>
            <tr>
              <th className="border-2 border-black">Item Image</th>
              <th className="border-2 border-black">Item Name</th>
              <th className="border-2 border-black">Item Price</th>
            </tr>
          </thead>
          {cartData.map((item) => {
            return (
              <tbody key={item.id}>
                <tr>
                  <td className="border-2 border-black">
                    <img className="h-28 m-auto" src={item.image} alt="" />
                  </td>
                  <td className="border-2 border-black">{item.title}</td>
                  <td className="border-2 border-black">{item.price}</td>
                </tr>
              </tbody>
            )
          })
          
          }
        </table>

        <div>
          <table className="mt-20 border-black">
            <thead>
              <tr className="border-2 border-black">
                <th>Total Price</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-2 border-black">
                <td>{amount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
