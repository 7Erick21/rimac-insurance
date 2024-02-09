import './Stepper.sass'

import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowLeftIcon } from '@/presentation/toolbox/assets/icons'

interface IStepperProps {
    path: string
}

export const Stepper: FC<IStepperProps> = ({ path }) => {
    const navigate = useNavigate()

    const [step, setStep] = useState<number>(1)

    useEffect(() => {
        setTimeout(() => {
            setStep(2)
        }, 500)
    }, [])

    return (
        <div className='stepper'>
            <div className='stepper_step'>
                <div
                    className='stepper_step_icon'
                    onClick={() => navigate(path)}
                >
                    <ArrowLeftIcon className='stepper_step_icon_arrow' />
                </div>
                <div className='stepper_step_text'>
                    Paso <span className='stepper_step_text_step'>{step}</span>{' '}
                    de 2
                </div>
            </div>
            <div
                className={`stepper_bar ${step === 2 && 'stepper_bar_completed'}`}
            />
        </div>
    )
}
