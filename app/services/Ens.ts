import { normalize } from "path";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({
  chain: mainnet,
  transport: http(mainnet.rpcUrls.default.http[0], {
    fetchOptions: {
      next: {
        revalidate: 60 * 60,
      },
    },
  }),
});

export type Avatar = {
  ens: string;
  src: string;
};

export async function getEnsAvatar(ens: string): Promise<Avatar | undefined> {
  try {
    const result = await client.getEnsAvatar({
      name: normalize(ens),
    });
    if (!result) return undefined;
    return {
      ens,
      src: result,
    };
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
