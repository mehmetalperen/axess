import { Snapshot } from "../types";
import { db } from "../helpers/firebase.helpers";

export async function createSnapshot(snapshot: Snapshot) {
    try {
        await db.collection("snapshots").add({
            before: {
                html: snapshot.before.src,
            },
            after: {
                html: snapshot.after.src,
            },
            violation: snapshot.violation,
        });
        const res = await db.collection("snapshots").get();
        console.log(res);
    } catch (e) {
        console.error(e);
    }
}
