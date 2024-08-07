import { styled } from 'styled-components';
import fonts from '../../../../assets/fonts/fonts';
import theme from '../../../../assets/theme';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.white};
  border: solid 2px ${theme.blue};
  height: 100px;
  border-radius: 8px;
  padding: 8px 16px;
  min-width: 250px;
  color: ${theme.black};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 8px;
`;

const Title = styled.div`
  font-family: ${fonts.montserrat};
  font-weight: 500;
  font-size: 1.3rem;
`;

const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px ${theme.black};
  border-radius: 4px;
  width: 20px;
  height: 20px;
`;

const CheckIcon = styled.img`
    width: 20px;
`;

const DescriptionContainer = styled.div`
  padding: 8px 0 24px 0;
  width: 80%;
  line-height: 20px;
`;

const Description = styled.p`
  font-family: ${fonts.montserrat};
  font-weight: 350;
  font-size: 1.1rem;
  text-align: left;
`;

export { Card, TitleContainer, Title, Checkbox, CheckIcon, DescriptionContainer, Description };