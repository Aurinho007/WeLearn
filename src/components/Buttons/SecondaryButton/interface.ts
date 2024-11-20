interface ISecondaryButton {
  onClick: () => void,
  text: string,
  outside: "blue" | "black",
  Ffamily: "montserrat" | "poppins"
  Fweight: 400 | 500
  Fsize: number
  width?: string
}

export default ISecondaryButton;