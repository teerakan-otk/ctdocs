"use client";

export function EmbedYoutube() {
  return (
    <iframe
      className="aspect-video w-full"
      src="https://www.youtube.com/embed/HYjlkiWpeKU?si=Rhx4wZkX0FSsXOC5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
}
