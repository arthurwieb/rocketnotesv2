
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Container, Form } from "./styles"

export function New() {
    return (
        <Container>
            <Header />
            
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>
                    <Input placeholder="Titulo" />
                    <Textarea placeholder="Obs" />
                    
                    <Section title="Links">
                        <NoteItem value="Link.com"/>
                        <NoteItem isNew placeholder="novo link"/>
                    </Section>
                </Form>
            </main>
        </Container>
    )
}