import {RiShutDownLine} from 'react-icons/ri';
import {Container, Profile, Logout} from './styles';

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/arthurwieb.png" alt="Foto do user"/>
                <div>
                    <span>Bem-vindo</span>
                    <strong>Arthur Machado</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    );
};