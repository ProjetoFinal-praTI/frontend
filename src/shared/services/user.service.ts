import { api } from "./api";
import type { UserValidate } from "@/shared/types/User";

export const loginUser = (user: UserValidate) => {
	return api.post("/login", user);
};
