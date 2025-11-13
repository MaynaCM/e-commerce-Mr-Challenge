import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import MenuHeader from "@/components/menuHeader/menuHeader.component";

export function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
        <MenuHeader />
      <Button colorScheme="teal" onClick={handleClick}>
        Ir para Sobre
      </Button>
    </div>
  );
}
