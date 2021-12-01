import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Content, Form, FormActions, Background } from "./styles";

export function SignInDevClient() {
  return (
    <Container>
      <Background />
      <Content>
        <Form>
          <h1>Login com Dev</h1>
          <Input icon={FaCode} placeholder="Código" type="text" />
          <Button type="submit">Entrar</Button>
          <FormActions>
            <Link to="/">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  );
}
