import { EDocumentUser } from '../enum/user'

export interface IDocumentUser {
    type: EDocumentUser
    value: string
}

export interface IUser {
    name: string
    lastName: string
    birthDay: string
    document: IDocumentUser
    phone: number
}
