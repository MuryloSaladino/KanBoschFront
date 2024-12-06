export interface INotification {
    id: string,
	message: string,
	actions: {
		url: string,
		title: string
	}
}