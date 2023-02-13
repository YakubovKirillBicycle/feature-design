import { inputFieldStyle } from "./ui/style";


const InputField = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className={inputFieldStyle}
            {...props}
        />
    );
}
 
export default InputField;