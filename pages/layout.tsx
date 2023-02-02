import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div>
			<h1>PRIME DENTAL IMPLANT TECH</h1>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
