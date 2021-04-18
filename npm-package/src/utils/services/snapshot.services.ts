import { Snapshot } from "../types";
import {db} from  '../helpers/firebase.helpers'

export async function createSnapshot(snapshot: Snapshot) {
    // send a post request to store the snapshot
    try {
        //const res = await firebaseClient.post("/snapshots.json", snapshot);
        //console.log(res);
        await db.collection("snapshots").doc("1").update(snapshot)   
         const res = await db.collection("snapshots").get()
        console.log(res)
    } catch (e) {
        console.error(e);
    }
}
