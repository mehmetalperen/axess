import { firebaseClient } from "../helpers";
import { Snapshot } from "../types";

export async function createSnapshot(snapshot: Snapshot) {
    // send a post request to store the snapshot
    try {
        const res = await firebaseClient.post("/snapshots.json", snapshot);
        console.log(res);
    } catch (e) {
        console.error(e);
    }
}
