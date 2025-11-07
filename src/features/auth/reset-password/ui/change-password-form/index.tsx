import { Button } from "@/shared/ui/buttons/button";
import { CustomInput } from "@/shared/ui/inputs/input-text";
import { useState } from "react";

export function ChangePasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <form className="flex flex-col text-start gap-5 w-full md:max-w-sm">
      <CustomInput
        value={newPassword}
        onChange={setNewPassword}
        label="Nova senha"
        inputType="password"
        placeholder="********"
      />

      <CustomInput
        value={confirmNewPassword}
        onChange={setConfirmNewPassword}
        label="Nova senha"
        inputType="password"
        placeholder="********"
      />

      <Button label="Redefinir senha" variant="primary" type="submit" />
    </form>
  );
}
