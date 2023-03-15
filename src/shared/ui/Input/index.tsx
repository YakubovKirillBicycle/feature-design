import React, { forwardRef } from "react";

import { inputFieldStyle } from "./ui/style";

export const InputField = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    return <input className={inputFieldStyle} {...props} />
})

InputField.displayName = 'InputField'
