import './CustomInput.sass'

import { FC, ReactNode } from 'react'

type EVariantGeneral = 'default' | 'outline'

interface ICustomInputProps<T> {
    value: string
    onChange: (value: T) => void
    onBlur?: (value: T) => void
    placeholder?: string
    variant?: EVariantGeneral
}

export const CustomInput: FC<ICustomInputProps<ReactNode>> = ({
    onChange,
    value,
    onBlur,
    placeholder,
    variant,
}) => {
    return (
        <input
            className={`e-placeholder input ${variant === 'outline' && 'input_outline'}`}
            onChange={(e) => onChange(e.target.value)}
            onBlur={(e) => onBlur?.(e.target.value)}
            value={value}
            placeholder={placeholder}
        />
    )
}
