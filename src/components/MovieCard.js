import { Card, Image, Text, Badge, Title, Group, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import MovieModal from './MovieModal';

const MovieCard = ({ title, original_title, name, original_name, overview, imgUrl, adult, rating, votes, genres, released }) => {
    const IMG_URL = `https://image.tmdb.org/t/p/w1280${imgUrl}`;

    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    // const secondaryColor = theme.colorScheme === 'dark'
    //     ? theme.colors.dark[1]
    //     : theme.colors.gray[7];
    // Don't return if it doesn't include poster
    return imgUrl && (
        <div style={{ width: 340, margin: 'auto' }}>
            <Card shadow="sm" p="md" radius="lg" sx={(theme) => ({
                backgroundColor: theme.colors.gray[0],
                transition: 'transform .2s',
                '&:hover': {
                    backgroundColor: theme.colors.gray[8],
                    boxShadow: `.1em .1em .5em black`,
                    transform: 'scale(1.02)',
                    color: 'white'
                },
            })} >
                <Card.Section onClick={() => setOpened(true)}>
                    <Image src={IMG_URL} alt="Norway" height='510px' />
                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                        <Title className="title" order={5} align="center">{title || name}</Title>
                        <Text style={{ width: '100%', marginLeft: '1em' }} align="center">
                            <FaStar />
                            <FaStar color={rating / 2 < 1 ? 'gray' : undefined} />
                            <FaStar color={rating / 2 < 2 ? 'gray' : undefined} />
                            <FaStar color={rating / 2 < 3.5 ? 'gray' : undefined} />
                            <FaStar color={rating / 2 < 4.5 ? 'gray' : undefined} />
                        </Text>
                        {adult &&
                            <Badge color="red" variant="outline">
                                18+
                            </Badge>}
                    </Group>
                </Card.Section>
                <MovieModal opened={opened} setOpened={setOpened} IMG_URL={IMG_URL} title={title} overview={overview}
                    released={released} rating={rating} votes={votes} />
            </Card>
        </div >
    );
};

export default MovieCard;