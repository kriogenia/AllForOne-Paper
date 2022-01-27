export enum Action {
	BOND_CREATED = "bond_created",
	BOND_DELETED = "bond_deleted",
	TASK_CREATED = "task_created",
	TASK_DELETED = "task_deleted",
	TASK_DONE = "task_done",
	TASK_UNDONE = "task_undone",
	LOCATION_SHARING_START = "location_sharing_start",
	LOCATION_SHARING_STOP = "location_sharing_stop"
}

@modelOptions({ schemaOptions: { collection: "notifications" }})
export class NotificationSchema {

	@prop({ required: true })
	public action!: Action;

	@prop({ required: true })
	public instigator!: string;

	@prop({ required: true })
	public timestamp!: number;

	@prop({ type: String, default: [] })
	public tags?: mongoose.Types.Array<string>;

	@prop({ ref: () => UserSchema })
	public interested!: Ref<UserSchema>[];

}
