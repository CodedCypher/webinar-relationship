import {
	VStack,
	HStack,
	Heading,
	Text,
	Image,
	useBreakpointValue,
	Flex,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const HStackMotion = motion(HStack);
const FlexMotion = motion(Flex);
const HeadingMotion = motion(Heading);

const Ways = () => {
	const display = useBreakpointValue({ base: "none", md: "inlineBlock" });
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		console.log("hook in view", inView);
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					type: "spring",
					duration: 1,
					bounce: 0.3,
				},
			});
		}
		if (!inView) {
			animation.start({
				x: "-100vw",
			});
		}
	}, [inView, animation]);

	return (
		<>
			<VStack spacing={10} pt="2">
				<HeadingMotion
					size="2xl"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
				>
					3 Ways
				</HeadingMotion>
				<VStack ref={ref}>
					<HStackMotion alignItems="center" animate={animation}>
						<VStack alignItems="start">
							<Heading textTransform="uppercase" size="lg">
								Become a great Listener
							</Heading>
							<Text>
								Everyone has a basic desire to be understood. Unfortunately,
								most of us tend to get stuck in what we want to say next and
								ignore the other person&apos;s message.
							</Text>
						</VStack>
						<Image
							src="/images/mother_son.svg"
							width={500}
							display={display}
							alt="mother_son"
						/>
					</HStackMotion>
					<FlexMotion animate={animation} alignItems="center">
						<Image
							src="/images/friends.svg"
							width={500}
							display={display}
							alt="friends"
						/>
						<VStack>
							<Heading textTransform="uppercase" size="lg" alignItems="start">
								BE GENUINE, CONFIDENT, HUMBLE, TRUSTWORTHY, POSITIVE, AND FUN
							</Heading>
							<Text>
								Everyone has the fundamental need to be heard and understood.
								Unfortunately, few of us are trained how to listen well. Most
								individuals are too preoccupied with what they are going to say
								next to truly listen to what the other person is saying.
							</Text>
						</VStack>
					</FlexMotion>
					<HStackMotion alignItems="center" animate={animation}>
						<VStack alignItems="start">
							<Heading textTransform="uppercase" size="lg">
								REMEMBER THINGS THAT ARE IMPORTANT TO OTHERS
							</Heading>
							<Text>
								To our ears, there is no more wonderful sound than the sound of
								our own name. Remembering people&apos;s names is the initial
								step in developing a relationship, and remembering other key
								details about them furthers the process. All we have to do is
								listen and pay attention as they tell us what is important in
								their lives.
							</Text>
						</VStack>
						<Image
							src="/images/talking_friend.svg"
							display={display}
							maxW={500}
							alt="talking_friends"
						/>
					</HStackMotion>
				</VStack>
			</VStack>
		</>
	);
};

export default Ways;
