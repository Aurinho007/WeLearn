import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin-bottom: 16px;
  margin-left: 75px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const ClassroomCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 350px);
  gap: 25px;
  justify-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* Três colunas em telas menores */
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr); /* Duas colunas em telas médias */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Uma coluna em telas pequenas */
  }
`;
