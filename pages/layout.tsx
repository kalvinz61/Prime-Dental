import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Layout({ children }) {
	return (
		<div>
			<h1>PRIME DENTAL IMPLANT TECH</h1>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
