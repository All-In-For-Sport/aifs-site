"use client";

import { Avatar } from "@/app/services/Ens";

export function EnsAvatar({ avatar }: { avatar: Avatar }) {
  return (
    <img
      className="size-full"
      src={avatar.src}
      alt={`avatar for ${avatar.ens}`}
    />
  );
}
