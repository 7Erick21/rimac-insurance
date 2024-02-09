import './Layout.sass'

import { FC, ReactNode } from 'react'

import { Footer } from '@/presentation/common/components/Footer'
import { Header } from '@/presentation/common/components/Header'

interface ILayoutProps {
    children: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <article className='layout'>
            <Header />
            <div className='layout_content'>
                <section className='layout_content_grid'>
                    <section>{children}</section>
                </section>
                <Footer />
            </div>
        </article>
    )
}
