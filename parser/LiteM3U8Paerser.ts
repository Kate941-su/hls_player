import {
  Manifest,
  Entry,
  ExtType,
  clearEntry,
  ExtAttribute,
  extTypeList,
} from "./index";
import { buildEntry } from "./types/entry";

export default class LiteM3U8Parser {
  public isDebugPrint = true;
  private manifest: Manifest = {
    playlistTitle: "",
    playlist: [] as Entry[],
  };
  constructor() {}

  public parse = (input: string): Manifest => {
    const object = this.parseInput(input);
    return object;
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
    const manifest: Manifest = { playlistTitle: "", playlist: [] as Entry[] };
    const entry: Entry = {
      duration: 0,
      contentURL: "",
    };
    const lines = input.split("\n");
    for (let line of lines) {
      // 1st step: separate title and attribute
      const [attribute, title] = this.separateLast(",", line);
      if (title != undefined) {
        entry.entry_title = title;
      }
      // 2nd step: Separate #EXT and other information
      const firstBlock = this.separateFirst(" ", attribute)[0];
      const extTag = this.getEXTTag(firstBlock);
      // Separate handling of whether it has a EXT tag or not
      if (extTag != undefined) {
        // TODO: it deals with only '#EXTINF'. I will add features.
        switch (extTag as ExtType) {
          case "#EXTM3U":
            break;
          case "#EXTINF":
            this.parseEXTINF(entry, firstBlock, attribute);
            break;
          case "#EXT-X-VERSION":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-TARGETDURATION":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-MEDIA-SEQUENCE":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-PLAYLIST-TYPE":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-ALLOW-CACHE":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-STREAM-INF":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-MEDIA":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-KEY":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-BYTERANGE":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-DISCONTINUITY":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-DISCONTINUITY-SEQUENCE":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-PROGRAM-DATE-TIME":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-INDEPENDENT-SEGMENTS":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-ENDLIST":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-MAP":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-START":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-RENDITION-REPORT":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-MEDIA-SEQUENCE-DISCONTINUITY":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-DATERANGE":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-TARGETDURATION-REACHED":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-SERVER-CONTROL":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-VERSIONING":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-I-FRAMES-ONLY":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-INDEPENDENT-SEGMENTS-DISCONTINUITY":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-SESSION-DATA":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-SESSION-KEY":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-PRELOAD-HINT":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-RENDITION-GROUP-ID":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-RENDITION-LANGUAGE":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-RENDITION-ASSOCIATED-PROPERTY":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-RENDITION-URI":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-OUT":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-IN":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-RENDITION-GROUP":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-RENDITION-TO-PROGRAM":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-PROGRAM-DATE-TIME-OFFSET":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CONTENT-IDENTIFIER":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-DATERANGE-ID":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-SERVER-CONTROL-COMMAND":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-SERVER-CONTROL-HOLD-BACK":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-SERVER-CONTROL-PART-HOLD-BACK":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-SERVER-CONTROL-MAX-DURATION":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-SERVER-CONTROL-MAX-AGE":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-SERVER-CONTROL-CAN-SKIP-UNTIL":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-SERVER-CONTROL-CAN-SKIP-DATERANGES":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-START-DURATION":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-OUT-CONT-DURATION":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-PROGRAM-DATE-TIME-SERVER":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CONTENT-KEY":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-DISCONTINUITY-ITEM":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-SCTE35":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-OUT-PTS":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-IN-PTS":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-START-PTS":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-END-PTS":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-OUT-CONT-PTS":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-MEDIA-RENDITION-REPORT":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-RELATIVE-CUE-OUT":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-RELATIVE-CUE-IN":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-RELATIVE-CUE-OUT-CONT":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-OUT-DURATION":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-MAP-BYTERANGE":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-OUT-CONT-ID":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-IN-DURATION":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-START-DURATION":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-END-DURATION":
            console.log(`undefined ${extTag}`);
            break;
          case "#EXT-X-CUE-OUT-CONT-DURATION-MS":
            console.log(`undefined ${extTag}`);
            break;
        }
      } else if (this.isValiedURL(firstBlock)) {
        entry.contentURL = firstBlock;
        manifest.playlist.push({ ...entry });
        clearEntry(entry);
      } else {
        console.log(`This key word will be ignored: ${firstBlock}`);
      }
    }
    return manifest;
  };

  private parseEXTINF = (
    entry: Entry,
    tagInfo: string,
    tagAttribute: string
  ) => {
    const duration = this.getDuration(tagInfo);
    entry.duration = duration;
    // 3rd step: Parse line to extract attributes
    const regex = /([\w\-\.\_\:\@]+)="([^"]*)"/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(tagAttribute)) !== null) {
      const key = match[1] as ExtAttribute;
      const value = match[2];
      this.buildAttrivuteEntry(key, value, entry);
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
    key: ExtAttribute,
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

  private getEXTTag = (input: string): ExtType | undefined => {
    const extTag = input.split(":")[0] as ExtType;
    if (extTypeList.includes(extTag)) {
      return extTag;
    }
    return undefined;
  };

  private getDuration = (input: string): number => {
    return parseFloat(input.split(":")[1].replace(",", ""));
  };

  private isValiedURL = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
}
