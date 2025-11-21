import { render, screen } from "@testing-library/react";
import SearchInput from "./searchInput";
import '@testing-library/jest-dom';

describe("SearchInput component", () => {
  test("deve renderizar o componente sem quebrar", () => {
    render(<SearchInput />);
    // ASSERT
  });

  test("deve renderizar o campo de busca", () => {
    render(<SearchInput />);

    const input = screen.getByPlaceholderText("Buscar produtos...");
    expect(input).toBeInTheDocument();
  });

  test("input deve ter estilos básicos definidos", () => {
    render(<SearchInput />);

    const input = screen.getByPlaceholderText("Buscar produtos...");

    expect(input).toHaveAttribute("placeholder", "Buscar produtos...");
  //validar outras props, com toHaveStyle ou toHaveAttribute
  });

  test("deve renderizar o ícone de busca", () => {
    render(<SearchInput />);

    const icon = screen.getByTestId("search-icon");

    expect(icon).toBeInTheDocument();
  });

  test("deve permitir digitar no input (para praticar fireEvent)", () => {
  });

  test("deve aplicar o style tokens corretamente (tema customizado)", () => {
  });
});
