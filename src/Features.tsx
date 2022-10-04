import {
    ThemeIcon,
    Text,
    Container,
    SimpleGrid,
    useMantineTheme,
    createStyles,
  } from '@mantine/core';
  import { IconUser, IconMessage2, TablerIcon, IconUsers, IconSchool, IconConfetti, IconTicket, IconNews } from '@tabler/icons';
  
  export const featuresData = [
    {
      icon: IconUser,
      title: 'Founded by Web3 enthusiasts',
      description:
      "We're a group of students from University of Greenwich passionate about Web3. We're here to help you learn about it and how to use it to your advantage.",
    },
    {
      icon: IconUsers,
      title: 'An awesome community of students',
      description:
        "We're aiming to grow a friendly community of students who share a common interest in blockchain and the technology behind it.",
    },
    {
      icon: IconConfetti,
      title: "It's not always about the hype.",
      description:
        "We know that our industry is overwhelmed with hype and buzzwords. We'd like to show it from a different, more professional angle.",
    },
    {
      icon: IconSchool,
      title: 'Regular meet-ups and workshops',
      description:
        "We're hosting regular meetups with our members to share our knowledge and experience. Are you a developer? Join us for our Solidity workshops!",
    },
    {
      icon: IconTicket,
      title: 'NFT membership passes.',
      description:
        "Our membership passes are distributed as NFTs. You can use them to prove your membership and get access to our events.",
    },
    {
      icon: IconNews,
      title: 'Keep up with the trends',
      description:
        "We're a perfect community to join if you're interested in keeping up with the latest Web3 industry news.",
    }
    
  ];
  
  interface FeatureProps {
    icon: TablerIcon;
    title: React.ReactNode;
    description: React.ReactNode;
  }
  
  export function Feature({ icon: Icon, title, description }: FeatureProps) {
    const theme = useMantineTheme();
    return (
      <div>
        <ThemeIcon variant="gradient" gradient={{ from: 'pink', to: 'yellow' }} size={40} radius={40} >
          <Icon size={20} stroke={1.5} />
        </ThemeIcon>
        <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{title}</Text>
        <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
          {description}
        </Text>
      </div>
    );
  }
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl * 4,
      paddingBottom: theme.spacing.xl * 4,
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      marginBottom: theme.spacing.md,
      textAlign: 'left',
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: 28,
        textAlign: 'left',
      },
    },
  
    description: {
      textAlign: 'left',
  
      [theme.fn.smallerThan('sm')]: {
        textAlign: 'left',
      },
    },
  }));
  
  interface FeaturesGridProps {
    title: React.ReactNode;
    description: React.ReactNode;
    data?: FeatureProps[];
  }
  
  export function Features({ title, description, data = featuresData }: FeaturesGridProps) {
    const { classes, theme } = useStyles();
    const features = data.map((feature, index) => <Feature {...feature} key={index} />);
  
    return (
      <Container className={classes.wrapper}>
        <h1>{title}</h1>
          <Text size="sm" className={classes.description}>
            {description}
          </Text>

  
        <SimpleGrid
          mt={60}
          cols={3}
          spacing={theme.spacing.xl * 2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: 'xl' },
            { maxWidth: 755, cols: 1, spacing: 'xl' },
          ]}
        >
          {features}
        </SimpleGrid>
      </Container>
    );
  }