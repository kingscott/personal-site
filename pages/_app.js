import '../styles/globals.css'
/*import { Navbar } from "../components/navbar";*/
import dynamic from "next/dynamic";

export default function MyApp({ Component, pageProps }) {
  let DynamicNavbar = dynamic(() => import('../components/navbar'), { ssr: false })

  return (
    <DynamicNavbar>
      <Component {...pageProps} />
    </DynamicNavbar>
  );
}
