import './CustomSelect.sass'

import { FC, Fragment, useEffect, useRef, useState } from 'react'

import { ArrowDownIcon } from '@/presentation/toolbox/assets/icons'

interface ISelectOptions {
    label: string
    value: string
}

type EVariantGeneral = 'default' | 'outline'

interface ICustomSelectProps {
    options: ISelectOptions[]
    value: string
    onChange: (value: string) => void
    variant?: EVariantGeneral
}

export const CustomSelect: FC<ICustomSelectProps> = ({
    value,
    options,
    onChange,
    variant = 'default',
}) => {
    const targetRef = useRef<HTMLDivElement>(null)

    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                targetRef.current &&
                !targetRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        const handleEscapeKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        document.addEventListener('keydown', handleEscapeKeyPress)

        return () => {
            document.removeEventListener('click', handleClickOutside)
            document.removeEventListener('keydown', handleEscapeKeyPress)
        }
    }, [])

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [open])

    return (
        <Fragment>
            <div
                ref={targetRef}
                className={`select ${variant === 'outline' && 'select_outline'}`}
                onClick={() => setOpen((prev) => !prev)}
            >
                <div className='select_value'>
                    <div className={`select_value_text`}>{value}</div>
                    <ArrowDownIcon className='select_icon' />
                </div>

                <div
                    className={`select_overlay ${open && 'select_overlay_open'}`}
                >
                    {options.map(({ label, value }, idx) => (
                        <div
                            key={idx}
                            className='select_overlay_option'
                            onClick={() => onChange(value)}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
            {open && <div className='select_background' />}
        </Fragment>
    )
}
