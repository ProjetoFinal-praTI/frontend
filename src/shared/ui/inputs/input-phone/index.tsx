import { formatPhone } from "@/shared/utils/format-phone";
import { Controller } from "react-hook-form";

interface InputPhoneProps {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder: string;
  control: any;
  error?: string;
  readonly?: boolean;
}

export const InputPhone = (props: InputPhoneProps) => {
  const { label, onChange, id, placeholder, control, error, readonly } = props;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-accent-foreground"
      >
        {label}
      </label>
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <input
            type="text"
            id={id}
            {...field}
            onChange={(e) => {
              const masked = formatPhone(e.target.value);
              field.onChange(masked);
              onChange?.(e);
            }}
            placeholder={placeholder}
            maxLength={15}
            readOnly={readonly}
            className="bg-[#1f232e] w-full flex border border-border/10 rounded-xl focus:outline-none text-card-foreground h-10 px-3 py-2 text-sm"
          />
        )}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
