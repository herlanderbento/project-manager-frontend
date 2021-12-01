import { FaEnvelope, FaLock } from "react-icons/fa";
import { Input } from "./../../components/Input";
import { Button } from "../../components/Button";
import { Container, Content, Form, Background } from "./styles";
import { useState, FormEvent } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    console.log(data);
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Login com Dev</h1>
          <Input
            icon={FaEnvelope}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            type="email"
            required
          />
          <Input
            icon={FaLock}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            isPassword
            type="password"
            required
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
      <Background />
    </Container>
  );
}
