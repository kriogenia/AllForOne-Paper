export enum Role {
	Keeper = "keeper",
	Patient = "patient",
	Blank = "blank"
}

export interface Address {
	firstLine?: string,
	secondLine?: string,
	locality?: string,
	region?: string
}

export class UserSchema {

	@prop({ required: true, unique: true, select: false })
	public googleId?: string;

	@prop({ required: true, enum: Role })
	public role!: Role;

	@prop()
	public displayName?: string;

	@prop()
	public mainPhoneNumber?: string;

	@prop()
	public altPhoneNumber?: string;

	@prop()
	public address?: Address;
	
	@prop()
	public email?: string;

	@prop({ ref: () => UserSchema })
	public bonds?: mongoose.Types.Array<Ref<UserSchema>>;

	@prop({ ref: () => UserSchema })
	public cared?: Ref<UserSchema>;

}
