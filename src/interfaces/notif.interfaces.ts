export interface INotification {
    id: string
	createdAt: string
	updatedAt: string
	email: string
	details: {
		id: string
		birthdate: string
		firstName: string
		lastName: string
		profilePicture: string | null
	}
}