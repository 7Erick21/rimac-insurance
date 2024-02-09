import './CardPlans.sass'

import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTE_SUMMARY } from '@/presentation/toolbox/constants/route'
import { IPlans } from '@/presentation/toolbox/interface/plans'
import { useUserState } from '@/presentation/zustand/userState'

interface ICardPlansProps {
    plans: IPlans
}

export const CardPlans: FC<ICardPlansProps> = ({ plans }) => {
    const { description, icon, name, price, recommended } = plans

    const navigate = useNavigate()
    const { setPlan } = useUserState()

    const handlePlanSelected = () => {
        setPlan({ ...plans })
        navigate(ROUTE_SUMMARY)
    }

    return (
        <div className='custom_card custom_card_large'>
            <div className='Card_plans'>
                <div className='Card_plans_head'>
                    {recommended && (
                        <div className='Card_plans_head_recommended'>
                            Plan recomendado
                        </div>
                    )}
                    <div className='Card_plans_head_content'>
                        <div className='Card_plans_head_content_body'>
                            <h3>{name}</h3>
                            <div className='Card_plans_head_content_body_description'>
                                <p>Costo del plan</p>
                                <p>${price} al mes</p>
                            </div>
                        </div>
                        <img src={icon} alt={name} />
                    </div>
                </div>
                <div className='Card_plans_line' />
                <div className='Card_plans_content'>
                    <ul>
                        {description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    <button
                        className='class-opacity'
                        onClick={handlePlanSelected}
                    >
                        Seleccionar Plan
                    </button>
                </div>
            </div>
        </div>
    )
}
