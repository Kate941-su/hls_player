import { Manifest, Entry, AttributeTag, clearEntry } from "./types";
import EXT_TYPE_LIST from "./extType";

const emptyManifest = {
  playlistTitle: "",
  playlist: [] as Entry[],
};

export default class LiteM3U8Parser {
  private manifest: Manifest = {
    playlistTitle: "",
    playlist: [] as Entry[],
  };
  constructor() {}

  public parse = (input: string): Manifest => {
    const object = this.parseInput(input);
    return emptyManifest;
  };

  private parseEXTTag = (input: string): string | undefined => {
    const extRegex = /#EXT[^\r\n]*(?=[\s\r\n])/;
    const result = input.match(extRegex);
    if (result === undefined) {
      return undefined;
    }
    return result![0];
  };

  public parseInput = (input: string): Manifest => {
    // 0th step: prepare all variables
    const manifest = { ...emptyManifest };
    const entry: Entry = {
      duration: 0,
      contentURL: "",
    };
    const lines = input.split("\n");
    for (let item of lines) {
      // 1st step: separate title and attribute
      const [attribute, title] = this.separateLast(",", input);
      entry.entry_title = title;
      console.log(`[entry title] 👉 ${entry.entry_title}`);

      // 2nd step: Separate #EXT and other information
      const firstBlock = this.separateFirst(" ", attribute)[0];
      // Separate handling of whether it has a EXT tag or not
      if (EXT_TYPE_LIST.includes(firstBlock)) {
        entry.contentURL = firstBlock;
        manifest.playlist.push(entry);
        clearEntry(entry);
      } else {
        // TODO: it deals with only '#EXTINF'. I will add features.
        const duration = this.getDuration(firstBlock);
        entry.duration = duration;
        console.log(
          `[extTag] 👉 ${firstBlock}, [duration] 👉 ${entry.duration}`
        );

        // 3rd step: Parse line to extract attributes
        const regex = /([\w\-\.\_\:\@]+)="([^"]*)"/g;
        let match: RegExpExecArray | null;
        console.log("attributes👇");
        while ((match = regex.exec(attribute)) !== null) {
          const key = match[1] as AttributeTag;
          const value = match[2];
          console.log(
            `[extension key] 👉 ${key}, [extension value] 👉 ${value}`
          );
          this.buildAttrivuteEntry(key, value, entry);
        }

        console.log(`===== result entry =====`);
        console.log(`contentFile 👉 ${entry.contentURL}`);
        console.log(`duration 👉 ${entry.duration}`);
        console.log(`duration 👉 ${entry.entry_title}`);
        console.log(`tvg id 👉 ${entry.tvg_id}`);
        console.log(`tvg logo 👉 ${entry.tvg_logo}`);
        console.log(`tvg name 👉 ${entry.tvg_name}`);
      }
    }
  };

  private separateLast = (char: string, input: string): string[] => {
    const index = input.lastIndexOf(char);
    if (index == -1) {
      return [input];
    }
    const firstPart = input.substring(0, index);
    const secondPart = input.substring(index + 1);
    return [firstPart, secondPart];
  };

  private separateFirst = (char: string, input: string): string[] => {
    const index = input.indexOf(char);
    if (index == -1) {
      return [input];
    }
    const firstPart = input.substring(0, index);
    const secondPart = input.substring(index + 1);
    return [firstPart, secondPart];
  };

  private buildAttrivuteEntry = (
    key: AttributeTag,
    value: string,
    entry: Entry
  ) => {
    switch (key) {
      case "tvg-logo":
        entry.tvg_logo = value;
        break;
      case "group-title":
        entry.group_title = value;
        break;
      case "tvg-name":
        entry.tvg_name = value;
        break;
      case "TVG-ID":
        entry.tvg_id = value;
        break;
      default:
        console.error("Unknow Tag!!!");
    }
  };

  public getDuration = (input: string): number => {
    return parseFloat(input.split(":")[1].replace(",", ""));
  };
}
