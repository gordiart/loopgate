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
    cid: "bafybeicsknf7wnlrumaipcaf4j4mu66ypj3buxx63hiqh4yce5ts5whpye", // MP4 video example
    nftId: [
      "0x45cde8f2973214adbb3c2d7eaa78f2bfe7eefac7f3400aa28f6bba0ee3e8f6fa",
    ], // You need to own 'GM #2' to unlock this.
  },
  {
    cid: "bafybeicsknf7wnlrumaipcaf4j4mu66ypj3buxx63hiqh4yce5ts5whpye", // Web game example
    nftId: [
      "0x45cde8f2973214adbb3c2d7eaa78f2bfe7eefac7f3400aa28f6bba0ee3e8f6fa",
      "0x45cde8f2973214adbb3c2d7eaa78f2bfe7eefac7f3400aa28f6bba0ee3e8f6fa",
    ], // You need to own 'GM #1' & 'GM #2' to unlock this.
  },
];

export { unlockables };
