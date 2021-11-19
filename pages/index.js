import Layout from "../components/Layout";
import {
	VStack,
	Container,
	useBreakpointValue,
	Divider,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Importance from "../components/Importance";
import Ways from "../components/Ways";
import Footer from "../components/Footer";
import Image from "next/image";
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
					<Divider />
					<Image
						src="/images/logos.png"
						width="500px"
						height="500px"
						style={{ opacity: 1 }}
					/>
				</VStack>
			</Container>
		</Layout>
	);
}
