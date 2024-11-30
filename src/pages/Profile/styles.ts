import styled from "styled-components";
import theme from "../../assets/theme";
import Fonts from "../../assets/fonts/fonts";

export const Container = styled.div`
  display: flex;
  justify-content: center;  
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  max-width: 400px;
`;


export const ProfileImg = styled.img`
  width: 90px;
  margin-top: -25px;
  border-radius: 100%;
  border: solid 4px ${theme.black};
`;

export const UserDataContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${Fonts.montserrat};
  font-size: 1.3rem;
  gap: 8px;
  padding: 20px 0;
  border-bottom: solid 3px ${theme.blue};
  margin-bottom: 25px;
`;

export const UserName = styled.p`
  font-weight: 600;
`;

export const UserEmail = styled.p`
  font-weight: 500;
`;

export const LineData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 300px;
  font-family: ${Fonts.montserrat};
  font-size: 1.3rem;
  padding: 8px 0;
`;

export const LineLabel = styled.p`
  font-weight: 500;
`;

export const LineValue = styled.p`
  font-weight: 600;
`;

export const T = styled.span`
  font-size: 1.3rem;
  font-family: ${Fonts.montserrat};
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  margin: 50px 0 30px 0;
`;