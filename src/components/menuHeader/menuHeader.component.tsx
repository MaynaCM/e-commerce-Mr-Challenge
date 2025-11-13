"use client";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Text,
  InputGroup as InputIcon,
  Spacer,
  Group,
  Input,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "../ui/color-mode";
import { FiShoppingCart, FiSearch } from "react-icons/fi";

const MenuHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      bg={useColorModeValue("white", "gray.800")}
      px={6}
      py={3}
      shadow="sm"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Flex alignItems="center">
        <Text
          fontWeight="bold"
          fontSize="xl"
          color={useColorModeValue("teal.600", "teal.300")}
        >
          MyStore
        </Text>

        <Group maxW="400px" ml={8}>
          <InputIcon startElement={<FiSearch size={15} />}>
            <Input
              placeholder="Buscar produtos..."
              bg={useColorModeValue("gray.50", "gray.700")}
              _placeholder={{ color: "gray.400" }}
              borderRadius="lg"
            />
          </InputIcon>
        </Group>

        <Spacer />

        <HStack margin={4}>
          <Button colorScheme="teal" size="sm">
            Entrar
          </Button>
          <IconButton aria-label="Carrinho" variant="ghost">
            <FiShoppingCart size={10} />
          </IconButton>

          <IconButton
            aria-label="Alternar tema"
            onClick={toggleColorMode}
            variant="ghost"
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </HStack>
      </Flex>
    </Box>
  );
};

export default MenuHeader;
