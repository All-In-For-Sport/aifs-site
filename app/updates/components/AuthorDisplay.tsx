import { Avatar } from "@/app/services/Ens";
import Image from "next/image";

export function EnsDisplay({ avatar }: { avatar: Avatar }) {
  return (
    <>
      <figure className="relative size-6 overflow-clip rounded-full">
        <Image
          className="size-full"
          src={avatar.src}
          fill
          alt={`avatar for ${avatar.ens}`}
          unoptimized
        />
      </figure>
      <span>{avatar.ens}</span>
    </>
  );
}
