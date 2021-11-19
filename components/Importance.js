import { VStack, Heading, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
const BoxMotion = motion(Box);
const Importance = () => {
	const y = useRef();
	console.log(y.current?.getBoundingClientRect());

	return (
		<VStack h="full">
			<BoxMotion
				position="relative"
				initial={{ x: "-100vw" }}
				animate={{ x: 0 }}
				transition={{ delay: 1 }}
			>
				<Heading size="lg" mb={3} ref={y}>
					Relationships
				</Heading>
				<Text size="md">
					There are many reasons why we should have relationships, and they are
					often necessary for many reasons. Establishing a relationship can help
					us develop stability, learn how to be a good friend, and it can also
					make us feel included. Family and friendships are important for many
					reasons, including increasing our emotional well-being and learning
					how to trust and be a good friend and be a good family member.
				</Text>
				<svg
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
					className="blob"
				>
					<path
						fill="#FAF5FF"
						d="M60.2,-40.9C76.4,-27.6,86.9,-2.7,78.7,11.7C70.4,26.2,43.4,30.1,21.5,38.1C-0.4,46.1,-17.1,58.2,-30.7,55C-44.4,51.8,-55,33.4,-59.4,13.6C-63.9,-6.2,-62.3,-27.3,-51.4,-39.4C-40.5,-51.5,-20.2,-54.5,0.9,-55.2C22,-55.9,43.9,-54.2,60.2,-40.9Z"
						transform="translate(100 100)"
					/>
				</svg>
			</BoxMotion>
			<style jsx>
				{`
					.blob {
						position: absolute;
						transform: translateY(-60%) translateX(-30%);
						z-index: -1;
						width: 35rem;
					}
				`}
			</style>
		</VStack>
	);
};

export default Importance;
