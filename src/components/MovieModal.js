import { Modal, Image, Text, Title } from '@mantine/core';
import { FaStar } from "react-icons/fa";

let closeBtn = window.innerWidth < 800
const MoviePopup = ({ opened, setOpened, IMG_URL, title, overview, released, rating, votes }) => {
    return (
        <Modal withCloseButton={closeBtn && true}
            opened={opened}
            onClose={() => setOpened(false)}
            centered={true}
            size="xl"
            radius="md"
        >
            <div className="popup-container">

                <Image src={IMG_URL} radius="lg" height='510px' width='310px'></Image>
                <div>
                    <Title order={2}>{title}</Title>
                    <Text size="md" weight={300}>{released}</Text>
                    <Text style={{ marginTop: '1em' }}>
                        <div>
                            <h3>Synopsis:</h3>
                            {overview || 'No synopsis available'}
                        </div>
                        <div style={{ marginTop: '1em' }}>
                            <Text size="lg" weight={600}>Rating:</Text>
                            <Text>{votes} votes</Text>
                            <FaStar />
                            <FaStar color={rating / 2 < 1 ? 'gray' : undefined} />
                            <FaStar color={rating / 2 < 2 ? 'gray' : undefined} />
                            <FaStar color={rating / 2 < 3.5 ? 'gray' : undefined} />
                            <FaStar color={rating / 2 < 4.5 ? 'gray' : undefined} />
                            <span style={{ marginLeft: '.5em', fontSize: '1.15rem' }}>{rating}</span>
                        </div>
                    </Text>
                    <Text style={{ width: '100%', marginLeft: '1em' }} align="center">
                    </Text>
                </div>
            </div>
        </Modal>
    );
};

export default MoviePopup;