
import NextRouterContextProvider from "@/lib/next-router-context";
import '@/styles/globals.css'

 export default function MyApp({ Component, pageProps }) {
  return (
    <NextRouterContextProvider value="page">
      <Component {...pageProps} />
    </NextRouterContextProvider>
  )
}