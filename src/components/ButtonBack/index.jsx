import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export function ButtonBack({ title, onClick, ...rest }) {
    const navigate = useNavigate();
    const handleClick = () => {
        onClick();
        navigate(-1);
    };

    return (
        <Container
            type="button"
            {...rest}
            onClick={handleClick}
        >
            <FiArrowLeft size={16} />
            <span>{title}</span>
        </Container>
    )
}
