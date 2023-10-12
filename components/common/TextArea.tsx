"use client";

export default function TextArea({
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
                className="p-4 bg-gray-800 h-32 placeholder-gray-600 border-2 border-gray-700 block w-full sm:text-sm rounded-2xl mt-1"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}
