import React, { useEffect , useState } from 'react'
import axios from 'axios'  

const Axios_Gate = () => {

    const [data , setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/Product')
        .then((response) => {
            console.log(response);
            setData(response.data)
        })
    } , [ ])
  return (
    <div>
      <h1>This is Axios Page</h1>
      <div>
        {
            data.map((item) => {
                return(
                    <>
                        <div>
                            {item.title}
                            <img src={item.image} alt="" />
                        </div>
                    </>
                )
            })
        }
      </div>
    </div>
  )
}

export default Axios_Gate
