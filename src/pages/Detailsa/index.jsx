import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Buttona";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque molestias vero, necessitatibus omnis aliquam repudiandae unde labore illum maxime repellat qui pariatur! Corrupti, perspiciatis porro. Odit corrupti voluptate laborum?

          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                {" "}
                <a href="">link 1</a>{" "}
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="back" />
        </Content>
      </main>
    </Container>
  );
}
