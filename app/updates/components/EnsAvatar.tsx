import { getEnsAvatar } from "@/app/services/Ens";

export async function EnsAvatar({ authorEns }: { authorEns: string }) {
  const avatar = await getEnsAvatar(authorEns);

  return (
    <>
      {avatar !== undefined && (
        <figure className="relative size-6 overflow-clip rounded-full">
          <img
            className="size-full"
            src={avatar.src}
            alt={`avatar for ${avatar.ens}`}
          />
        </figure>
      )}
      <span>{authorEns}</span>
    </>
  );
}
