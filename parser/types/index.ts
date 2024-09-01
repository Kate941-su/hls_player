import clearEntry from "./Entry";

type Manifest = {
  playlistTitle: string;
  playlist: Entry[];
};

type Entry = {
  duration: number;
  contentURL: string; // URL
  tvg_id?: string;
  tvg_logo?: string;
  tvg_name?: string;
  group_title?: string;
  entry_title?: string;
};

// TODO: append more tags
type AttributeTag = "tvg-logo" | "group-title" | "tvg-name" | "TVG-ID";

export { Manifest, Entry, AttributeTag, clearEntry };
