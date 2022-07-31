import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';
import { HeaderResponsive } from './HeaderResponsive';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://i.imgur.com/hD9KHiI.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 10,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 7,
    },
  },

  title: {
    color: theme.white,
    fontSize: 75,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 60,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 40,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));


const headerLinks = [{link: '/', label: 'Home'}, {link: '/articles', label: 'Articles'}, {link: '/', label: 'Join us'}];

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <HeaderResponsive links={headerLinks} />
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Learn               <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Blockchain
              </Text>{' '} <br/> at Greenwich!</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Greenwich Blockchain Association has been founded by UoG students fascinated by the blockchain technology.
        </Text>

        <Button variant="gradient" gradient={{ from: 'pink', to: 'yellow' }} size="xl" radius="xl" className={classes.control}>
          Join us
        </Button>
      </Container>
    </div>
  );
}