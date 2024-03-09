interface ISecondaryButton {
  onClick: () => void,
  text: string,
  outside: 'blue' | 'black',
  fontFamily: 'montserrat' | 'roboto'
  fontWeight: 300 | 400
  fontSize: number
}

export default ISecondaryButton;