import Layout from "../components/Layout";
import { VStack, Container, useBreakpointValue } from "@chakra-ui/react";
import Header from "../components/Header";
import Importance from "../components/Importance";
import Ways from "../components/Ways";
import Footer from "../components/Footer";

export default function Home() {
	const spacing = useBreakpointValue({ base: "28", md: "40" });

	return (
		<Layout>
			<Container maxW="container.lg" py="20">
				<VStack w="full" h="full" spacing={spacing}>
					<Header />
					<Importance />
					<Ways />
					<Footer />
				</VStack>
			</Container>
		</Layout>
	);
}
