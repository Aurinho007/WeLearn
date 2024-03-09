interface ISecondaryButton {
  onClick: () => void,
  text: string,
  outside: 'blue' | 'black',
  Ffamily: 'montserrat' | 'roboto'
  Fweight: 300 | 400
  Fsize: number
}

export default ISecondaryButton;