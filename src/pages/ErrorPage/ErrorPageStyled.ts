import styled from "styled-components"

export const ErrorLayout = styled.div`
height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  background-color: ${(props) => props.theme.color.dark};
`;
export const ErrorText = styled.h1`
width: ${props => props.theme.percentage[7]};

  color: ${(props) => props.theme.color.errors};

  font-size: ${props => props.theme.size.XXM};
  font-weight: ${props => props.theme.weight.bold};
  font-family: ${props => props.theme.fontFamily.body};
`;