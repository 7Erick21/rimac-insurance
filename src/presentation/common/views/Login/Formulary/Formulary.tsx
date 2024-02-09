import './Formulary.sass'

import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
    CustomCheckBox,
    CustomInput,
    CustomSelect,
} from '@/presentation/common/components/Form'
import {
    ROUTE_LOGIN,
    ROUTE_PORTAL,
} from '@/presentation/toolbox/constants/route'
import { EDocumentUser } from '@/presentation/toolbox/enum/user'
import { useUserState } from '@/presentation/zustand/userState'

const optionsDocuments = [
    { label: 'DNI', value: EDocumentUser.DNI },
    { label: 'RUC', value: EDocumentUser.RUC },
    { label: 'CE', value: EDocumentUser.CE },
]

export const Formulary: FC = () => {
    const navigate = useNavigate()

    const { user, setUser } = useUserState()

    const [document, setDocument] = useState<EDocumentUser>(EDocumentUser.DNI)

    const [numberDocument, setNumberDocument] = useState<string>('')
    const [errorNumberDocument, setErrorNumberDocument] = useState(false)

    const [phone, setPhone] = useState<string>('')
    const [errorPhone, setErrorPhone] = useState(false)

    const [privacyPolicy, setPrivacyPolicy] = useState<boolean>(false)
    const [communicationsPolicy, setCommunicationsPolicy] =
        useState<boolean>(false)

    const handleChangeNumberDocument = (value: string) => {
        const isValidNumber = /^\d+$/.test(value)

        if (isValidNumber && value.length <= 8) {
            setNumberDocument(value)
            setErrorNumberDocument(false)
        } else if (!isValidNumber && value.length === 0) {
            setNumberDocument(value)
            setErrorNumberDocument(false)
        }
    }

    const handleBlurNumberDocument = (value: string) => {
        if (value.length < 8) setErrorNumberDocument(true)
    }

    const handleChangePhone = (value: string) => {
        const isValidNumber = /^\d+$/.test(value)

        if (isValidNumber && value.length <= 9) {
            setPhone(value)
            setErrorPhone(false)
        } else if (!isValidNumber && value.length === 0) {
            setPhone(value)
            setErrorPhone(false)
        }
    }

    const handleBlurPhone = (value: string) => {
        if (value.length < 9) setErrorPhone(true)
    }

    const handleSumbit = () => {
        if (!disabledButton) {
            setUser({
                ...user,
                document: { type: document, value: numberDocument },
                phone: Number(phone),
            })
            navigate(ROUTE_PORTAL)
        }
    }

    const disabledButton =
        errorNumberDocument ||
        errorPhone ||
        !privacyPolicy ||
        !communicationsPolicy

    return (
        <div className='formulary'>
            <p>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
            </p>

            <div className='formulary_form'>
                <div className='formulary_form_numberDocument'>
                    <div className='formulary_form_numberDocument_input'>
                        <CustomSelect
                            options={optionsDocuments}
                            onChange={(value) =>
                                setDocument(value as EDocumentUser)
                            }
                            value={document}
                            variant='outline'
                        />
                        <CustomInput
                            value={numberDocument}
                            onChange={(value) =>
                                handleChangeNumberDocument(String(value))
                            }
                            onBlur={(value) =>
                                handleBlurNumberDocument(String(value))
                            }
                            placeholder='Nro. de doc'
                            variant='outline'
                        />
                    </div>
                    {errorNumberDocument && (
                        <p className='input_error_message'>
                            Numero de documento inválido.
                        </p>
                    )}
                </div>
                <div className='formulary_form_phone'>
                    <CustomInput
                        value={phone}
                        onChange={(value) => handleChangePhone(String(value))}
                        onBlur={(value) => handleBlurPhone(String(value))}
                        placeholder='Celular'
                    />
                    {errorPhone && (
                        <p className='input_error_message'>
                            Numero de celular inválido.
                        </p>
                    )}
                </div>
            </div>

            <div className='formulary_policy'>
                <div>
                    <CustomCheckBox
                        value={privacyPolicy}
                        onChange={() => setPrivacyPolicy((prev) => !prev)}
                    />
                    <p>Acepto lo Política de Privacidad</p>
                </div>
                <div>
                    <CustomCheckBox
                        value={communicationsPolicy}
                        onChange={() =>
                            setCommunicationsPolicy((prev) => !prev)
                        }
                    />
                    <p>Acepto la Política Comunicaciones Comerciales</p>
                </div>
                <Link to={ROUTE_LOGIN} target='_blank'>
                    <p className='formulary_policy_terms_Conditions'>
                        Aplican Términos y Condiciones.
                    </p>
                </Link>
            </div>

            <button
                className='formulary_button'
                disabled={disabledButton}
                onClick={handleSumbit}
            >
                Cotiza aquí
            </button>
        </div>
    )
}
