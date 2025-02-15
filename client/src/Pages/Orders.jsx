




import React, { useContext, useEffect, useState } from 'react'
import { ClothingStoreContext } from '../Context/ClothingStoreProvider'
import { products } from '../Components/ArrayData/sitedata'



    const Orders = () => {
            const { delivery_fee, navigate } = useContext(ClothingStoreContext)



        return (
            <>

                    <div className={'orders-container'}>
                        <div className={'orders-wrapper'}>


                                <div>Order History</div>







                        </div>

                    </div>




            </>
        )
    }



    export default Orders