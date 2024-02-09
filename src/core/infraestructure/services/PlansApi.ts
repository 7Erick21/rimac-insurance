import { IPlansResponse } from '@/core/domain/models/plans'
import { PlansApiRespoitory } from '@/core/domain/repositories/PlansApiRespoitory'

import { PublicApi } from '../api/Api'

export class PlansApi extends PublicApi implements PlansApiRespoitory {
    public ListPlans = async () => {
        const data = await this.get<IPlansResponse>(`/api/plans.json`)
        return data.data
    }
}
