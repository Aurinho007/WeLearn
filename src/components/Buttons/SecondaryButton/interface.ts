interface ISecondaryButton {
  onClick: () => void,
  text: string,
  outside: 'blue' | 'black',
  Ffamily: 'montserrat' | 'roboto'
  Fweight: 400 | 500
  Fsize: number
}

export default ISecondaryButton;