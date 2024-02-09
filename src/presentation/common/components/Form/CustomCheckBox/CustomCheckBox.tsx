import './CustomCheckBox.sass'

import { FC } from 'react'

import { CheckIcon } from '@/presentation/toolbox/assets/icons'

interface ICustomCheckBoxProps {
    value: boolean
    onChange: () => void
    variant?: 'default' | 'round'
}

export const CustomCheckBox: FC<ICustomCheckBoxProps> = ({
    onChange,
    value,
    variant = 'default',
}) => {
    return (
        <div
            className={`checkbox_${variant} ${value && `checkbox_${variant}_selected`}`}
            onClick={onChange}
        >
            <CheckIcon
                className={`checkbox_${variant}_icon ${value && `checkbox_${variant}_selected_icon`}`}
            />
        </div>
    )
}
