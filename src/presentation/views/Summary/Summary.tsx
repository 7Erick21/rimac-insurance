import './Summary.sass'

import { FC } from 'react'

import PersonsIcon from '@/presentation/assets/svg/persons.svg'
import { useUserState } from '@/presentation/zustand/userState'

export const Summary: FC = () => {
    const { user, plan } = useUserState()

    const { name, document, phone } = user

    return (
        <div className='summary'>
            <h1>Resumen del seguro </h1>
            <div className='custom_card custom_card_broad'>
                <div className='summary_card'>
                    <div className='summary_card_head'>
                        <p>Precios calculados para:</p>
                        <div>
                            <img src={PersonsIcon} />
                            <p>{name}</p>
                        </div>
                    </div>
                    <div className='summary_card_line' />
                    <div className='summary_card_payment'>
                        <p>Responsable de pago</p>
                        <p>
                            {document.type}: {document.value}
                        </p>
                        <p>Celular: {phone}</p>
                    </div>
                    <div className='summary_card_plan'>
                        <p>Plan elegido</p>
                        <p>{plan?.name}</p>
                        <p>Costo del Plan: ${plan?.price} al mes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
