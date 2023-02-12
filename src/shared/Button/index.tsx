import { buttonStyle, darkButtonStyle, defaultButtonStyle } from "./ui/style";

enum ButonType {
  TRANSPARENT_LIGHT = 'transparentLight',
  TRANSPARENT_DARK = 'transparentDark',
  NORMAL = 'normal',
}

interface TransparentButtonProps {
  buttonText: string,
  buttonType?: 'transparentLight' | 'transparentDark' | 'normal',
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const CustomButton = (props: TransparentButtonProps) => {
  const { buttonText, buttonType, buttonProps } = props;
  const buttonStyles = {
    [ButonType.TRANSPARENT_LIGHT]: buttonStyle,
    [ButonType.NORMAL]: defaultButtonStyle,
    [ButonType.TRANSPARENT_DARK]: darkButtonStyle,
  }

  return (
    <button className={buttonStyles[buttonType || ButonType.TRANSPARENT_LIGHT]} {...buttonProps}>{buttonText}</button>
  );
}
 
export default CustomButton;