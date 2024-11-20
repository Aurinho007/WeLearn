import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin-bottom: 16px;
  /* margin-left: 75px; */

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const ClassroomCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* Três colunas em telas menores */
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr); /* Duas colunas em telas médias */
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
