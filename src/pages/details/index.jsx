import { Container, Links, Content, Avatar, TagsContainer } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars";
import { ButtonText } from "../../components/ButtonText";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiArrowLeft } from 'react-icons/fi';

/*
Aqui provavelmente ja temos o objeto inteiro da nota, então será fácil de trazer os dados, fazer isso amanhã
*/

export function Details() {
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [data, setData] = useState({});

    const params = useParams();
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    async function handleRemove() {
        const confirm = window.confirm("Tem certeza que deseja excluir?");
        if (confirm) {
            await api.delete(`/notes/${params.id}`);
            handleBack()
        }
    }


    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }

        fetchNotes();
    }, []);

    function formatDate(date) {
        const options = { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' };
        return new Date(date).toLocaleString('pt-BR', options);
    }

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>
            <Header />
            {data && (

                <main>

                    <Content>
                        {/* <ButtonBack>
                            <FiArrowLeft size={16} />
                            <span>Voltar</span>
                        </ButtonBack> */}
                        <div className="note-options">
                            <ButtonBack title={"Voltar"} onClick={handleBack} />
                            <ButtonText
                                title="Excluir Nota"
                                onClick={handleRemove}

                            // i'll let this here, it makes more sense
                            />
                        </div>


                        {/* <Button title="back" onClick={handleBack} /> */}

                        <div id="details">
                            {/* <p>{data}</p> //id, title, description, rating, user_id, created_at, updated_at, tags */}
                            <div className="note-detail">
                                <h1>{data.title}</h1>
                                <Stars rating={data.rating} />

                            </div>

                            <div className="user-detail">
                                <Avatar src={avatarUrl} />
                                <span>Por {user.name}</span>
                                <span><AiOutlineClockCircle /> {formatDate(data.created_at)}</span>
                            </div>


                        </div>

                        {data.tags && (
                            <TagsContainer>
                                {
                                    data.tags.map(tag => (
                                        <Tag
                                            title={tag.name}
                                            key={String(tag.id)}
                                        />
                                    ))
                                }
                            </TagsContainer>
                        )}

                        <p>{data.description}</p>

                        {/* {data.links && (
                            <Section title="Links úteis">
                                <Links>
                                    {data.links.map((link) => (
                                        <li key={String(data.id)}>
                                            <a href={link.url} target="_blank">{link.url}</a>
                                        </li>
                                    ))}
                                </Links>
                            </Section>
                        )} */}

                        {/* {data.tags && (
                            <Section title="Marcadores">
                                {
                                    data.tags.map(tag => (
                                        <Tag
                                            title={tag.name}
                                            key={String(tag.id)}
                                        />
                                    ))
                                }
                            </Section>
                        )} */}


                    </Content>
                </main>

            )}
        </Container>
    );
}
