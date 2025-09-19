import { Button } from "@/components/Button/Button";
import { TextInput } from "@/components/Input/TextInput";
import { Title } from "@/components/Text/Title";
import React, { useState } from "react";
import { styled } from "styled-components/native";

const RegisterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  gap: 16px;
  padding: 10%;
  padding-top: 70%;
`;

const HeroImageView = styled.Image`
  position: absolute;
  top: 0;
  width: 100lvw;
  height: 36lvh;
  filter: blur(1.1px) saturate(90%);
  transform: scale(1.2);
`;

const HeroLogo = styled.Image`
  position: absolute;
  top: 10lvh;
  height: 20lvh;
  width: 55lvw;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
`;

export default function RegisterScreen({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <RegisterView>
      <HeroImageView source={require("../assets/images/grandaughter.jpg")} />
      <HeroLogo source={require("../assets/images/logo.png")} />
      <Title>Register</Title>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        secureTextEntry
      />
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirme a senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button
        width="60%"
        title="Entrar"
        onPress={() => navigation.navigate("Login")}
      />
    </RegisterView>
  );
}
