export const handleClick = (
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  action: () => void) => {
    
  if (isActive) {
    setIsActive(false);
    action();
    setTimeout(() => {
      setIsActive(true);
    }, 2000)

  }
}