import CustomButton from "shared/ui/Button";

interface ILoginUserProps {
  onLoginClick: (userData: { userName: string, password: string}) => void
}

const LoginUser = (props: ILoginUserProps) => {
  const { onLoginClick } = props

  const loginClickHandle = () => {
    console.log();
  }

  return (<CustomButton buttonText="Login" buttonProps={{ onClick: loginClickHandle }} /> );
}
 
export default LoginUser;