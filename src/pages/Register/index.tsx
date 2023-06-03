import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import {
  BtEntry,
  BtRegister,
  Div,
  DivFormContainer,
  DivHidden,
  FormMain,
  FormRegister,
} from "./style";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Frame 13.png";
import img from "../../assets/image 9.png";
import { motion } from "framer-motion";

export const Register = () => {
  const { formRegister } = useAuth();
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  const handleRegister = (data: RegisterData) => {
    formRegister(data);
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
          <FormMain>
            <div>
              <img src={logo} alt="" />
            </div>

            <h2>Cadastre-se</h2>

            <FormRegister onSubmit={handleSubmit(handleRegister)}>
              <input
                type="text"
                id="name"
                placeholder="Nome"
                {...register("name")}
              />

              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
              />

              <input
                type="text"
                id="phone"
                placeholder="Telefone"
                {...register("phone")}
              />

              <input
                type="password"
                id="password"
                placeholder="Senha"
                {...register("password")}
              />

              <BtEntry type="submit">Register</BtEntry>
              <BtRegister onClick={handleLogin}>Login</BtRegister>
            </FormRegister>
          </FormMain>
          <DivHidden>
            <img src={img} alt="" />
          </DivHidden>
        </Div>
      </DivFormContainer>
    </motion.div>
  );
};
