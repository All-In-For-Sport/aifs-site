"use client";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

import { Input } from "./Input";
import { Button } from "./Button";

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
      <div className="mt-4 flex flex-col gap-4 lg:flex-row">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={agree}
            className="hidden"
          />
          <label
            htmlFor="agree"
            onClick={() => setAgree(!agree)}
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg border-2 border-gray-700 bg-gray-800"
          >
            {agree && <CheckIcon className="h-3 w-3 text-primary" />}
          </label>
          <label htmlFor="agree">
            I agree to the{" "}
            <span className="text-primary">terms and conditions</span>.
          </label>
        </div>
        <div>
          <Button
            disabled={!agree}
            rightIcon={<PaperAirplaneIcon className="h-5 w-5" />}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
