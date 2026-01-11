"use client";

export function EmbedYoutube({ id }) {
  return (
    <iframe
      className="aspect-video w-full"
      src={"https://www.youtube.com/embed/" + id}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
}
