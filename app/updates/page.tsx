import { Metadata } from "next";

import { notFound } from "next/navigation";
import { getFeatures } from "../features/getFeatures";
import { IndexPage } from "./components/IndexPage";

export const metadata: Metadata = {
  title: "Updates | All in for Sport",
  description: "A funding platform for community-led sports projects.",
};

export default async function UpdatesIndexPage() {
  if (!getFeatures().BLOG) return notFound();

  return <IndexPage />;
}
