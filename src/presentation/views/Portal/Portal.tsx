import './Portal.sass'

import { FC, useEffect, useState } from 'react'

import { clientPlansApi, clientUserApi } from '@/core/index'
import { CustomCheckBox } from '@/presentation/common/components/Form'
import { Loading } from '@/presentation/common/components/Loading'
import { CardPlans } from '@/presentation/common/views/Portal/CardPlans'
import {
    PlanHomeClinicImage,
    PlanHomeImage,
} from '@/presentation/toolbox/assets/images'
import { IPlans } from '@/presentation/toolbox/interface/plans'
import { useUserState } from '@/presentation/zustand/userState'

import { portalDefault } from './Portal.default'
import { EOptionQuote } from './Portal.interface'

export const Portal: FC = () => {
    const { user, setUser } = useUserState()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [options, setOptions] = useState<EOptionQuote | null>(null)
    const [plans, setPLans] = useState<IPlans[]>([])

    const handleSelectedOption = async (value: EOptionQuote) => {
        setOptions(value)
        try {
            const { list } = await clientPlansApi.ListPlans()
            setPLans([
                { ...list[0], icon: PlanHomeImage, recommended: false },
                { ...list[1], icon: PlanHomeClinicImage, recommended: true },
                { ...list[3], icon: PlanHomeImage, recommended: false },
            ])
        } catch (error) {
            console.error(error)
            alert(
                'Error al momento de traer la informacion intetelo mas tarde.',
            )
        }
    }

    useEffect(() => {
        const handleUserApi = async () => {
            try {
                setIsLoading(true)
                const userApi = await clientUserApi.ListUserDetail()
                setIsLoading(false)
                const { birthDay, lastName, name } = userApi
                setUser({ ...user, birthDay, lastName, name })
            } catch (error) {
                setIsLoading(true)
                console.error(error)
                alert(
                    'Error al momento de traer la informacion intetelo mas tarde.',
                )
            }
        }

        handleUserApi()
    }, [])

    if (isLoading) {
        return (
            <div className='grid-system-layout'>
                <div className='portal_loading'>
                    <Loading />
                </div>
            </div>
        )
    }

    return (
        <div className='portal'>
            <div className='portal_head'>
                <div className='portal_head_title'>
                    <h1>{user.name} ¿Para quién deseas cotizar?</h1>
                    <p>
                        Selecciona la opción que se ajuste más a tus
                        necesidades.
                    </p>
                </div>
                <div className='portal_head_options'>
                    {portalDefault.map(
                        ({ content, icon, title, value }, idx) => {
                            const selectedCard = options === value

                            return (
                                <div
                                    className={`card custom_card custom_card_short ${selectedCard && 'custom_card_selected'}`}
                                    onClick={() => handleSelectedOption(value)}
                                    key={idx}
                                >
                                    <div className='card_checkbox'>
                                        <CustomCheckBox
                                            value={selectedCard}
                                            onChange={() => {}}
                                            variant='round'
                                        />
                                    </div>
                                    <div className='card_content'>
                                        {icon}
                                        <h3>{title}</h3>
                                        <p>{content}</p>
                                    </div>
                                </div>
                            )
                        },
                    )}
                </div>
            </div>
            {plans.length > 0 && (
                <div className='portal_body'>
                    {plans.map((plans, idx) => (
                        <CardPlans key={idx} plans={plans} />
                    ))}
                </div>
            )}
        </div>
    )
}
