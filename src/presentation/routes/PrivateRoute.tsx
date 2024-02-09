import { FC, ReactNode } from 'react'
import { Navigate } from 'react-router'

import { ROUTE_LOGIN, ROUTE_PORTAL } from '../toolbox/constants/route'
import { useUserState } from '../zustand/userState'

interface IPrivateRouteProps {
    children: ReactNode
}

export const PrivateRoute: FC<IPrivateRouteProps> = function ({ children }) {
    const { user } = useUserState()
    const { document } = user

    return document.value !== '' ? children : <Navigate to={ROUTE_LOGIN} />
}

export const PrivatePlanRoute: FC<IPrivateRouteProps> = function ({
    children,
}) {
    const { plan, user } = useUserState()
    const { document } = user

    return plan !== null && document.value !== '' ? (
        children
    ) : (
        <Navigate to={ROUTE_PORTAL} />
    )
}
