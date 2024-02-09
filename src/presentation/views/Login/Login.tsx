import './Login.sass'

import { FC } from 'react'

import { FormHeader } from '@/presentation/common/views/Login/FormHeader'
import { Formulary } from '@/presentation/common/views/Login/Formulary'
import { FamilyImage } from '@/presentation/toolbox/assets/images'

export const Login: FC = () => {
    return (
        <div className='grid-system-layout login'>
            <div className='login_circle_violet' />
            <div className='login_circle_skye' />
            <div className='login_image_wrapper'>
                <img src={FamilyImage} alt='Rimac seguros family' />
            </div>
            <div className='login_formulary'>
                <FormHeader />
                <Formulary />
            </div>
            <div className='login_mobile'>
                <div className='login_mobile_header'>
                    <FormHeader />
                    <img src={FamilyImage} alt='Rimac seguros family' />
                </div>
                <div className='login_mobile_line' />
                <Formulary />
            </div>
        </div>
    )
}
