"use client";

import { Suspense, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VerificationCodeInput } from "@/shared/ui/inputs/verification-code-input";
import { Button } from "@/shared/ui/buttons/button";
import { ChangePasswordForm } from "@/features/auth/reset-password/ui/change-password-form";
import { formatSecondsToMinutes } from "@/shared/utils/format-seconds-to-minutes";

export default function ValidarToken() {
  function VerifyCode() {
    const [code, setCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [canResetPassword, setCanResetPassword] = useState(false);
    const [lastSentTime, setLastSentTime] = useState<number | null>(null);
    const [remainingTime, setRemainingTime] = useState(0);
    const { email } = useParams();

    const handleValidarToken = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        const response = await fetch("/api/token/validar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code, email }),
        });

        const data = await response.json();

        if (response.ok) {
          if (data.canResetPassword) {
            setCanResetPassword(true);
          }
        }
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    const handleCodeChange = (value: string) => {
      const sanitized = value.replace(/\D/g, "").slice(0, 6);
      setCode(sanitized);
    };

    useEffect(() => {
      if (!lastSentTime) return;
      const interval = setInterval(() => {
        const elapsed = Date.now() - lastSentTime;
        const cooldown = 3 * 60 * 1000;
        const remaining = Math.max(0, cooldown - elapsed);
        setRemainingTime(remaining);
        if (remaining === 0) {
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [lastSentTime]);

    const handleResendCode = async () => {
      if (remainingTime > 0) return;

      try {
        const response = await fetch("/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          setLastSentTime(Date.now());
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div className="flex flex-col items-center justify-center gap-5 text-center w-full md:max-w-sm">
        <div className="flex flex-col items-center justify-center gap-2">
          {!canResetPassword ? (
            <>
              <h1 className="text-2xl font-bold text-foreground">
                Verificação de e-mail
              </h1>
              <p className="text-sm md:text-base md:max-w-sm text-foreground">
                Digite o código de 6 dígitos enviado para{" "}
                <span className="font-semibold text-secondary">{email}</span>
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-foreground">
                Redefinir senha
              </h1>
              <p className="text-sm text-foreground md:text-base md:max-w-sm text-dark-gray">
                Digite a sua nova senha.
              </p>
            </>
          )}
        </div>
        {!canResetPassword ? (
          <form
            onSubmit={handleValidarToken}
            className="flex flex-col gap-5 w-full"
          >
            <VerificationCodeInput value={code} onChange={handleCodeChange} />
            <Button
              label="Verificar Código"
              type="submit"
              isLoading={isLoading}
              disabled={code.length !== 6}
            />
          </form>
        ) : (
          <ChangePasswordForm />
        )}

        {!canResetPassword && (
          <p className="text-sm text-foreground">
            Não recebeu o código?{" "}
            {remainingTime > 0 ? (
              <span className="font-semibold">
                {formatSecondsToMinutes(remainingTime)}
              </span>
            ) : (
              <button
                onClick={handleResendCode}
                className="font-bold cursor-pointer"
              >
                Reenviar
              </button>
            )}
          </p>
        )}
      </div>
    );
  }

  return (
    <Suspense>
      <div className="flex items-center justify-center p-4 min-h-[85vh] bg-background">
        <VerifyCode />
      </div>
    </Suspense>
  );
}
