import { IPlansResponse } from '../models/plans'

export interface PlansApiRespoitory {
    ListPlans: () => Promise<IPlansResponse>
}
