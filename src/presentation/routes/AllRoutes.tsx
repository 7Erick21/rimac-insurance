import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
} from 'react-router-dom'

import { Layout as LayoutGeneral } from '../common/layout/Login'
import { Layout } from '../common/layout/Portal'
import {
    ROUTE_LOGIN,
    ROUTE_PORTAL,
    ROUTE_SUMMARY,
} from '../toolbox/constants/route'
import { Login } from '../views/Login'
import { Portal } from '../views/Portal'
import { Summary } from '../views/Summary'
import { PrivatePlanRoute, PrivateRoute } from './PrivateRoute'

export const allRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path={ROUTE_LOGIN}
            element={
                <LayoutGeneral>
                    <Outlet />
                </LayoutGeneral>
            }
            errorElement={<div>NO HAY PAGINA</div>}
        >
            <Route index element={<Login />} />
            <Route
                path={ROUTE_PORTAL}
                element={
                    <PrivateRoute>
                        <Layout path={ROUTE_LOGIN}>
                            <Portal />
                        </Layout>
                    </PrivateRoute>
                }
            />
            <Route
                path={ROUTE_SUMMARY}
                element={
                    <PrivatePlanRoute>
                        <Layout path={ROUTE_PORTAL}>
                            <Summary />
                        </Layout>
                    </PrivatePlanRoute>
                }
            />
        </Route>,
    ),
)
