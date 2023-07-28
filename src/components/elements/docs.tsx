import {
  Box,
  VStack,
  Text,
  Divider,
  Flex,
  Heading,
  calc,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type Children = {
  children: ReactNode
}

/** Text contents */
export const DocsText = ({children}: Children) => <Text mt={4}>{children}</Text>
export const DocsHeading2xl = ({children}: Children) => <Heading mt={4} fontSize="2xl">{children}</Heading>
export const DocsHeadingxl = ({children}: Children) => <Heading mt={4} fontSize="xl">{children}</Heading>

/** decoration */
export const DocsUnderDivider = () => <Divider py={1} />
export const DocsDivider = () => <Divider my={16} />
