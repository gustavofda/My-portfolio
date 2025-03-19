import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import { styled } from '@mui/system';

interface StyledButtonProps extends ButtonProps {
  component?: React.ElementType;
  href?: string;
  download?: string;
}

const StyledButtonComponent = styled(Button)<StyledButtonProps>(({ theme }) => ({
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
  textDecoration: "none", 
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, component = "button", href, download }) => {
  return (
    <StyledButtonComponent component={component} href={href} download={download}>
      {children}
    </StyledButtonComponent>
  );
}

export default StyledButton;
