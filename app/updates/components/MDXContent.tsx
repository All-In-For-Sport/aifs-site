import { BonfireVideo } from "@/app/mdx/BonfireVideo";
import { useMDXComponent } from "next-contentlayer2/hooks";

export function MDXContent({ mdx }: { mdx: string }) {
  const MDXContent = useMDXComponent(mdx);

  return <MDXContent components={{ BonfireVideo }} />;
}
