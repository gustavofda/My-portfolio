import { Typography, Link, Box } from '@mui/material';
import { styled } from '@mui/system';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';

const FooterContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#232323', 
  color: 'white',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const Contact = () => {
  return (
    <FooterContainer>
      <Typography variant="h6" gutterBottom>
        © 2025, Gustavo Araujo
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: <Link href="mailto:gustavoaraujo2017fise@gmail.com" color="inherit" sx={{ textDecoration: 'none' }}>gustavoaraujo2017fise@gmail.com</Link>
      </Typography>
      <SocialIcons>
        <Link href="https://github.com/gustavofda" target="_blank" color="inherit">
          <GitHub fontSize="large" />
        </Link>
        <Link href="https://www.linkedin.com/in/gustavofda" target="_blank" color="inherit">
          <LinkedIn fontSize="large" />
        </Link>
        <Link href="https://www.instagram.com/gustavo.fda" target="_blank" color="inherit">
          <Instagram fontSize="large" />
        </Link>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Contact;