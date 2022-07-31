import { createStyles, Container, Group, Anchor } from '@mantine/core';
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
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function FooterSimple({ links }: FooterSimpleProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Link to={link.link}><Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      size="sm"
    >
      {link.label}
    </Anchor></Link>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <Link to='/'><Image src='https://i.imgur.com/e2jCBrD.png' style={{width: '175px'}} /></Link>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}