import React, { useContext } from 'react'
import { useState , useEffect } from 'react'
import { Appcontext } from '../context/Context'

const Cart = () => {

  const{cartitem} = useContext(Appcontext)

  const [cartdata , setCartdata] = useState([])

  useEffect(() => {
    let tempdata = []
    for (const items in cartitem) {
      for (const item in cartitem[items]) {
        if (cartitem[items][item] > 0) {
          tempdata.push({
            _id: items,
            size: item,
            quantity: cartitem[items][item]
          })

        }
      }
    }
    setCartdata(tempdata)

    console.log(cartdata);
    
  }, [cartitem])

  return (
    <div>
      <div className='my-14'>
        {
          cartdata.map(list => <p>{list.name}</p>)
        }
      </div>
      
      
    </div>
  )
}

export default Cart
