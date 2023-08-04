import "@globalStyles/globals.css";
import "src/styles/framework.css";

import { TimerProvider } from "@context/TimerContext";

export default function App({ Component, pageProps }) {
  return (
    <TimerProvider>
      <Component {...pageProps} />
    </TimerProvider>
  );
}
