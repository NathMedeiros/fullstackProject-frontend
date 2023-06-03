import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import {
  DivFormContainer,
  FormMain,
  Form,
  Div,
  BtEntry,
  BtRegister,
  DivHidden,
} from "./style";
import logo from "../../assets/Frame 13.png";
import img from "../../assets/image 9.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Login = () => {
  const { singIn } = useAuth();
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <DivFormContainer>
        <Div>
          <DivHidden>
            <img src={img} alt="" />
          </DivHidden>
          <FormMain>
            <div>
              <img src={logo} alt="" />
            </div>

            <h2>Login</h2>

            <Form onSubmit={handleSubmit(singIn)}>
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
              />

              <input
                type="password"
                id="password"
                placeholder="Senha"
                {...register("password")}
              />

              <BtEntry type="submit">Entrar</BtEntry>
              <BtRegister onClick={handleRegister}>cadastre-se</BtRegister>
            </Form>
          </FormMain>
        </Div>
      </DivFormContainer>
    </motion.div>
  );
};
