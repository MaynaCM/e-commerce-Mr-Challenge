"use client";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useColorMode } from "../ui/color-mode";
import { FiShoppingCart } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const MenuHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <Box
      as="header"
      bg="bg"
      px={6}
      py={2}
      position="sticky"
      top="0"
      zIndex="10"
      boxShadow="0 4px 4px -2px rgba(0,0,0,0.15)"
    >
      <Flex alignItems="center">
        {/* Logo */}
        <Text fontWeight="700" fontSize="xl" color="text" mr={8}>
          Sneakers
        </Text>

        <HStack gap={4} alignItems="center">
          <Link fontSize={14} color={"text"}>
            {t("MENU.PRODUCTS")}
          </Link>
          <Link fontSize={14} color={"text"}>
            {t("MENU.WOMEN")}
          </Link>
          <Link fontSize={14} color={"text"}>
            {t("MENU.MEN")}
          </Link>
        </HStack>

        <Spacer />
        {/* Right actions */}
        <HStack gap={3} margin={4}>
          <IconButton
            aria-label="Carrinho"
            variant="ghost"
            color="text"
            _hover={{ backgroundColor: "paleOrange", color: "darkOrange" }}
          >
            <FiShoppingCart size={18} />
          </IconButton>

          <Button
            size="sm"
            bg="primary"
            color="white"
            _hover={{ backgroundColor: "paleOrange", color: "darkOrange" }}
          >
            Entrar
          </Button>

          <IconButton
            aria-label="Alternar tema"
            onClick={toggleColorMode}
            variant="ghost"
            color="text"
            _hover={{ backgroundColor: "paleOrange", color: "darkOrange" }}
          >
            {colorMode === "light" ? <IoIosMoon /> : <IoIosSunny />}
          </IconButton>
        </HStack>
      </Flex>
    </Box>
  );
};

export default MenuHeader;
