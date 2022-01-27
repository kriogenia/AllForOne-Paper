@modelOptions({ schemaOptions: { collection: "sessions" } })
export class SessionSchema {

	@prop({ required: true, unique: true })
	public refresh!: string;

	@prop({ required: true })
	public auth!: string;

	@prop({ required: true })
	public expiration!: number;

}
