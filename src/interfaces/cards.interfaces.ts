export interface ICard {
    id: string
    createdAt: string
    updatedAt: string
    cardListId: string
    description: string
    detailedDescription: string
    startDate: string
    finishDate: string
}

export interface ICardList {
    id: string
    createdAt: string
    updatedAt: string
    boardId: string
    name: string
    color: string
    cards?: ICard[]
}
