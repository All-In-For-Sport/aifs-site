"use client";

import { useEffect, useState } from "react";
import Image from "next-export-optimize-images/image";

import { Avatar, getEnsAvatar } from "@/app/services/Ens";

export function EnsAvatar({ ens }: { ens: string }) {
  const [avatar, setAvatar] = useState<Avatar | null>(null);

  useEffect(() => {
    getEnsAvatar(ens)
      .then((res) => {
        if (res) setAvatar(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ens]);

  return avatar ? (
    <Image
      className="size-full"
      src={avatar.src}
      fill
      alt={`avatar for ${avatar.ens}`}
      unoptimized
    />
  ) : (
    <div className="size-full bg-neutral-400 opacity-50" />
  );
}
