import './Footer.sass'

import { FC } from 'react'

import { LogoIcon, LogoMobileIcon } from '@/presentation/toolbox/assets/icons'

export const Footer: FC = () => {
    return (
        <div className='footer'>
            <div className='footer_content'>
                <LogoIcon
                    width={85.39}
                    height={42}
                    className='footer_content_logo_desktop'
                />
                <LogoMobileIcon
                    width={138}
                    height={20}
                    className='footer_content_logo_mobile'
                />
                <div className='footer_content_line' />
                <p>© 2023 RIMAC Seguros y Reaseguros.</p>
            </div>
        </div>
    )
}
