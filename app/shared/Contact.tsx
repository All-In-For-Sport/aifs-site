"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next-export-optimize-images/image";
import { CheckIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { BsDiscord } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { useFormspark } from "@formspark/use-formspark";
import toast from "react-hot-toast";

import { Button } from "./Button";
import { Input } from "@/app/shared/Input";
import { TextArea } from "@/app/shared/TextArea";
import { siteLinks } from "../siteMeta";

function SocialCallout({
  icon,
  title,
  supportingText,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  supportingText: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="group flex w-full items-center gap-4 rounded-3xl bg-gray-900 p-8 transition duration-300 hover:bg-gray-800"
    >
      <div className="group-hover flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 transition duration-300 group-hover:border-primary group-hover:bg-primary">
        {icon}
      </div>
      <div className="flex flex-col gap-0">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-base text-white/50">{supportingText}</div>
      </div>
    </Link>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID!,
  });

  const onSubmit = async () => {
    if (!name) {
      toast.error("Please enter your name.", { id: "name-error" });
      return;
    }
    if (!email) {
      toast.error("Please enter your email.", { id: "email-error" });
      return;
    }
    if (!message) {
      toast.error("Please enter a message.", { id: "message-error" });
      return;
    }
    if (!agree) {
      toast.error("You must agree to the terms and conditions.", {
        id: "agree-error",
      });
      return;
    }
    await submit({ name, email, message });
    toast.success("Message sent! Our team will be in touch shortly.", {
      id: "success-message",
    });
    setName("");
    setEmail("");
    setMessage("");
    setAgree(false);
  };

  return (
    <section
      id="contactUs"
      className="page-wrap flex w-full flex-col items-start gap-8 py-24"
    >
      <h2 className="font-header text-4xl font-bold md:text-5xl">
        Want to get in touch?
      </h2>
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-stretch">
        <div className="flex w-full flex-col items-stretch gap-6 lg:w-1/3">
          <Input
            label="Name"
            value={name}
            setValue={setName}
            placeholder="Michael Jordan"
          />
          <Input
            label="Email"
            value={email}
            placeholder="michael.jordan@gmail.com"
            type="email"
            setValue={setEmail}
          />
          <TextArea
            label="Message"
            value={message}
            placeholder="Your message..."
            setValue={setMessage}
          />
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
              className="flex h-6 w-6 items-center justify-center rounded-lg border-2 border-gray-700 bg-gray-800"
            >
              {agree && <CheckIcon className="h-3 w-3 text-primary" />}
            </label>
            <label htmlFor="agree">
              I agree to the{" "}
              <span className="text-primary">terms and conditions</span>.
            </label>
          </div>
          <div className="mt-4 flex flex-col">
            <Button
              onClick={onSubmit}
              disabled={submitting}
              rightIcon={<PaperAirplaneIcon className="h-5 w-5" />}
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="relative flex h-[300px] w-full overflow-hidden rounded-2xl lg:h-auto lg:min-h-full lg:w-2/3">
          <Image
            src="/assets/kh-philippines.jpeg"
            alt=""
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-8">
        <SocialCallout
          icon={<BsDiscord className="h-6 w-6 text-white" />}
          title="Join our Discord"
          supportingText="Get involved"
          link="https://discord.gg/2y8yY5j"
        />
        <SocialCallout
          icon={<BiLogoTelegram className="h-6 w-6 text-white" />}
          title="Connect on Telegram"
          supportingText="Get updates"
          link={siteLinks.telegramJoin}
        />
        <SocialCallout
          icon={<RiTwitterXFill className="h-6 w-6 text-white" />}
          title="Follow us"
          supportingText="See what's new"
          link={siteLinks.x}
        />
      </div>
    </section>
  );
}
