import './Loading.sass'

import { FC } from 'react'

export const Loading: FC = () => {
    return (
        <div className='loading'>
            <div className='loading_content'>
                {Array.from({ length: 12 }).map((_, idx) => (
                    <div key={idx} />
                ))}
            </div>
        </div>
    )
}
