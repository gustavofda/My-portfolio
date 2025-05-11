import type * as React from 'react';
import { Container, Grid, Typography, styled, Tooltip, LinearProgress, useTheme, } from '@mui/material';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiMongodb } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

interface SkillsProps {
  id: string;
}

interface Skill {
  name: string;
  icon: React.JSX.Element;
  description: string;
  proficiency: number; 
  link: string;
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: <FaReact size={80} color="#61DAFB" />,
    description: 'Biblioteca para interfaces modernas e reativas.',
    proficiency: 90,
    link: 'https://react.dev/',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={80} color="#339933" />,
    description: 'Ambiente para aplicações backend em JavaScript.',
    proficiency: 85,
    link: 'https://nodejs.org/',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={80} color="#007ACC" />,
    description: 'Superset do JavaScript com tipagem estática.',
    proficiency: 80,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'JavaScript',
    icon: <FaJs size={80} color="#F7DF1E" />,
    description: 'Linguagem essencial para web moderna.',
    proficiency: 95,
    link: 'https://developer.mozilla.org/docs/Web/JavaScript',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 size={80} color="#E34F26" />,
    description: 'Estrutura semântica para páginas web.',
    proficiency: 90,
    link: 'https://developer.mozilla.org/docs/Web/HTML',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt size={80} color="#1572B6" />,
    description: 'Estilização avançada para web.',
    proficiency: 85,
    link: 'https://developer.mozilla.org/docs/Web/CSS',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb size={80} color="#47A248" />,
    description: 'Banco de dados NoSQL orientado a documentos.',
    proficiency: 70,
    link: 'https://www.mongodb.com/',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={80} color="#181717" />,
    description: 'Plataforma para versionamento e colaboração.',
    proficiency: 90,
    link: 'https://github.com/',
  },
];

const StyledSkills = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('xs')]: {
    paddingTop: '100px',
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '0',
  },
}));

const IconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4),
}));

const IconItem = styled('a')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  width: 130,
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  background: theme.palette.background.paper,
  padding: theme.spacing(2, 1),
  '&:hover': {
    transform: 'scale(1.07)',
    boxShadow: theme.shadows[4],
    background: theme.palette.action.hover,
  },
}));

const StyledHr = styled('hr')(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  width: '50%',
  margin: `${theme.spacing(0.5)}px auto`,
}));

const FadeInBox = styled('div')<{ inview?: boolean }>(({ inview }) => ({
  opacity: inview ? 1 : 0,
  transform: inview ? 'translateY(0)' : 'translateY(40px)',
  transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
}));

const Skills: React.FC<SkillsProps> = ({ id }) => {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <StyledSkills id={id}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <FadeInBox ref={ref} inview={!!inView}>
              <Typography variant="h1" align="center" gutterBottom>
                Skills
              </Typography>
              <StyledHr />

              <Typography
                variant="h5"
                paragraph
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: theme.palette.primary.main,
                }}
              >
                Discover the skills and tools I master to create creative and functional solutions for my clients.
              </Typography>
              <Typography
                variant="h5"
                paragraph
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  color: theme.palette.text.secondary,
                  mb: 2,
                }}
              >
                I'm a Front-End Developer specialized in creating engaging and responsive web interfaces. With skills in JavaScript, React + Vite, HTML 5 and Tailwind CSS. Focused on transforming designs into high-quality, functional code. I'm committed to delivering efficient and satisfying digital solutions to my clients.
              </Typography>
            </FadeInBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <IconContainer>
              {skills.map((skill) => (
                <Tooltip key={skill.name} title={skill.description} arrow>
                  <IconItem href={skill.link} target="_blank" rel="noopener noreferrer">
                    {skill.icon}
                    <Typography variant="body1" align="center" sx={{ mt: 1 }}>
                      {skill.name}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={skill.proficiency}
                      sx={{
                        width: '80%',
                        height: 8,
                        borderRadius: 5,
                        mt: 1,
                        backgroundColor: theme.palette.grey[300],
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: theme.palette.primary.main,
                        },
                      }}
                    />
                    <Typography variant="caption" color="textSecondary" sx={{ mt: 0.5 }}>
                      {skill.proficiency}%
                    </Typography>
                  </IconItem>
                </Tooltip>
              ))}
            </IconContainer>
          </Grid>
        </Grid>
      </Container>
    </StyledSkills>
  );
}

export default Skills;