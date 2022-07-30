import { createStyles, Text, Title, Button } from '@mantine/core';
import Lottie from 'react-lottie-player'
import teamworkLottie from './lotties/teamwork.json'

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },


  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },


}));

export function Banner() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>How to join us?</Title>
        <Text weight={500} size="lg" mb={5}>
          Sign up today via the Greenwich Students Union page.
        </Text>
        <Text size="sm" color="dimmed">
          You will receive further instructions about claiming our free NFT Membership Pass via your university email. <br/> See you on the other side!
        </Text>

        <div className={classes.controls}>
          <Button>Join us!</Button>
        </div>
      </div>
      <Lottie
      loop
      animationData={teamworkLottie}
      play
      
    />
    </div>
  );
}