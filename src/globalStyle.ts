import { createGlobalStyle } from "styled-components";
import theme from "./assets/theme";

export const GlobalStyles = createGlobalStyle`
  /* Reseta os estilos padrões */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  /* Ajusta display para HTML5 */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* Reseta estilos de listas */
  ol, ul {
    list-style: none;
  }

  /* Reseta cotações */
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  /* Configura tabelas */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Configurações de root e largura */
  #root {
    width: 100vw;
    max-width: 1820px;
    padding: 0 8%;
    overflow-x: hidden;
    overflow-y: hidden;

  }

  /* Configurações do body */
  body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${theme.lightWhite};
    color: ${theme.black};
    line-height: 1;
    overflow-x: hidden;

  }
`;
