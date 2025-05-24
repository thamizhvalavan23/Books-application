import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Appcontext = createContext(null);


const Appcontextprovider = (props)=> {

    const [cartitem , setCartitem] = useState ({})  
    const [data , setData] = useState({})
    const [token ,setToken] =useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

    const userinfo = async()=>{

        try {

            const {data} = await axios.get("http://localhost:4000/api/admin/get",{headers:{token}})

            if (data.success) {

                setData(data.userDetails)
                
            }else{
                console.log("else error");
                
            }

            
        } catch (error) {
            console.log(error);
            
            
        }


    }


    useEffect(()=> {
        userinfo()

    },[])

    
    
    const addTocart = (item) => {
        setCartitem((prevCart) => {
            const cartData = { ...prevCart };
    
            if (cartData[item.id]) {
                cartData[item.id].quantity += 1;
            } else {
                cartData[item.id] = {
                    item: item,
                    quantity: 1
                };
            }

            console.log(cartitem);
            
    
            return cartData;
        });
    };
    


    const value = {

        addTocart,cartitem,token,setToken,data

    }



    return (
        <div>
            <Appcontext.Provider value={value}>
                {props.children}
            </Appcontext.Provider>
        </div>
    )



}


export default Appcontextprovider