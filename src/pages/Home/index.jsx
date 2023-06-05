import { FiPlus} from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

export function Home(){
    return (
        <Container>
            <Brand>
            <h1>RocketNotes</h1>
            </Brand>

            <Header />
            
            <Menu>
                <li><ButtonText title="a" isActive/></li>
                <li><ButtonText title="b"/></li>
                <li><ButtonText title="c"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar" />

            </Search>

            <Content>

            </Content>

            <NewNote>
                <FiPlus />
                Criar nota

            </NewNote>
        </Container>
    );
}