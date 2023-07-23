import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Buttona';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { ButtonBack } from '../../components/ButtonBack';

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

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>


            <Form>
                <h1>Rocket Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>


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

                <ButtonBack className="voltar-btn" title={'Voltar para o login'} onClick={handleBack} />

            </Form>
            <Background />


        </Container>
    );
}