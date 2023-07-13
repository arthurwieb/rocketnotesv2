import { Container, Profile, Logout, SearchHeader, Brand } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Input } from '../Input';

export function Header({ onChange }) {
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


    return (
        <Container>

            <Brand>
                <h1>RocketMovies</h1>
            </Brand>

            <SearchHeader>
                <Input
                    onChange={onChange}
                    placeholder="Pesquisar"
                />
            </SearchHeader>

            <Profile to="/profile">

                <div>
                    {/* <span>Bem-vindo</span> */}
                    <strong>{user.name}</strong>
                    <Logout onClick={signOut}>
                        <p>Sair</p>
                    </Logout>
                </div>
                <img src={avatarUrl} alt={user.name} />

            </Profile>

        </Container>
    );
};