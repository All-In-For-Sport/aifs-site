export async function BonfireVideo({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  return <video src={src} poster={poster} controls></video>;
}
