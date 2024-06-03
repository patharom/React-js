import React from 'react'



function Om({ name, isDeliver }) {
    if (isDeliver) {
        return <li className='vv'>{name}</li>
    }
    return <li><del><b>{name}</b></del></li>



    // tarnary

    // return <li>
    //     isDeliver ? (name) : (<i>{name}</i>)
    // </li>



}



const Rendring = () => {
    return (
        <div>
            <h1 className='h1'>HELLO HOW ARE  YOU!! -- CUSTOMERS</h1>
            <ul>
                <Om isDeliver={true} name={"1.Amazon Toys"} />
                <Om isDeliver={false} name={"2.Amazon Stationary"} />
                <Om isDeliver={true} name={"3.Amazon mobile"} />
                <Om isDeliver={false} name={"4.Amazon Toys"} />
            </ul>

        </div>
    )
}

export default Rendring
