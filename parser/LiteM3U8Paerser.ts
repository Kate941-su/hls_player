import { Manifest, Entry, AttributeTag } from "./types";
import EXT_TYPE from "./extType";
export default class LiteM3U8Parser {
  private emptyManifest = {
    playlistTitle: "",
    playlist: [],
  };

  private manifest: Manifest = {
    playlistTitle: "",
    playlist: [],
  };
  constructor() {}

  public parse = (input: string): Manifest => {
    const object = this.singleLineParse(input);
    return this.emptyManifest;
  };

  private parseEXTTag = (input: string): string | undefined => {
    const extRegex = /#EXT[^\r\n]*(?=[\s\r\n])/;
    const result = input.match(extRegex);
    if (result === undefined) {
      return undefined;
    }
    return result![0];
  };

  public singleLineParse = (input: string): Entry | string | undefined => {
    // 0th step: prepare all variables
    const entry: Entry = {
      duration: 0,
      contentFile: "",
    };

    // 1st step: separate title and attribute
    const [attribute, title] = this.separateLast(",", input);
    entry.entry_title = title;
    console.log(`[entry title] 👉 ${entry.entry_title}`);

    // 2nd step: Separate #EXT and other information
    const extTag = this.separateFirst(" ", attribute)[0];
    if (extTag is EXT_TYPE) {

    }
    const duration = this.getDuration(extTag);
    entry.duration = duration;
    console.log(`[extTag] 👉 ${extTag}, [duration] 👉 ${entry.duration}`);

    // 3rd step: Parse line to extract attributes
    const regex = /([\w\-\.\_\:\@]+)="([^"]*)"/g;
    let match: RegExpExecArray | null;
    console.log("attributes👇");
    while ((match = regex.exec(attribute)) !== null) {
      const key = match[1] as AttributeTag;
      const value = match[2];
      console.log(`[extension key] 👉 ${key}, [extension value] 👉 ${value}`);
      this.buildAttrivuteEntry(key, value, entry);
    }

    console.log(`===== result entry =====`);
    console.log(`contentFile 👉 ${entry.contentFile}`);
    console.log(`duration 👉 ${entry.duration}`);
    console.log(`duration 👉 ${entry.entry_title}`);
    console.log(`tvg id 👉 ${entry.tvg_id}`);
    console.log(`tvg logo 👉 ${entry.tvg_logo}`);
    console.log(`tvg name 👉 ${entry.tvg_name}`);
    return "";
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
