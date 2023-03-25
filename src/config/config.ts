import { Unlockable } from "./types";

/*********************************************************
Replace the `unlockables` below with your own content. 
Here are two examples:

1️⃣ Unlock a Submarined file by owning one specific NFT.
{ 
  cid: "<YOUR_CID>", 
  nftId: ["<YOUR_NFT_ID"]
}

2️⃣ Unlock a Submarined file by owning multiple NFTs.
{
  cid: "<YOUR_CID",
  nftId: [
    "<YOUR_FIRST_NFT_ID", "<YOUR_SECOND_NFT_ID", 
  ]
}
*********************************************************/

const unlockables: Unlockable[] = [
  {
    cid: "bafybeicsknf7wnlrumaipcaf4j4mu66ypj3buxx63hiqh4yce5ts5whpye", // HTML blog example
    nftId: [
      "0x45cde8f2973214adbb3c2d7eaa78f2bfe7eefac7f3400aa28f6bba0ee3e8f6fa",
    ], // You need to own 'GM #1' to unlock this.
  },
  {
    cid: "bafybeihx5eacyxeydcpvudwxa242rnjhn67femy46gzas5d2djb24ti5mi", // MP4 video example
    nftId: [
      "0x8aa9d39f44b4b8488d0bbf04ea12bec99ddbe676a1b9a38d853701327437e78c",
    ], // You need to own 'GM #2' to unlock this.
  },
  {
    cid: "bafybeihhx5v3saq3b7n55ub5q3atuw2udbqc5ictkv2ih7vd3hxptu22nu", // Web game example
    nftId: [
      "0x8aa9d39f44b4b8488d0bbf04ea12bec99ddbe676a1b9a38d853701327437e78c",
      "0x3d483f631a391a3706446613929d253cfddcb47900a07593c5004c5e3827d9ee",
    ], // You need to own 'GM #1' & 'GM #2' to unlock this.
  },
];

export { unlockables };
