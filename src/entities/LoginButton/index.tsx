import CustomButton from "shared/Button";

const LoginButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return ( 
    <CustomButton buttonText="Login" buttonProps={{ ...props }} />
   );
}
 
export default LoginButton;