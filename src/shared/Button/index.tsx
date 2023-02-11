import { buttonStyle } from "./ui/style";

interface TransparentButtonProps {
  buttonText: string,
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const TransparentButton = (props: TransparentButtonProps) => {
  const { buttonText, buttonProps } = props;
  return (
    <button className={buttonStyle} {...buttonProps}>{buttonText}</button>
  );
}
 
export default TransparentButton;