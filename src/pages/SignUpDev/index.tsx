import { Link, useHistory } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Content, Form, FormActions, Background } from "./styles";
import { ISignUpDev } from "../../interface/devForm";
import { useState, useCallback, ChangeEvent } from "react";
import api from "../../services/api";

export function SignUpDev() {
  const history = useHistory();

  const [model, setModel] = useState<ISignUpDev>({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModel({
        ...model,
        [e.target.name]: e.target.value,
      });
    },
    [model]
  );

  const handleFormOnSubmit = useCallback(
    async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const response = await api.post("/users", model);
        console.log(response);
        toast.success('Usuário cadastrado com sucesso👌')
        
        setModel({
          name: "",
          email: "",
          password: "",
        });

        history.push('/sign-in/dev');
      } catch (err) {
        toast.error('Falha ao cadastrar usuário 🤯')
        console.log(err);
      }
    },
    [model, history]
  );

  return (
    <Container>
      <Content>
        <Form onSubmit={handleFormOnSubmit}>
          <h1>Login com Dev</h1>
          <Input
            name="name"
            value={model.name}
            onChange={handleInputChange}
            icon={FaUser}
            placeholder="Digita o nome"
            type="text"
            required
          />
          <Input
            name="email"
            value={model.email}
            onChange={handleInputChange}
            icon={FaEnvelope}
            placeholder="Digita o email"
            type="email"
            required
          />
          <Input
            name="password"
            value={model.password}
            onChange={handleInputChange}
            icon={FaLock}
            placeholder="Digita a senha"
            isPassword
            type="password"
            required
          />
          <Button type="submit">Entrar</Button>
          <FormActions>
            <Link to="/sign-in/dev">Já tenho uma conta</Link>
            <Link to="/sign-in/dev">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
}
