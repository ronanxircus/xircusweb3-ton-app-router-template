"use client";

// import { XircusProvider, setupSDK } from "@xircus-web3/react";

// export default function Template({ children }: { children: React.ReactNode }) {
//     const sdk = setupSDK("bsc");

//     return <XircusProvider sdk={sdk}>{children}</XircusProvider>;
// }

import { XircusTonProvider } from "@xircus-web3/ton-react";

export default function Template({ children }: { children: React.ReactNode }) {
    return <XircusTonProvider>{children}</XircusTonProvider>;
}
