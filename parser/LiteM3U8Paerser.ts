import { number } from "zod";
import {
  Manifest,
  Entry,
  ExtType,
  ExtAttribute,
  extTypeList,
  clearEntry,
} from "./index";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default class LiteM3U8Parser {
  public isDebugPrint = true;

  constructor() {}

  public parseAsync = async (input: string): Promise<Manifest> => {
    const result = this.parse(input);
    return result as Manifest;
  };

  public parse = (input: string): Manifest => {
    const newManifest: Manifest = {
      playlist: [] as Entry[],
    };
    const entry: Entry = {
      duration: 0,
      contentURL: "",
    };
    const lines = input.split("\n");
    for (let line of lines) {
      // 1st step: separate title and attribute
      const [attribute, title] = this.separateLast(",", line);
      if (title != undefined) {
        entry.entryTitle = title;
      }
      // 2nd step: Separate #EXT tags and other information
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
        newManifest.playlist.push({ ...entry });
        clearEntry(entry);
      } else {
        // console.log(`This key word will be ignored: ${firstBlock}`);
      }
    }
    return newManifest;
  };

  public concatenating = (
    srcManifest: Manifest,
    targetManifest: Manifest
  ) => {};

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
      case "TVG-ID":
      case "tvg-id":
        entry.tvgId = value;
        break;
      case "TVG-NAME":
      case "tvg-name":
        entry.tvgName = value;
        break;
      case "TVG-LOGO":
      case "tvg-logo":
        entry.tvgLogo = value;
        break;
      case "TVG-COUNTRY":
      case "tvg-country":
        break;
      case "TVG-LANGUAGE":
      case "tvg-language":
        break;
      case "TVG-TYPE":
      case "tvg-type":
        break;
      case "TVG-URL":
      case "tvg-url":
        break;
      case "TVG-GROUP":
      case "tvg-group":
        break;
      case "TVG-EPGID":
      case "tvg-epgid":
        break;
      case "TVG-EPGURL":
      case "tvg-epgurl":
        break;
      case "TVG-EPGSHIFT":
      case "tvg-epgshift":
        break;
      case "TVG-RADIO":
      case "tvg-radio":
        break;
      case "TVG-TIMESHIFT":
      case "tvg-timeshift":
        break;
      case "TVG-ARCHIVE":
      case "tvg-archive":
        break;
      case "TVG-TVGPLAYLIST":
      case "tvg-tvgplaylist":
        break;
      case "TVG-ASPECT-RATIO":
      case "tvg-aspect-ratio":
        break;
      case "TVG-AUDIO-TRACK":
      case "tvg-audio-track":
        break;
      case "TVG-CLOSED-CAPTIONS":
      case "tvg-closed-captions":
        break;
      case "TVG-CLOSED-CAPTIONS-LANGUAGE":
      case "tvg-closed-captions-language":
        break;
      case "TVG-CLOSED-CAPTIONS-TYPE":
      case "tvg-closed-captions-type":
        break;
      case "TVG-CONTENT-TYPE":
      case "tvg-content-type":
        break;
      case "TVG-COPYRIGHT":
      case "tvg-copyright":
        break;
      case "TVG-DURATION":
      case "tvg-duration":
        break;
      case "TVG-EXT-X-DISCONTINUITY":
      case "tvg-ext-x-discontinuity":
        break;
      case "TVG-EXT-X-ENDLIST":
      case "tvg-ext-x-endlist":
        break;
      case "TVG-EXT-X-KEY":
      case "tvg-ext-x-key":
        break;
      case "TVG-EXT-X-MEDIA-SEQUENCE":
      case "tvg-ext-x-media-sequence":
        break;
      case "TVG-EXT-X-PROGRAM-DATE-TIME":
      case "tvg-ext-x-program-date-time":
        break;
      case "TVG-EXT-X-VERSION":
      case "tvg-ext-x-version":
        break;
      case "TVG-GAP":
      case "tvg-gap":
        break;
      case "TVG-INDEPENDENT-SEGMENTS":
      case "tvg-independent-segments":
        break;
      case "TVG-MEDIA":
      case "tvg-media":
        break;
      case "TVG-MEDIA-SEQUENCE":
      case "tvg-media-sequence":
        break;
      case "TVG-PLAYLIST-TYPE":
      case "tvg-playlist-type":
        break;
      case "TVG-START":
      case "tvg-start":
        break;
      case "TVG-TARGETDURATION":
      case "tvg-targetduration":
        break;
      case "TVG-X-BYTERANGE":
      case "tvg-x-byterange":
        break;
      case "TVG-X-ENDLIST":
      case "tvg-x-endlist":
        break;
      case "TVG-X-KEY":
      case "tvg-x-key":
        break;
      case "TVG-X-MEDIA-SEQUENCE":
      case "tvg-x-media-sequence":
        break;
      case "TVG-X-PROGRAM-DATE-TIME":
      case "tvg-x-program-date-time":
        break;
      case "TVG-X-VERSION":
      case "tvg-x-version":
        break;
      case "TVG-RESOLUTION":
      case "tvg-resolution":
        break;
      case "TVG-FRAMERATE":
      case "tvg-framerate":
        break;
      case "GROUP-TITLE":
      case "group-title":
        entry.groupTitle = value;
        break;
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
    const duration = parseFloat(input.split(":")[1].replace(",", ""));
    if (duration < 0) {
      return Number.MAX_VALUE;
    }
    return duration;
  };

  private isValiedURL = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  private parseEXTTag = (input: string): string | undefined => {
    const extRegex = /#EXT[^\r\n]*(?=[\s\r\n])/;
    const result = input.match(extRegex);
    if (result === undefined) {
      return undefined;
    }
    return result![0];
  };

  // level list
  // >= 2 : You can see only significant items
  // 1 : You can see verbose items
  // 0 : All of entires will be shown
  showAllEntries = (manifest: Manifest, level: number = 2) => {
    console.log(`===== [RegisterScreen] manifest log =====`);
    for (let entry of manifest.playlist) {
      console.log(`===== Entry title: ${entry.entryTitle} =====`);
      console.log(`content file : ${entry.contentURL}`);
      if (level >= 2) {
        console.log(`duration : ${entry.duration}`);
        console.log(`tvg id : ${entry.tvgId}`);
        console.log(`tvg logo : ${entry.tvgLogo}`);
        console.log(`tvg name : ${entry.tvgName}`);
      }
      if (level >= 1) {
        // TODO: Choose verbose items
      } else {
        // TODO: Implementation
      }
      console.log("");
    }
  };
}
