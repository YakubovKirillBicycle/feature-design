import {
  buttonStyle,
  darkButtonStyle,
  defaultButtonStyle,
  disabledButtonStyle,
  disabledDarkButtonStyle,
  disabledDefaultButtonStyle
} from "./ui/style";

enum ButonType {
  TRANSPARENT_LIGHT = 'transparentLight',
  TRANSPARENT_DARK = 'transparentDark',
  NORMAL = 'normal',
}

interface TransparentButtonProps {
  buttonText: string,
  buttonType?: 'transparentLight' | 'transparentDark' | 'normal',
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>,
  disabled?: boolean
}

const CustomButton = (props: TransparentButtonProps) => {
  const { buttonText, buttonType, buttonProps, disabled } = props;
  const buttonStyles = {
    [ButonType.TRANSPARENT_LIGHT]: buttonStyle,
    [ButonType.NORMAL]: defaultButtonStyle,
    [ButonType.TRANSPARENT_DARK]: darkButtonStyle,
  }

  const disabledButtonStyles = {
    [ButonType.TRANSPARENT_LIGHT]: disabledButtonStyle,
    [ButonType.NORMAL]: disabledDefaultButtonStyle,
    [ButonType.TRANSPARENT_DARK]: disabledDarkButtonStyle,
  }

  if (disabled) return (
    <button
      className={disabledButtonStyles[buttonType || ButonType.TRANSPARENT_LIGHT]}
      disabled={disabled}
      {...buttonProps}
    >
      {buttonText}
    </button>
  )

  return (
    <button
      className={buttonStyles[buttonType || ButonType.TRANSPARENT_LIGHT]}
      {...buttonProps}
    >
      {buttonText}
    </button>
  );
}
 
export default CustomButton;