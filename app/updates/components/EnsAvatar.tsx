import { getEnsAvatar } from "@/app/services/Ens";
import { AuthorName } from "./AuthorName";

export async function EnsAvatar({ authorEns }: { authorEns: string }) {
  const avatar = await getEnsAvatar(authorEns);

  return (
    <div className="flex items-center gap-4">
      {avatar !== undefined && (
        <figure className="relative size-6 overflow-clip rounded-full md:size-8">
          <img
            className="size-full"
            src={avatar.src}
            alt={`avatar for ${avatar.ens}`}
          />
        </figure>
      )}
      <AuthorName>{authorEns}</AuthorName>
    </div>
  );
}
