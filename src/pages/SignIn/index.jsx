import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para links</p>

                <h2>Faça seu login</h2>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                 <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiLogIn}
                />

                <Button>
                    Entrar
                </Button>

                <Link to="/register">
                    Criar conta
                </Link>
                
            </Form>

            <Background/>

        </Container>
    );
}