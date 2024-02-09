import {
    PersonShieldAddIcon,
    PersonShieldIcon,
} from '@/presentation/toolbox/assets/icons'

import { EOptionQuote, IOptionsQuote } from './Portal.interface'

export const portalDefault: IOptionsQuote[] = [
    {
        icon: <PersonShieldIcon />,
        title: 'Para mi',
        content:
            'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
        value: EOptionQuote.FOR_ME,
    },
    {
        icon: <PersonShieldAddIcon />,
        title: 'Para alguien más',
        content:
            'Realiza una cotización para uno de tus familiares o cualquier persona.',
        value: EOptionQuote.FOR_SOMEONE_ELSE,
    },
]
