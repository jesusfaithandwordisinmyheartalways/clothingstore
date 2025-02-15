




import React, {useState, useEffect} from 'react'




const PaymentSuccess = () => {
  const [orderNumber, setOrderNumber] = useState('');
  

      useEffect(() => {
        const randomUserOrderNumber = Math.floor(100000000 + Math.random() * 900000000); 
        setOrderNumber(randomUserOrderNumber);

      }, [])




  return (
   <>


        <div>
            <div><h1>THANK YOU: YOUR ORDER HAS BEEN PLACED</h1></div>
            <div><h3>Order #:<span>{orderNumber}</span> </h3></div>
        </div>



   </>
  )
}

export default PaymentSuccess
