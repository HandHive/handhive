import React from "react";
import wallet from "../../assets/wallet/wallet.svg";
import errand from "../../assets/wallet/errand.svg";
import Image from "next/image";

const Wallet = () => {

    return (
        <div className="pt-11">

            <div className="bg-white mt-5 px-2 py-3 w-full">
                <div className="flex gap-10">
                    <div className="w-1/2 p-2 bg-white rounded-lg border-2 border-[#80888C]">
                        <div className="flex gap-4">
                            <Image src={wallet} alt="wallet" className="p-2" />
                            <h1 className="text-base font-bold text-[#457B9D]">Balance</h1>
                        </div>
                        <div className="flex gap-4 p-2">
                            <p className="text-base text-black">Total:</p>
                            <h4 className="text-2xl text-black">$20 </h4>
                        </div>
                        <h5 className="text-[#00090D] text-base">cUSD</h5>
                    </div>
                    <div className="w-1/2 p-2 bg-white rounded-lg border-2 border-[#80888C]">
                        <div className="flex gap-4">
                            <Image src={errand} alt="errand" className="p-2" />
                            <h1 className="text-base font-bold text-[#457B9D]">Cashback</h1>
                        </div>
                        <div className="flex gap-4 p-2">
                            <p className="text-base text-black">Total:</p>
                            <h4 className="text-2xl text-black">0 </h4>
                        </div>
                        <h5 className="text-[#00090D] text-base">cUSD</h5>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Wallet;