export interface UserValidate {
	username: string;
	password: string;
}

export interface User {
	username: string;
	profile: "student" | "teacher";
}
