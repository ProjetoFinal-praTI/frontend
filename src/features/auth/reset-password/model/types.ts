export interface IResetPasswordRequest {
  password: string;
  confirmPassword: string;
}

export interface IResetPasswordApiRequest {
  password: string;
  email: string;
  code: string;
}

export interface IResetPasswordResponse {
  message: string;
  success: boolean;
  status: number;
}
