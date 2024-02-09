import { API_URL } from '@/presentation/toolbox/constants/environment'

import { PlansApiUseCase } from './application/PlansApiUseCase'
import { UserApiUseCase } from './application/UserApiUseCase'
import { PlansApi } from './infraestructure/services/PlansApi'
import { UserApi } from './infraestructure/services/UserApi'

// Repositories
const userApi = new UserApi({ baseURL: API_URL })
const plansApi = new PlansApi({ baseURL: API_URL })

// Client
export const clientUserApi = new UserApiUseCase(userApi)
export const clientPlansApi = new PlansApiUseCase(plansApi)
