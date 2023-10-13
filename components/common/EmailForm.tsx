"use client";

import { useState } from "react";
import { Input } from "./Input";
import { CheckIcon } from "@heroicons/react/24/solid";
import { PrimaryButton } from "./Button";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export function EmailForm() {
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    return (
        <form className="w-full">
            <Input
                label="Email"
                value={email}
                setValue={setEmail}
                placeholder="michael.jordan@gmail.com"
            />
            <div className="flex flex-col lg:flex-row mt-4 gap-4">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        checked={agree}
                        className="hidden"
                        onChange={() => setAgree(!agree)}
                    />
                    <label
                        htmlFor="agree"
                        onClick={() => setAgree(!agree)}
                        className="border-gray-700 border-2 bg-gray-800 rounded-lg h-6 w-6 flex items-center justify-center"
                    >
                        {agree && (
                            <CheckIcon className="text-primary w-3 h-3" />
                        )}
                    </label>
                    <label htmlFor="agree">
                        I agree to the{" "}
                        <span className="text-primary">
                            terms and conditions
                        </span>
                        .
                    </label>
                </div>
                <PrimaryButton icon={<PaperAirplaneIcon className="w-5 h-5" />}>
                    Submit
                </PrimaryButton>
            </div>
        </form>
    );
}
