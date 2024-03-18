import RootsLayout from "@/components/RootsLayout";
import { persistor, store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div className="font-bodyFont bg-gray-300">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SessionProvider session={session}>
            <div className="bg-gray-300">
              <RootsLayout>
                <Component {...pageProps} />
              </RootsLayout>
            </div>
          </SessionProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}
