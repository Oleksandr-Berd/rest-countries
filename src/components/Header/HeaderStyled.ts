import styled from "styled-components"

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: ${(props) => props.theme.space[8]};
  padding-bottom: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  background-color: ${props => props.theme.color.altBg};

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Title = styled.h1`
font-size: ${props => props.theme.size.S};
font-weight: ${props => props.theme.weight.bold};
line-height: 1.6;
`

export const SwitchButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

background-color: transparent;
border: none;
`;

export const SwitchButtonText = styled.span`
margin-left: ${props => props.theme.space[2]};

font-weight: ${props => props.theme.weight.semiBold};
font-size: ${props => props.theme.size.XS};
`