import {Container, Brand, Menu, Search, Content, NewNote} from "./styles";
import { Header } from '../../components/Header';
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

            </Search>

            <Content>

            </Content>

            <NewNote>

            </NewNote>
        </Container>
    );
}