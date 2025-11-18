interface SelectProps {
  label: string;
  options: { value: string; label: string }[];
  register?: any;
  error?: string;
  required?: boolean;
  id: string;
}

export const Select = (props: SelectProps) => {
  const { label, options, register, error, required = false, id } = props;

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        className="bg-[#1f232e] w-full flex border border-border/10 px-3 py-2 rounded-xl focus:outline-none text-card-foreground"
        {...register}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
