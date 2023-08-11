import styled from "styled-components"


export const DetailsContainer = styled.div`
  padding-top: ${(props) => props.theme.space[11]};
  padding-bottom: ${(props) => props.theme.space[14]};
  padding-left: ${(props) => props.theme.space[7]};
  padding-right: ${(props) => props.theme.space[7]};

  background-color: ${(props) => props.theme.color.bg};
`;

export const BackButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${(props) => props.theme.space[15]};

  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};

  background-color: ${(props) => props.theme.color.altBg};

  font-weight: ${(props) => props.theme.weight.light};
  font-size: ${(props) => props.theme.size.S};
  font-family: ${(props) => props.theme.fontFamily.body};
  line-height: 1.43;

  border: none;
border-radius: 2px;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  & > span {
    margin-left: ${(props) => props.theme.space[2]};
  }
`;

export const Flag = styled.img`
width: ${props => props.theme.percentage[10]};
`