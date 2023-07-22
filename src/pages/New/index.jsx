
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Buttona';
import { ButtonText } from '../../components/ButtonText';
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

    const navigate = useNavigate();

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleBack() {
        navigate(-1);
    }


    function handleRemoveLink(deletedLink) {
        setLinks(prevState => prevState.filter(link => link !== deletedLink));
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

        if (newLink) {
            return alert("Link não foi adicionado, clique em adicionar!");
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
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
                        <h1>Criar nota</h1>
                        <ButtonText title={"Voltar"} onClick={handleBack} />
                    </header>
                    <Input
                        placeholder="Titulo"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Textarea
                        placeholder="Obs"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
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
                    </Section>

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
                    <Button
                        title="salvar"
                        onClick={handleNewNote}
                    />

                </Form>
            </main>
        </Container >
    )
}