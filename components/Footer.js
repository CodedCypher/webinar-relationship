import {
	Box,
	Container,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

export default function SmallWithSocial() {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={4}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}
			>
				<Text>
					© {new Date().getFullYear()} Jim Danielle Encarnacion. All rights
					reserved
				</Text>
				<Stack direction={"row"} spacing={6}>
					<Link
						href="https://www.instagram.com/j1mdel_/"
						target="_blank"
						rel="noreferrer"
					>
						<a
							href="https://www.instagram.com/j1mdel_/"
							target="_blank"
							rel="noreferrer"
						>
							<FaInstagram cursor="pointer" />
						</a>
					</Link>
					<Link
						href="https://www.facebook.com/J1md3l"
						target="_blank"
						rel="noreferrer"
					>
						<a
							href="https://www.facebook.com/J1md3l"
							target="_blank"
							rel="noreferrer"
						>
							<FaFacebookSquare cursor="pointer" />
						</a>
					</Link>
				</Stack>
			</Container>
		</Box>
	);
}
