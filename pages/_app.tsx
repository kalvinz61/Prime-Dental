import Layout from "./layout";
import { AppProps } from "next/app";
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
