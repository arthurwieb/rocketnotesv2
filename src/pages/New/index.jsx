
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { ButtonBack } from '../../components/ButtonBack';
import { Container, Form } from "./styles"
// import { Link } from "react-router-dom"
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';


export function New() {
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deletedTag) {
        setTags(prevState => prevState.filter(tag => tag !== deletedTag));
    }

    async function handleNewNote() {
        if (!title) {
            return alert("Título não foi adicionado, clique em adicionar!");
        }

        if (newTag) {
            return alert("Tag não foi adicionada, clique em adicionar!");
        }

        if (rating > 5 || rating < 1) {
            return alert("Nota não pode ser maior que 5 ou menor que 1")
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            rating
        });

        alert("Nota criada com sucesso!");
        navigate(-1);
    }




    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <ButtonBack title={"Voltar"} onClick={handleBack} />
                        {/* <ButtonText title={"Voltar"} onClick={handleBack} /> */}
                        <h1>Novo filme</h1>
                    </header>
                    {/* titulo nota
                        obs */}
                    <div className="inputs">
                        <Input
                            placeholder="Titulo"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Rating (1 to 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <Textarea
                        placeholder="Obs"
                        onChange={e => setDescription(e.target.value)}
                    />

                    {/* <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem
                            isNew
                            placeholder="novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section> */}

                    <div className="section">
                        <Section title="Marcadores">
                            <div className="tags">
                                {
                                    tags.map((tag, index) => (
                                        <NoteItem
                                            key={String(index)}
                                            value={tag}
                                            onClick={() => handleRemoveTag(tag)}
                                        />
                                    ))
                                }

                                <NoteItem
                                    isNew
                                    placeholder="Nova tag"
                                    onChange={e => setNewTag(e.target.value)}
                                    value={newTag}
                                    onClick={handleAddTag}
                                />
                            </div>
                        </Section>
                    </div>

                    <div className="footer-buttons">
                        <Button
                            title="Limpar"
                            onClick={() => window.location.reload()}
                        />
                        <Button
                            title="Salvar"
                            onClick={handleNewNote}
                        />
                    </div>
                </Form>
            </main>

        </Container >
    )
}