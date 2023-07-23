import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { useState } from 'react';

export function SignUp() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    function handleSignUp(e) {
        if (!name || !password || !email) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, password, email }).then(() => {
            alert("Conta criada com sucesso!");
            navigate("/");
        }).catch(error => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Erro no cadastro!");
            }
        })

    }
    return (
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para links</p>

                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}

                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title='Cadastrar' onClick={handleSignUp} />

                <Link to="/">
                    Voltar para o login
                </Link>

            </Form>


        </Container>
    );
}