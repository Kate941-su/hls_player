export type Entry = {
  duration: number;
  contentURL: string; // URL
  tvg_id?: string;
  tvg_logo?: string;
  tvg_name?: string;
  group_title?: string;
  entry_title?: string;
};

export const clearEntry = (entry: Entry) => {
  entry.contentURL = "";
  entry.duration = 0;
  entry.tvg_id = undefined;
  entry.tvg_logo = undefined;
  entry.tvg_name = undefined;
  entry.group_title = undefined;
  entry.entry_title = undefined;
};

export const buildEntry = (entry: Entry) => {
  return { ...entry };
};
