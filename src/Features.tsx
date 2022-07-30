import {
    ThemeIcon,
    Text,
    Title,
    Container,
    SimpleGrid,
    useMantineTheme,
    createStyles,
  } from '@mantine/core';
  import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock, TablerIcon } from '@tabler/icons';
  
  export const featuresData = [
    {
      icon: IconUser,
      title: 'Founded by Web3 enthusiasts',
      description:
      "We're a group of 7 students from University of Greenwich passionate about Web3 and the opportunities it offers. We're here to help you learn about it and how to use it to your advantage.",
    },
    {
      icon: IconGauge,
      title: 'Solving real-world problems with Blockchain',
      description:
        'We take pride in finding problems and solving them with Blockchain. We are working with the most advanced technologies to make the world a better place.',
    },
    {
      icon: IconCookie,
      title: "It's not always about the hype.",
      description:
        "We know that our industry is overwhelmed with hype and buzzwords. We'd like to show it from a different angle.",
    },
    {
      icon: IconLock,
      title: 'Regular meet-ups',
      description:
        "We're hosting regular meetups with our members to share our knowledge and experience. We're always looking for new members to join us.",
    },
    {
      icon: IconMessage2,
      title: 'Building awesome stuff',
      description:
        "We're dedicated to building awesome stuff accross different blockchains and are continously expanding our portfolio.",
    },
    {
      icon: IconMessage2,
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