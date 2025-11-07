"use client";

import { useState, useRef, useEffect } from "react";

interface VerificationCodeInputProps {
  value: string;
  onChange: (code: string) => void;
}

export function VerificationCodeInput(props: VerificationCodeInputProps) {
  const { value, onChange } = props;
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  useEffect(() => {
    const next = new Array(6).fill("");
    const len = Math.min(value.length, 6);
    for (let i = 0; i < len; i++) {
      const ch = value[i];
      next[i] = /^\d$/.test(ch) ? ch : "";
    }
    setCode(next);
  }, [value]);

  const handleChange = (index: number, digit: string) => {
    if (!/^\d*$/.test(digit)) return;

    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);
    onChange(newCode.join(""));

    if (digit !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");

    if (/^\d{6}$/.test(pastedData)) {
      const newCode = pastedData.split("");
      setCode(newCode);
      onChange(newCode.join(""));
      inputRefs.current[5]?.focus();
    }
  };

  return (
    <div className="flex w-full justify-between gap-1">
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={`focus:ring-primary h-12 w-12 rounded-md border border-dark-gray text-center text-2xl font-bold text-white transition-all duration-500 ease-in-out outline-none hover:border-dark-gray/70 focus:shadow-lg focus:ring-2 lg:h-14 lg:w-14`}
          id={`verification-code-${index}`}
        />
      ))}
    </div>
  );
}
