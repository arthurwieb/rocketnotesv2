import { Container } from "./styles";

export function Input({icon: Icon, ...rest}) { 
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    )

};

// icon: Icon é só uma conversão de nome