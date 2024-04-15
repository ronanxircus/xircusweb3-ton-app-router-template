"use client";

import { useEffect } from "react";
import { useWallet } from "@xircus-web3/ton-react";

export default function TonWallet() {
    const wallet = useWallet();
    useEffect(() => {
        if (wallet.status != wallet.CONNECTED) {
            wallet.connect();
        }
    }, [wallet]);
    return (
        <>
            {wallet.status}
            {wallet.status == wallet.CONNECTED ? (
                <button onClick={wallet.disconnect}>Disconnect</button>
            ) : (
                <button onClick={wallet.connect}>Connect Wallet</button>
            )}
        </>
    );
}
