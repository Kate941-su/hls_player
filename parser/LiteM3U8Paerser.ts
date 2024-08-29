import TVG_TYPE from "./TVGType";

const emptyManifest = {
  playlistTitle: "",
  playlist: [],
};

class LiteM3U8Parser {
  private manifest: Manifest = {
    playlistTitle: "",
    playlist: [],
  };
  private constructor() {}

  parse = (rawContetnt: String): Manifest => {
    const rawList = rawContetnt.split("\n");

    const extLine = `
#EXTM3U
#PLAYLIST:Online radio: 60S Music (www.radio.pervii.com)
#EXTINF:-1 tvg-logo="http://radio.pervii.com/im/1/1537513721.jpg" group-title="60S Radio", Beatles Radio - 128 kbit/s
http://64.40.99.76:8000/stream/1/
#EXTINF:-1 tvg-logo="http://radio.pervii.com/logo/12108.jpg" group-title="60S Radio", Radio 60 70 80 - Italy - Italia - www.607080.it - 128 kbit/s
http://www.studiopiu.net:8005
#EXTINF:-1 tvg-logo="http://radio.pervii.com/logo/1403636185.png" group-title="60S Radio", RadioSuperoldie HIGH - 192 kbit/s
http://87.118.87.46:8888/stream/1/
#EXTINF:10.000000,TVG-ID="Channel1" tvg-name="Channel 1" tvg-logo="http://example.com/channel1.png" group-title="Entertainment",Channel 1
http://87.118.87.46:8888/stream/1/
`;

    const list = extLine.split("\n");

    // #から始まるEXTのパース
    const extRegex = /#EXT[^\r\n]*$/gm;
    const extMatches = list[2].match(extRegex);

    const sample = list[9];
    console.log(`sample => ${sample}`);
    const index = sample.lastIndexOf(",");
    const attribute = sample.substring(0, index).trim();
    const title = sample.substring(index + 1).trim();

    const regex = /([\w\-\.\_\:\@]+)="([^"]*)"/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(attribute)) !== null) {
      const key = match[1];
      const value = match[2];
      console.log(`Key: ${key}, Value: ${value}`);
    }

    return emptyManifest;
  };

  private parseExtension = extension;
}

type Manifest = {
  playlistTitle: string;
  playlist: Entry[];
};

const test: string = `#EXTINF:-1 tvg-logo="" group-title="90S Radio", Indifun Radio - Best Indian Music - 128 kbit/s
http://indifun.net:7000/stream/1/`;

type Entry = {
  duration: number;
  tvg_id?: TVG_TYPE;
  tvg_logo?: string;
  tvg_name?: string;
  group_title?: string;
  entry_title?: string;
  contentFile: string;
};
