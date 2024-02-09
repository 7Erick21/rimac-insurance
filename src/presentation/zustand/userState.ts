import { create } from 'zustand'

import { EDocumentUser } from '../toolbox/enum/user'
import { IPlans } from '../toolbox/interface/plans'
import { IUser } from '../toolbox/interface/user'

interface IUserState {
    user: IUser
    setUser: (newUser: IUser) => void
    plan?: IPlans
    setPlan: (newPlan: IPlans) => void
}

const INITIAL_USER: IUser = {
    birthDay: '',
    document: { type: EDocumentUser.DNI, value: '' },
    name: '',
    lastName: '',
    phone: 0,
}

export const useUserState = create<IUserState>((set) => ({
    user: INITIAL_USER,
    setUser: (newUser) => set(() => ({ user: newUser })),
    setPlan: (newPlan) => set(() => ({ plan: newPlan })),
}))
