import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }));

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <ScrollLink to="about-section" smooth={true} duration={500}>
                        <MenuItem>About</MenuItem>
                    </ScrollLink>
                    <ScrollLink to="skills-section" smooth={true} duration={500}>
                        <MenuItem>Skills</MenuItem>
                    </ScrollLink>
                    <ScrollLink to="projects-section" smooth={true} duration={500}>
                        <MenuItem>Projects</MenuItem>
                    </ScrollLink>
                </StyledToolbar>
            </AppBar>
        </>
    );
}

export default NavBar;
