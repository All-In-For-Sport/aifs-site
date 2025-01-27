"use client";

export function TextArea({
  label,
  value,
  setValue,
  placeholder,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="">
      <label htmlFor={label} className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
      <textarea
        name={label}
        id={label}
        placeholder={placeholder}
        className="mt-1 block h-32 w-full rounded-2xl border-2 border-gray-700 bg-gray-800 p-4 placeholder-gray-600 sm:text-sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
