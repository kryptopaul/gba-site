import { createStyles, Container, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Image } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    
    textDecoration: 'none',
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
  link : {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
    textDecoration: 'none',
  }
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function FooterSimple({ links }: FooterSimpleProps) {
  const { classes } = useStyles();


  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <Link to='/'><Image src='https://i.imgur.com/e2jCBrD.png' style={{width: '175px'}} /></Link>
      <Group className={classes.links}>
      <Link to={"/"} style={{textDecoration: 'none'}}><a
      key={"Home"}
      href={"/"}
      target="_blank"
      className={classes.link}
      rel="noreferrer"
    >
      {'Home'}
    </a></Link>
    <Link to={"/articles"} style={{textDecoration: 'none'}}><a
      key={"Articles"}
      href={"/articles"}
      className={classes.link}
      target="_blank"
      rel="noreferrer"
    >
      {'Articles'}
    </a></Link>
    <a
      key={"Join"}
      href={"https://www.greenwichsu.co.uk/societies/14182/"}
      className={classes.link}
      rel="noreferrer"
      target="_blank"
    >
      {'Join'}
    </a></Group>
      </Container>
    </div>
  );
}