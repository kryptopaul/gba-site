import { createStyles, Card, Image, Group, Text, Avatar, Badge } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

interface ArticleCardFooterProps {
  image: string;
  category: string;
  title: string;
  link: any;
  author: {
    name: string;
    description: string;
    image: string;
  };
}

export function NewsCard({
  title,
  image,
  author,
  category,
  link
}: ArticleCardFooterProps) {
  const { classes } = useStyles();

  return (

    <Card component='a' withBorder p="lg" radius="md" className={classes.card} href={link}>
      <Card.Section mb="sm">
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Badge color={'pink'}>{category}</Badge>

      <Text weight={700} className={classes.title} mt="xs">
        {title}
      </Text>

      <Group mt="lg">
        <Avatar src={author.image} radius="sm" />
        <div>
          <Text weight={500}>{author.name}</Text>
          <Text size="xs" color="dimmed">
            {author.description}
          </Text>
        </div>
      </Group>
    </Card>
  );
}