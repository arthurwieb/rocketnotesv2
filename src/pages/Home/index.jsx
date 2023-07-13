import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote, AddMenu } from "./styles";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();


    function handleTagSelected(tagName) {
        if (tagName === "all") {
            return setTagsSelected([]);
        }
        const alreadySelected = tagsSelected.includes(tagName);
        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(item => item !== tagName);
            setTagsSelected(filteredTags);
        } else {
            setTagsSelected(prevState => [...prevState, tagName]);
        }
    }
    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    //fetchNotes
    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data);
        }
        fetchNotes();
    }, [tagsSelected, search])


    //fetchTags
    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags');
            setTags(response.data);
        }
        fetchTags()
    }, [])
    return (
        <Container>
            {/* Está agora no header <Brand>
                <h1>RocketMovies</h1>
            </Brand> */}

            <Header
                onChange={e => setSearch(e.target.value)}
            />

            {/* isso será removido, a pagina ocupará toda tela */}
            {/* <Menu>
                <li>
                    <ButtonText
                        title="Todos"
                        onClick={() => handleTagSelected("all")}
                        isActive={tagsSelected.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                isActive={tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }
            </Menu> */}

            {/* <Search>
                <Input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Pesquisar"
                />
            </Search> */}
            <AddMenu>
                <h1>Meus filmes</h1>
                {/* <Button title={'Adicionar filme'} /> */}
                <NewNote to="/new">
                    <FiPlus />
                    Adicionar filme
                </NewNote>
            </AddMenu>

            <Content>
                {
                    notes.map(note => (
                        <Note
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note.id)}
                        />
                    ))
                }
                {
                    notes.map(note => (
                        <Note
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note.id)}
                        />
                    ))
                }
                {
                    notes.map(note => (
                        <Note
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note.id)}
                        />
                    ))
                }
            </Content>


        </Container >
    );
}