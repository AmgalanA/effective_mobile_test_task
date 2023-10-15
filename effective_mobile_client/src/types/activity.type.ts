enum ActivityType {
    UPDATE = 'update',
    CREATE = 'create',
}

export interface IActivity {
    id: number;
    type: ActivityType;
    user_id: string;
    time: number;
}