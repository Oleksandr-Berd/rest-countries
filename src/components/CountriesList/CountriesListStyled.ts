import styled from "styled-components"

export const ListStyled = styled.ul`
  padding-top: ${(props) => props.theme.space[8]};
  padding-bottom: ${(props) => props.theme.space[14]};
  padding-right: ${(props) => props.theme.space[13]};
  padding-left: ${(props) => props.theme.space[13]};

  background-color: ${props => props.theme.color.bg};
`;

export const CountriesItem = styled.div`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[11]};
  }
`;