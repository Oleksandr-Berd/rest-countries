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

export const FlagContainer = styled.div`
margin-bottom: 44px;
`

export const Flag = styled.img`
width: ${props => props.theme.percentage[10]};
`

export const CountryName = styled.h3`
margin-bottom: ${props => props.theme.space[4]};

font-size: 22px;
font-weight: ${props => props.theme.weight.bold};
line-height: auto;
`

export const ContentContainer = styled.div`
margin-bottom: ${props => props.theme.space[8]};
`

export const ContentTitle = styled.p`
font-size: ${props => props.theme.size.S};
font-weight: ${props => props.theme.weight.semiBold};
line-height: 2.29;
`

export const Content = styled.span`
  font-weight: ${(props) => props.theme.weight.light};
`;

export const SubTitle = styled.h4`
margin-bottom: ${props => props.theme.space[4]};

  font-size: ${props => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.5;
`;

export const ContentList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
`

export const ListItem = styled.li`
  font-size: ${(props) => props.theme.size.S};
  font-weight: ${(props) => props.theme.weight.light};
  line-height: 2.29;

  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[2]};
  }
`;

export const Neighbor = styled.li`
  width: 96px;

  padding-top: 6px;
  padding-bottom: 6px;

  text-align: center;

  background-color: ${(props) => props.theme.color.altBg};

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:not(:last-child) {
    margin-right: ${props => props.theme.space[3]};
  }
`;