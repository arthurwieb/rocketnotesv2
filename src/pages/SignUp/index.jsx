import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';

export function SignUp() {
    return (
        <Container>
            <Background/>

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para links</p>

                <h2>Crie sua conta</h2>
                 <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

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
                <Button>
                    Cadastrar
                </Button>

                <a href="#">
                    Voltar para o login
                </a>
                
            </Form>


        </Container>
    );
}