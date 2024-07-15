import React from "react";
import received from "../../assets/wallet/received.svg";
import spent from "../../assets/wallet/spent.svg";
import Image from "next/image";

const Transaction = () => {

    return (
        <div className="pt-11">

            <div className="bg-white mt-5 px-2 py-3 w-full">
                <h1 className="text-[#556166] font-bold">Transaction history</h1>
                <div className="flex gap-40">
                    <div className="flex gap-4 ">
                        <Image src={received} alt="received" className="p-2" />
                        <h1 className="text-base font-bold text-[#457B9D] mt-4">Received</h1>
                    </div>

                    <div>
                        <h1 className="text-base font-bold text-[#457B9D] mt-4">+0.01 cUSD</h1>
                    </div>
                </div>
                <div className="flex gap-44 ">
                    <div className="flex gap-4">
                        <Image src={spent} alt="spent" className="p-2" />
                        <h1 className="text-base font-bold text-[#457B9D] mt-4">Spent</h1>
                    </div>
                    <div >
                        <h1 className="text-base font-bold text-[#457B9D] mt-4">+0.01 cUSD</h1>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default Transaction;