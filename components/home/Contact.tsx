"use client";
import Image from "next/image";
import { Input, TextArea } from "@/components/common";
import { useState } from "react";
import { CheckIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { PrimaryButton } from "@/components/common";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { useFormspark } from "@formspark/use-formspark";
import toast from "react-hot-toast";

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
            className="bg-gray-900 w-full group hover:bg-gray-800 transition duration-300 p-8 flex gap-4 items-center rounded-3xl"
        >
            <div className="rounded-full group-hover group-hover:border-primary group-hover:bg-primary transition duration-300 border-2 border-gray-800 w-12 h-12 flex items-center justify-center">
                {icon}
            </div>
            <div className="flex flex-col gap-0">
                <div className="font-bold text-lg">{title}</div>
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
        <section className="flex my-12 items-start flex-col w-full gap-8">
            <h2 className="font-bold text-4xl md:text-5xl font-header">
                Want to get in touch?
            </h2>
            <div className="flex gap-8 flex-col lg:flex-row w-full lg:items-stretch">
                <div className="flex flex-col gap-6 items-stretch w-full lg:w-1/3">
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
                    <div className="mt-4 flex flex-col ">
                        <PrimaryButton
                            onClick={onSubmit}
                            disabled={submitting}
                            icon={<PaperAirplaneIcon className="w-5 h-5" />}
                        >
                            Submit
                        </PrimaryButton>
                    </div>
                </div>
                <div className="relative h-[300px] lg:h-auto lg:min-h-full flex rounded-2xl overflow-hidden w-full lg:w-2/3">
                    <Image
                        src="/assets/kh-philippines.jpeg"
                        alt=""
                        fill
                        sizes="50vw"
                        className="object-cover object-center"
                    />
                </div>
            </div>
            <div className="flex w-full flex-col lg:flex-row justify-between gap-4 lg:gap-8">
                <SocialCallout
                    icon={<BsDiscord className="w-6 h-6 text-white" />}
                    title="Join our Discord"
                    supportingText="Get involved"
                    link="https://discord.gg/2y8yY5j"
                />
                <SocialCallout
                    icon={<BiLogoTelegram className="w-6 h-6 text-white" />}
                    title="Connect on Telegram"
                    supportingText="Get updates"
                    link="https://discord.gg/2y8yY5j"
                />
                <SocialCallout
                    icon={<RiTwitterXFill className="w-6 h-6 text-white" />}
                    title="Follow us"
                    supportingText="See what's new"
                    link="https://discord.gg/2y8yY5j"
                />
            </div>
        </section>
    );
}
