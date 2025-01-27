"use client";

export function Input({
  label,
  value,
  setValue,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="">
      <label htmlFor={label} className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-2xl border-2 border-gray-700 bg-gray-800 p-4 placeholder-gray-600 sm:text-sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
