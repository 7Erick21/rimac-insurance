import './Header.sass'

import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { LogoIcon, PhoneIcon } from '@/presentation/toolbox/assets/icons'
import { ROUTE_LOGIN } from '@/presentation/toolbox/constants/route'

export const Header: FC = () => {
    const { pathname } = useLocation()

    return (
        <div className={`header ${pathname === ROUTE_LOGIN && 'header_login'}`}>
            <div className='header_content'>
                <Link to={ROUTE_LOGIN}>
                    <LogoIcon className='logo' />
                </Link>
                <div className='header_content_links'>
                    <Link
                        className='header_content_links_shop class-opacity'
                        to={ROUTE_LOGIN}
                    >
                        <p>¡Compra por este medio!</p>
                    </Link>
                    <Link
                        to={ROUTE_LOGIN}
                        className='header_content_links_contact class-opacity'
                    >
                        <PhoneIcon width={20} height={20} />
                        <p>(01) 411 6001</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
