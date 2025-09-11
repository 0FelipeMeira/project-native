import styled from "styled-components/native";
import { BaseText } from "../Text/BaseText";

const TextInputStyle = styled.TextInput`
  width: 100%;
  height: 40px;
  border-color: #ccc;
  border-width: 1px;
  border-radius: 8px;
  padding-horizontal: 8px;
`;

const TextInputContainerStyle = styled.View`
  justify-content:start;
  width: 100%;
  height: auto;
`

export const TextInput = (props: any) => {
  return (
    <TextInputContainerStyle>
      <BaseText>{props.Text}</BaseText>
      <TextInputStyle {...props} />
    </TextInputContainerStyle>
  )
};

