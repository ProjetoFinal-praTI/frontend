import { z } from "zod";

export const resetPasswordSchema = (t: (key: string) => string) => {
  return z
    .object({
      password: z
        .string()
        .min(1, t("requiredField"))
        .min(8, t("minLengthPassword")),
      confirmPassword: z.string().min(1, t("requiredField")),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwordsDoNotMatch"),
      path: ["confirmPassword"],
    });
};
