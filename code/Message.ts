export enum MessageType {
	Task = "task",
	Text = "text"
}

@modelOptions({ schemaOptions: { collection: "messages" } })
export class MessageSchema {

	@prop({ required: true, ref: () => UserSchema })
	public submitter!: Ref<UserSchema>;

	@prop({ required: true })	// Cached
	public username!: string;

	@prop({ required: true })
	public timestamp!: number;

	@prop({ required: true })
	public lastUpdate!: number;

	@prop({ required: true, select: false })
	public room!: string;

	@prop({ required: true })
	public type!: MessageType

}

export class TextMessageSchema extends MessageSchema {

	@prop({ required: true })
	public message!: string;

}

export class TaskMessageSchema extends MessageSchema {

	@prop({ required: true })
	public title!: string;
	
	@prop()
	public description?: string;
	
	@prop({ required: true })
	public done!: boolean;

}
