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
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

type Children = {
  children: ReactNode
}
type CodeChildren = {
  children: string;
};

/** Text contents */
export const DocsText = ({children}: Children) => <Box mt={4} lineHeight="1.7" whiteSpace="pre-wrap">{children}</Box>
export const DocsHeading2xl = ({children}: Children) => <Heading mt={8} fontSize="2xl">{children}</Heading>
export const DocsHeadingxl = ({children}: Children) => <Heading mt={6} fontSize="xl">{children}</Heading>

/** Decoration */
export const DocsUnderDivider = () => <Divider py={1} />
export const DocsDivider = () => <Divider my={10} />
export const DocsCenterDivider = () => <Divider my={16} mx="auto" w="50%" />

/** Code */
export const DocsCode = ({children}: CodeChildren) => <Box w="100%" fontSize="md"><SyntaxHighlighter language="html" style={monokaiSublime} customStyle={{padding: '12px', borderRadius: '5px'}}>{children}</SyntaxHighlighter></Box>

/** Image */
export const DocsImageBox = ({children}: Children) => <VStack p={8} pb={0} justifyContent="center">{children}</VStack>
