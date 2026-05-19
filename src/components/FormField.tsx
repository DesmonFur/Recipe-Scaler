import type { ChangeEvent, HTMLInputTypeAttribute } from "react";
type FormFieldProps = {
  label: string;
  labelId: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
};

export function FormField({
  label,
  labelId,
  value,
  onChange,
  type,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1 mb-2.5 text-white">
      <label htmlFor={labelId}>{label}</label>
      <input
        className="bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-emerald-500"
        type={type ?? "text"}
        id={labelId}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
