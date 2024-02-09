import './Layout.sass'

import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { ArrowLeftIcon } from '@/presentation/toolbox/assets/icons'

import { HeaderStepper } from '../../views/Portal/HeaderStepper'

interface IPortalProps {
    children: ReactNode
    path: string
}

export const Layout: FC<IPortalProps> = ({ children, path }) => {
    return (
        <div className='grid-system-layout portal_layout'>
            <div className='portal_layout_body'>
                <HeaderStepper path={path} />
                <div className='portal_layout_body_content'>
                    <Link to={path}>
                        <div className='portal_layout_body_content_back'>
                            <figure>
                                <ArrowLeftIcon width={15} height={15} />
                            </figure>
                            <p>Volver</p>
                        </div>
                    </Link>
                    {children}
                </div>
            </div>
        </div>
    )
}
