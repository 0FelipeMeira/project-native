import { Button } from "@/components/Button/Button";
import { TextInput } from "@/components/Input/TextInput";
import { Title } from "@/components/Text/Title";
import React, { useState } from "react";
import { styled } from "styled-components/native";

const LoginView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  gap: 16px;
  padding: 10%;
  padding-top: 60%;
`;

const FlexView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeroImageView = styled.Image`
  position: absolute;
  top: 0;
  width: 100lvw;
  height: 40lvh;
  filter: blur(1.1px) saturate(90%);
`;

const HeroLogo = styled.Image`
  position: absolute;
  top: 10lvh;
  height: 20lvh;
  width: 55lvw;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
`;

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <LoginView>
      <HeroImageView source={require("../assets/images/happy-couple.png")} />
      <HeroLogo source={require("../assets/images/logo.png")} />

      <Title>Login</Title>
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
      <FlexView>
        <Button type={"secondary"} title="Esqueci a senha" onPress={() => {}} />
        <Button type={"secondary"} title="Reset de senha" onPress={resetForm} />
      </FlexView>
      <Button
        width="60%"
        title="Entrar"
        onPress={() => navigation.navigate("Register")}
      />
    </LoginView>
  );
}
