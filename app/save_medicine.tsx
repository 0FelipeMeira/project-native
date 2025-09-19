import { Button } from "@/components/Button/Button";
import { TextInput } from "@/components/Input/TextInput";
import React, { useState } from "react";
import { Text } from "react-native";
import { styled } from "styled-components/native";

const RegisterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  gap: 16px;
  padding: 10%;
`;

const ScheduleView = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ScheduleInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin: 4px 0;
`;

export default function SaveMedicineScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [schedules, setSchedules] = useState<string[]>([]);

  return (
    <RegisterView>
      <TextInput
        placeholder="Nome do medicamento"
        value={name}
        onChangeText={setName}
        secureTextEntry
      />

      <TextInput
        placeholder="Dosagem"
        value={dosage}
        onChangeText={setDosage}
        secureTextEntry
      />

      <TextInput
        placeholder="Data de inicio"
        value={startDate}
        onChangeText={setStartDate}
        secureTextEntry
      />

      <TextInput
        placeholder="Data de fim"
        value={endDate}
        onChangeText={setEndDate}
        secureTextEntry
      />

      <ScheduleView>
        <Text style={{ width: '100%', textAlign: 'center' }}>Horários</Text>

        <Button
          width="60%"
          title="+"
          onPress={() => setSchedules([...schedules, "Novo Horário"])}
        />
      </ScheduleView>

      <Button
        width="60%"
        title="Entrar"
        onPress={() => navigation.navigate("Login")}
      />
    </RegisterView>
  );
}
