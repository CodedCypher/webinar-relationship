import {
	VStack,
	Heading,
	Text,
	Image,
	Button,
	Stack,
	useBreakpointValue,
	Flex,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const ButtonMotion = motion(Button);
const VStackMotion = motion(VStack);
const StackMotion = motion(Stack);

const Header = () => {
	const display = useBreakpointValue({ base: "none", md: "inlineBlock" });
	const flex = useBreakpointValue({ base: "column", md: "row" });
	return (
		<Flex w="full" alignItems="center" flexDir={flex}>
			<VStackMotion
				w="full"
				align="flex-start"
				spacing={6}
				initial={{ x: "-100vw" }}
				animate={{ x: 0 }}
				style={{ zIndex: 10 }}
				transition={{ type: "spring", bounce: 0.3 }}
			>
				<Heading size="2xl" textTransform="uppercase">
					Simple ways to improve relationship with people
				</Heading>
				<Text>
					Being close to other people is a vital part of our well-being. It’s
					our desire to connect and build relationships.
				</Text>
				<ButtonMotion
					size="md"
					rightIcon={<ArrowForwardIcon />}
					colorScheme="purple"
					onClick={() => {
						// window.scroll(0, 920);  for 3 ways
						window.scroll(0, 572.7999877929688);
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					Learn More
				</ButtonMotion>
			</VStackMotion>
			<StackMotion
				position="relative"
				initial={{ x: "100vw" }}
				animate={{ x: 0 }}
				transition={{ delay: 0.5 }}
			>
				<Image
					src="/images/shareLink.svg"
					maxW="500px"
					display={display}
					alt="image-header"
				/>
				<svg
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
					className="blob"
				>
					<path
						fill="#FAF5FF"
						d="M60,-48.6C73.6,-30.8,77.6,-6.1,69.9,11.3C62.2,28.6,42.8,38.6,22.3,49.7C1.9,60.9,-19.7,73.2,-34.8,67.7C-49.9,62.1,-58.7,38.8,-63.4,15.3C-68.1,-8.2,-68.8,-31.8,-57.6,-49C-46.4,-66.2,-23.2,-77,0,-77C23.2,-77.1,46.4,-66.3,60,-48.6Z"
						transform="translate(100 100)"
					/>
				</svg>
			</StackMotion>
			<style jsx>
				{`
					.blob {
						position: absolute;
						z-index: -1;
						max-width: 45em;
						transform: translateY(-20%) translateX(-10%);
					}
					@media only screen and (max-width: 48em) {
						.blob {
							z-index: -1;
							width: 20em;
							transform: translateY(-80%) translatex(-30%);
						}
					}
				`}
			</style>
		</Flex>
	);
};

export default Header;
