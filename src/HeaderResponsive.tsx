import { createStyles, Header, Container, Group, Burger, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { Image } from '@mantine/core';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    opacity: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    opacity: 1,
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();



  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        
        <Link to='/'><Image src='https://i.imgur.com/e2jCBrD.png' style={{width: '175px'}} /></Link>
        <Group spacing={5} className={classes.links}>
        <Link to={"/"} style={{textDecoration: 'none'}}><a
        rel="noreferrer"
      key={"Home"}
      href={"/"}
      className={cx(classes.link)}
      target="_blank"
    >
      {'Home'}
    </a></Link>
    <Link to={"/articles"} style={{textDecoration: 'none'}}><a
      key={"Articles"}
      href={"/articles"}
      className={cx(classes.link)}
      target="_blank"
      rel="noreferrer"
    >
      {'Articles'}
    </a></Link>
    <a
      key={"Join"}
      href={"https://www.greenwichsu.co.uk/societies/14182/"}
      className={cx(classes.link)}
      target="_blank"
      rel="noreferrer"
    >
      {'Join'}
    </a>

        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
                      <Link to={"/"} style={{textDecoration: 'none'}}><a
      key={"Home"}
      href={"/"}
      className={cx(classes.link)}
      target="_blank"
      rel="noreferrer"
    >
      {'Home'}
    </a></Link>
    <Link to={"/articles"} style={{textDecoration: 'none'}}><a
      key={"Articles"}
      href={"/articles"}
      className={cx(classes.link)}
      target="_blank"
      rel="noreferrer"
    >
      {'Articles'}
    </a></Link>
    <a
      key={"Join"}
      href={"https://www.greenwichsu.co.uk/societies/14182/"}
      className={cx(classes.link)}
      target="_blank"
      rel="noreferrer"
    >
      {'Join'}
    </a>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}