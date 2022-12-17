import type { IPFSHTTPClient } from "ipfs-http-client";
import { create } from "ipfs-http-client";

export const ipfs: IPFSHTTPClient = create({
    host: "localhost",
    port: "5001",
    protocol: "http"
});

export const isIpfsNodeAvailable = async () => {
    var isAvailable = false;
    // run check
    try {
      const myPeerID = (await ipfs.id()).id.toString();
      return true;
    } catch (e) {
      console.log("isIpfsNodeAvailable error: "+e)
      return false;
    }

    return isAvailable;
}

export const getMyPeerID = async () => {
    const myPeerID = (await ipfs.id()).id.toString();
    // console.log("myPeerID: "+myPeerID)
    return myPeerID;
}
export const getIpfsNodeVersion = async () => {
    const result = await ipfs.version()
    return JSON.stringify(result,null,4);
}
export const getIpfsNodeID = async () => {
    const result = await ipfs.id()
    return JSON.stringify(result,null,4);
}
