"use client";
import {
  Box,
  InputGroup as InputIcon,
  Spacer,
  Group,
  Input,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <Box>
      <Group maxW="400px" ml={8}>
        <InputIcon
          startElement={
            <FiSearch
              data-testid="search-icon"
              size={15}
              color="var(--chakra-colors-subtext)"
            />
          }
        >
          <Input
            placeholder="Buscar produtos..."
            bg="surface"
            color="text"
            _placeholder={{ color: "subtext" }}
            borderColor="border"
            borderWidth="1px"
            borderRadius="lg"
          />
        </InputIcon>
      </Group>

      <Spacer />
    </Box>
  );
};

export default SearchInput;
