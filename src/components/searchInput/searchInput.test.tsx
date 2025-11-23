import { render, screen } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import SearchInput from "./searchInput";
import '@testing-library/jest-dom';
import type { ReactElement } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../../theme"

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};

const renderWithChakra = (ui: ReactElement, options?: RenderOptions) =>
 render(ui, { wrapper: AllProviders, ...options });

describe("SearchInput component", () => {
  test("deve renderizar o componente sem quebrar", () => {
   renderWithChakra(<SearchInput />);
    // ASSERT
  });

  test("deve renderizar o campo de busca", () => {
   renderWithChakra(<SearchInput />);

    const input = screen.getByPlaceholderText("Buscar produtos...");
    expect(input).toBeInTheDocument();
  });

  test("input deve ter estilos básicos definidos", () => {
   renderWithChakra(<SearchInput />);

    const input = screen.getByPlaceholderText("Buscar produtos...");

    expect(input).toHaveAttribute("placeholder", "Buscar produtos...");
  //validar outras props, com toHaveStyle ou toHaveAttribute
  });

  test("deve renderizar o ícone de busca", () => {
   renderWithChakra(<SearchInput />);

    const icon = screen.getByTestId("search-icon");

    expect(icon).toBeInTheDocument();
  });

  test("deve permitir digitar no input (para praticar fireEvent)", () => {
  });

  test("deve aplicar o style tokens corretamente (tema customizado)", () => {
  });
});
