export const onlinehost = import.meta.env.VITE_API_URL;
export const localhost = import.meta.env.VITE_API_URL_LOCAL;
export const env = import.meta.env.VITE_ENVIRONMENT;

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

export const storageURL = import.meta.env.VITE_STORAGE_URL;