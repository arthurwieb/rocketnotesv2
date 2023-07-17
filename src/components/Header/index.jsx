import { Container, Profile, Logout, SearchHeader, Brand } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Input } from '../Input';
import { useNavigate } from 'react-router-dom';

export function Header({ onChange }) {
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const navigate = useNavigate();

    function handleProfile() {
        navigate('/profile');

    }


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

            <div id="profile-container">
                <div>
                    <strong onClick={handleProfile}>{user.name}</strong>
                    <Logout onClick={signOut}>
                        <p>Sair</p>
                    </Logout>
                </div>
                <Profile to="/profile">
                    <img src={avatarUrl} alt={user.name} />
                </Profile>

            </div>


        </Container>
    );
};