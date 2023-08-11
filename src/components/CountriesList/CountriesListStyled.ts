import styled from "styled-components"

export const CommonContainer = styled.div`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[14]};

  background-color: ${(props) => props.theme.color.bg};
`;

export const SearchForm = styled.form`
  margin-bottom: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};
`;

export const SearchInput = styled.input`
  position: relative;

  width: ${(props) => props.theme.percentage[10]};

  padding-left: 74px;
  padding-top: 14px;
  padding-bottom: 14px;

  color: #c4c4c4;
  background-color: ${(props) => props.theme.color.altBg};

  font-size: ${(props) => props.theme.size.XS};
  line-height: 1.67;
  font-family: ${(props) => props.theme.fontFamily.body};

  border: none;
  border-radius: 5px;
`;

export const SearchLabel = styled.label`
  position: relative;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 10;

  transform: translateX(32px) translateY(4px);
`;


export const ListStyled = styled.ul`
  padding-right: ${(props) => props.theme.space[13]};
  padding-left: ${(props) => props.theme.space[13]};

`;

export const CountriesItem = styled.div`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[11]};
  }
`;