import { PlansApiRespoitory } from '@/core/domain/repositories/PlansApiRespoitory'

export class PlansApiUseCase {
    private repo: PlansApiRespoitory

    constructor(repo: PlansApiRespoitory) {
        this.repo = repo
    }

    public async ListPlans() {
        return this.repo.ListPlans()
    }
}
