import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Input } from "./../../components/Input";
import { Button } from "../../components/Button";
import { Container, Content, Form, FormActions, Background } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { ChangeEvent, useEffect, useState } from "react";
import { ICredentialsDev } from "../../interface/credentialsDev";
import { toast } from "react-toastify";

export function SignInDev() {
  const { user, signInDev } = useAuth();

  const [data, setData] = useState<ICredentialsDev>({
    email: "",
    password: "",
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSignInDev(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await signInDev(data);
      toast.success("Login efectuado com sucesso👌");
      setData({
        email: "",
        password: "",
      });
    } catch (err) {
      toast.error("Email ou senha inválida 🤯");
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSignInDev}>
          <h1>Login com Dev</h1>
          <Input
            icon={FaEnvelope}
            name="email"
            value={data.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            type="email"
            required
          />
          <Input
            icon={FaLock}
            name="password"
            value={data.password}
            onChange={handleInputChange}
            placeholder="Senha"
            isPassword
            type="password"
            required
          />
          <Button type="submit">Entrar</Button>
          <FormActions>
            <Link to="/sign-up/dev">Faça seu cadastro</Link>
            <Link to="/">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
}
