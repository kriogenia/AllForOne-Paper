export type Message = Partial<TextMessage | TaskMessage>;

export interface TaskMinDto {
	title: string,
	description?: string
	submitter: UserMinDto,
	done: boolean,
	timestamp: number,
	lastUpdate: number
}

export interface TaskDto extends TaskMinDto {
	_id: string,
	type: MessageType
}

export interface NotificationDto {
	_id: string,
	action: Action,
	instigator: string,
	timestamp: number,
	tags?: string[]
}

export interface SessionDto {
	auth: string,
	refresh: string,
	expiration: number
}

export interface UserMinDto {
	_id: string,
	displayName: string
}

export interface UserPublicDto {
	role: Role,
	displayName: string,
	mainPhoneNumber?: string,
	altPhoneNumber?: string,
	address?: Address,
	email?: string,
}

export interface UserDto extends UserPublicDto {
	_id: string
}
