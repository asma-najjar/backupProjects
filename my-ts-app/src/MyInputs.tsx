import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface MyInputsProps {
    type: HTMLInputTypeAttribute | undefined;
    name: string;
    placeholder: string;
    label: string;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function MyInputs({ type, name, placeholder, label, handleInputChange } : MyInputsProps) {
    return (
    <div>
        <label><b>{label}</b></label>
        <div>
            <input 
            required 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            onChange={handleInputChange} 
            />
        </div>
    </div>
    );
}
