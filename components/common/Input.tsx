"use client";

export default function Input({
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
                className="p-4 bg-gray-800 placeholder-gray-600 border-2 border-gray-700 block w-full sm:text-sm rounded-2xl mt-1"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}
