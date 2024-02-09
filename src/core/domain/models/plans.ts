export interface IPlanResponse {
    name: string
    price: number
    description: string[]
    age: number
}

export interface IPlansResponse {
    list: IPlanResponse[]
}
