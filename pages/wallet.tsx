import NavBar from '@/components/Navbar'
import React from 'react'
import Transaction from '@/components/walletcomponents/Transaction'
import Wallet from '@/components/walletcomponents/Wallet'
import Activity from '@/components/walletcomponents/Activity'



const wallet = () => {


    return (
        <div className="max-w-md mx-auto border-[#457B9D] border-2 rounded-lg ">
            <div className="fixed top-2 w-full z-10">
                <NavBar />
            </div>
            <div className="px-3 pt-12">
                <Wallet/>
               <Transaction/>
               <Activity/>
            </div>
        </div>
    )
}

export default wallet