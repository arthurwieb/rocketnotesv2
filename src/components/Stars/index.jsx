import { Container } from "./styles";
import { FiStar } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

export function Stars({ rating, ...rest }) {
    if (!rating) {
        return null;
    }

    let stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<AiFillStar key={i} />);
        } else {
            stars.push(<FiStar key={i} />);
        }
    }

    return (
        <Container {...rest}>
            {stars}
        </Container>
    )
}