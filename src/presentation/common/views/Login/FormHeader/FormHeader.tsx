import './FormHeader.sass'

import { FC } from 'react'

export const FormHeader: FC = () => {
    return (
        <div className='form_header'>
            <div className='form_header_card'>
                <p>Seguro Salud Flexible</p>
            </div>
            <h1>Creado para ti y tu familia</h1>
        </div>
    )
}
