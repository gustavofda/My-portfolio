import { styled } from "@mui/material";
import type { ReactNode, ElementType } from "react";

interface StyledButtonProps {
  children: ReactNode;
  component?: ElementType;
  href?: string;
  download?: boolean;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, component = "button", href, download }) => {
  const StyledButtonComponent = styled(component)(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    textDecoration: "none", // Adiciona esta linha para remover o sublinhado
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  }));

  return (
    <StyledButtonComponent href={href} download={download}>
      {children}
    </StyledButtonComponent>
  );
};

export default StyledButton;
