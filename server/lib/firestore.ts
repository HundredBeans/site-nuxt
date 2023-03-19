import { initializeApp, cert, App } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";

let firebaseInstance: App | undefined;

const runtimeConfig = useRuntimeConfig();

const initialize = () => {
  if (firebaseInstance) return;
  firebaseInstance = initializeApp({
    credential: cert({
      projectId: runtimeConfig.firebase.projectId,
      clientEmail: runtimeConfig.firebase.clientEmail,
      privateKey: runtimeConfig.firebase.privateKey,
    }),
  });
};

initialize();

export const firestore = getFirestore();

export const timestamp = FieldValue.serverTimestamp;
