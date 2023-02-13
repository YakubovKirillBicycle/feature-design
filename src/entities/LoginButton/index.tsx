import CustomButton from "shared/ui/Button";

const LoginButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return ( 
    <CustomButton buttonText="Login" buttonProps={{ ...props }} />
   );
}
 
export default LoginButton;