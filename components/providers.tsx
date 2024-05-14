"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/store";
import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <GoogleOAuthProvider clientId="115032277846-a9inqg3bmv5ugmtjeme60gra52bdr81e.apps.googleusercontent.com">
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Toaster />
        {children}
      </Provider>
    </PersistGate>

    // </GoogleOAuthProvider>
  );
}
