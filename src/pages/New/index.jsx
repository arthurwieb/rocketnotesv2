
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Container, Form } from "./styles"
import { Link } from "react-router-dom"


export function New() {
    return (
        <Container>
            <Header />
            
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">
                            Voltar
                        </Link>
                    </header>
                    <Input placeholder="Titulo" />
                    <Textarea placeholder="Obs" />
                    
                    <Section title="Links">
                        <NoteItem value="Link.com"/>
                        <NoteItem isNew placeholder="novo link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder="Nova tag" />
                        </div>
                    </Section>
                <Button title="salvar"/>

                </Form>
            </main>
        </Container>
    )
}