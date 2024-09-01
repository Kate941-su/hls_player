/* EXT Tags */
type ExtType =
  | "#EXTM3U"
  | "#EXTINF"
  | "#EXT-X-VERSION"
  | "#EXT-X-TARGETDURATION"
  | "#EXT-X-MEDIA-SEQUENCE"
  | "#EXT-X-PLAYLIST-TYPE"
  | "#EXT-X-ALLOW-CACHE"
  | "#EXT-X-STREAM-INF"
  | "#EXT-X-MEDIA"
  | "#EXT-X-KEY"
  | "#EXT-X-BYTERANGE"
  | "#EXT-X-DISCONTINUITY"
  | "#EXT-X-DISCONTINUITY-SEQUENCE"
  | "#EXT-X-PROGRAM-DATE-TIME"
  | "#EXT-X-INDEPENDENT-SEGMENTS"
  | "#EXT-X-ENDLIST"
  | "#EXT-X-MAP"
  | "#EXT-X-START"
  | "#EXT-X-RENDITION-REPORT"
  | "#EXT-X-MEDIA-SEQUENCE-DISCONTINUITY"
  | "#EXT-X-DATERANGE"
  | "#EXT-X-TARGETDURATION-REACHED"
  | "#EXT-X-SERVER-CONTROL"
  | "#EXT-X-VERSIONING"
  | "#EXT-X-I-FRAMES-ONLY"
  | "#EXT-X-INDEPENDENT-SEGMENTS-DISCONTINUITY"
  | "#EXT-X-SESSION-DATA"
  | "#EXT-X-SESSION-KEY"
  | "#EXT-X-PRELOAD-HINT"
  | "#EXT-X-RENDITION-GROUP-ID"
  | "#EXT-X-RENDITION-LANGUAGE"
  | "#EXT-X-RENDITION-ASSOCIATED-PROPERTY"
  | "#EXT-X-RENDITION-URI"
  | "#EXT-X-CUE-OUT"
  | "#EXT-X-CUE-IN"
  | "#EXT-X-RENDITION-GROUP"
  | "#EXT-X-RENDITION-TO-PROGRAM"
  | "#EXT-X-PROGRAM-DATE-TIME-OFFSET"
  | "#EXT-X-CONTENT-IDENTIFIER"
  | "#EXT-X-DATERANGE-ID"
  | "#EXT-X-SERVER-CONTROL-COMMAND"
  | "#EXT-X-SERVER-CONTROL-HOLD-BACK"
  | "#EXT-X-SERVER-CONTROL-PART-HOLD-BACK"
  | "#EXT-X-SERVER-CONTROL-MAX-DURATION"
  | "#EXT-X-SERVER-CONTROL-MAX-AGE"
  | "#EXT-X-SERVER-CONTROL-CAN-SKIP-UNTIL"
  | "#EXT-X-SERVER-CONTROL-CAN-SKIP-DATERANGES"
  | "#EXT-X-START-DURATION"
  | "#EXT-X-CUE-OUT-CONT-DURATION"
  | "#EXT-X-PROGRAM-DATE-TIME-SERVER"
  | "#EXT-X-CONTENT-KEY"
  | "#EXT-X-DISCONTINUITY-ITEM"
  | "#EXT-X-SCTE35"
  | "#EXT-X-CUE-OUT-PTS"
  | "#EXT-X-CUE-IN-PTS"
  | "#EXT-X-CUE-START-PTS"
  | "#EXT-X-CUE-END-PTS"
  | "#EXT-X-CUE-OUT-CONT-PTS"
  | "#EXT-X-MEDIA-RENDITION-REPORT"
  | "#EXT-X-RELATIVE-CUE-OUT"
  | "#EXT-X-RELATIVE-CUE-IN"
  | "#EXT-X-RELATIVE-CUE-OUT-CONT"
  | "#EXT-X-CUE-OUT-DURATION"
  | "#EXT-X-MAP-BYTERANGE"
  | "#EXT-X-CUE-OUT-CONT-ID"
  | "#EXT-X-CUE-IN-DURATION"
  | "#EXT-X-CUE-START-DURATION"
  | "#EXT-X-CUE-END-DURATION"
  | "#EXT-X-CUE-OUT-CONT-DURATION-MS";

const extTypeList = [
  "#EXTM3U",
  "#EXTINF",
  "#EXT-X-VERSION",
  "#EXT-X-TARGETDURATION",
  "#EXT-X-MEDIA-SEQUENCE",
  "#EXT-X-PLAYLIST-TYPE",
  "#EXT-X-ALLOW-CACHE",
  "#EXT-X-STREAM-INF",
  "#EXT-X-MEDIA",
  "#EXT-X-KEY",
  "#EXT-X-BYTERANGE",
  "#EXT-X-DISCONTINUITY",
  "#EXT-X-DISCONTINUITY-SEQUENCE",
  "#EXT-X-PROGRAM-DATE-TIME",
  "#EXT-X-INDEPENDENT-SEGMENTS",
  "#EXT-X-ENDLIST",
  "#EXT-X-MAP",
  "#EXT-X-START",
  "#EXT-X-RENDITION-REPORT",
  "#EXT-X-MEDIA-SEQUENCE-DISCONTINUITY",
  "#EXT-X-DATERANGE",
  "#EXT-X-TARGETDURATION-REACHED",
  "#EXT-X-SERVER-CONTROL",
  "#EXT-X-VERSIONING",
  "#EXT-X-I-FRAMES-ONLY",
  "#EXT-X-INDEPENDENT-SEGMENTS-DISCONTINUITY",
  "#EXT-X-SESSION-DATA",
  "#EXT-X-SESSION-KEY",
  "#EXT-X-PRELOAD-HINT",
  "#EXT-X-RENDITION-GROUP-ID",
  "#EXT-X-RENDITION-LANGUAGE",
  "#EXT-X-RENDITION-ASSOCIATED-PROPERTY",
  "#EXT-X-RENDITION-URI",
  "#EXT-X-CUE-OUT",
  "#EXT-X-CUE-IN",
  "#EXT-X-RENDITION-GROUP",
  "#EXT-X-RENDITION-TO-PROGRAM",
  "#EXT-X-PROGRAM-DATE-TIME-OFFSET",
  "#EXT-X-CONTENT-IDENTIFIER",
  "#EXT-X-DATERANGE-ID",
  "#EXT-X-SERVER-CONTROL-COMMAND",
  "#EXT-X-SERVER-CONTROL-HOLD-BACK",
  "#EXT-X-SERVER-CONTROL-PART-HOLD-BACK",
  "#EXT-X-SERVER-CONTROL-MAX-DURATION",
  "#EXT-X-SERVER-CONTROL-MAX-AGE",
  "#EXT-X-SERVER-CONTROL-CAN-SKIP-UNTIL",
  "#EXT-X-SERVER-CONTROL-CAN-SKIP-DATERANGES",
  "#EXT-X-START-DURATION",
  "#EXT-X-CUE-OUT-CONT-DURATION",
  "#EXT-X-PROGRAM-DATE-TIME-SERVER",
  "#EXT-X-CONTENT-KEY",
  "#EXT-X-DISCONTINUITY-ITEM",
  "#EXT-X-SCTE35",
  "#EXT-X-CUE-OUT-PTS",
  "#EXT-X-CUE-IN-PTS",
  "#EXT-X-CUE-START-PTS",
  "#EXT-X-CUE-END-PTS",
  "#EXT-X-CUE-OUT-CONT-PTS",
  "#EXT-X-MEDIA-RENDITION-REPORT",
  "#EXT-X-RELATIVE-CUE-OUT",
  "#EXT-X-RELATIVE-CUE-IN",
  "#EXT-X-RELATIVE-CUE-OUT-CONT",
  "#EXT-X-CUE-OUT-DURATION",
  "#EXT-X-MAP-BYTERANGE",
  "#EXT-X-CUE-OUT-CONT-ID",
  "#EXT-X-CUE-IN-DURATION",
  "#EXT-X-CUE-START-DURATION",
  "#EXT-X-CUE-END-DURATION",
  "#EXT-X-CUE-OUT-CONT-DURATION-MS",
];

/* Ext Attributes */
type TvgId = "TVG-ID" | "tvg-id";
type TvgName = "TVG-NAME" | "tvg-name";
type TvgLogo = "TVG-LOGO" | "tvg-logo";
type TvgCountry = "TVG-COUNTRY" | "tvg-country";
type TvgLanguage = "TVG-LANGUAGE" | "tvg-language";
type TvgType = "TVG-TYPE" | "tvg-type";
type TvgUrl = "TVG-URL" | "tvg-url";
type TvgGroup = "TVG-GROUP" | "tvg-group";
type TvgEpgid = "TVG-EPGID" | "tvg-epgid";
type TvgEpgUrl = "TVG-EPGURL" | "tvg-epgurl";
type TvgEpgShift = "TVG-EPGSHIFT" | "tvg-epgshift";
type TvgRadio = "TVG-RADIO" | "tvg-radio";
type TvgTimeshift = "TVG-TIMESHIFT" | "tvg-timeshift";
type TvgArchive = "TVG-ARCHIVE" | "tvg-archive";
type TvgTvgPlaylist = "TVG-TVGPLAYLIST" | "tvg-tvgplaylist";
type TvgAspectRatio = "TVG-ASPECT-RATIO" | "tvg-aspect-ratio";
type TvgAudioTrack = "TVG-AUDIO-TRACK" | "tvg-audio-track";
type TvgClosedCaptions = "TVG-CLOSED-CAPTIONS" | "tvg-closed-captions";
type TvgClosedCaptionsLanguage =
  | "TVG-CLOSED-CAPTIONS-LANGUAGE"
  | "tvg-closed-captions-language";
type TvgClosedCaptionsType =
  | "TVG-CLOSED-CAPTIONS-TYPE"
  | "tvg-closed-captions-type";
type TvgContentType = "TVG-CONTENT-TYPE" | "tvg-content-type";
type TvgCopyright = "TVG-COPYRIGHT" | "tvg-copyright";
type TvgDuration = "TVG-DURATION" | "tvg-duration";
type TvgExtXDiscontinuity =
  | "TVG-EXT-X-DISCONTINUITY"
  | "tvg-ext-x-discontinuity";
type TvgExtXEndlist = "TVG-EXT-X-ENDLIST" | "tvg-ext-x-endlist";
type TvgExtXKey = "TVG-EXT-X-KEY" | "tvg-ext-x-key";
type TvgExtXMediaSequence =
  | "TVG-EXT-X-MEDIA-SEQUENCE"
  | "tvg-ext-x-media-sequence";
type TvgExtXProgramDateTime =
  | "TVG-EXT-X-PROGRAM-DATE-TIME"
  | "tvg-ext-x-program-date-time";
type TvgExtXVersion = "TVG-EXT-X-VERSION" | "tvg-ext-x-version";
type TvgGap = "TVG-GAP" | "tvg-gap";
type TvgIndependentSegments =
  | "TVG-INDEPENDENT-SEGMENTS"
  | "tvg-independent-segments";
type TvgMedia = "TVG-MEDIA" | "tvg-media";
type TvgMediaSequence = "TVG-MEDIA-SEQUENCE" | "tvg-media-sequence";
type TvgPlaylistType = "TVG-PLAYLIST-TYPE" | "tvg-playlist-type";
type TvgStart = "TVG-START" | "tvg-start";
type TvgTargetDuration = "TVG-TARGETDURATION" | "tvg-targetduration";
type TvgXByterange = "TVG-X-BYTERANGE" | "tvg-x-byterange";
type TvgXEndlist = "TVG-X-ENDLIST" | "tvg-x-endlist";
type TvgXKey = "TVG-X-KEY" | "tvg-x-key";
type TvgXMediaSequence = "TVG-X-MEDIA-SEQUENCE" | "tvg-x-media-sequence";
type TvgXProgramDateTime =
  | "TVG-X-PROGRAM-DATE-TIME"
  | "tvg-x-program-date-time";
type TvgXVersion = "TVG-X-VERSION" | "tvg-x-version";
type TvgResolution = "TVG-RESOLUTION" | "tvg-resolution";
type TvgFramerate = "TVG-FRAMERATE" | "tvg-framerate";
type GroupTitle = "GROUP-TITLE" | "group-title";

type ExtAttribute =
  | TvgId
  | TvgName
  | TvgLogo
  | TvgCountry
  | TvgLanguage
  | TvgType
  | TvgUrl
  | TvgGroup
  | TvgEpgid
  | TvgEpgUrl
  | TvgEpgShift
  | TvgRadio
  | TvgTimeshift
  | TvgArchive
  | TvgTvgPlaylist
  | TvgAspectRatio
  | TvgAudioTrack
  | TvgClosedCaptions
  | TvgClosedCaptionsLanguage
  | TvgClosedCaptionsType
  | TvgContentType
  | TvgCopyright
  | TvgDuration
  | TvgExtXDiscontinuity
  | TvgExtXEndlist
  | TvgExtXKey
  | TvgExtXMediaSequence
  | TvgExtXProgramDateTime
  | TvgExtXVersion
  | TvgGap
  | TvgIndependentSegments
  | TvgMedia
  | TvgMediaSequence
  | TvgPlaylistType
  | TvgStart
  | TvgTargetDuration
  | TvgXByterange
  | TvgXEndlist
  | TvgXKey
  | TvgXMediaSequence
  | TvgXProgramDateTime
  | TvgXVersion
  | TvgResolution
  | TvgFramerate
  | GroupTitle;

export {
  ExtType,
  extTypeList,
  ExtAttribute,
  TvgId,
  TvgName,
  TvgLogo,
  TvgCountry,
  TvgLanguage,
  TvgType,
  TvgUrl,
  TvgGroup,
  TvgEpgid,
  TvgEpgUrl,
  TvgEpgShift,
  TvgRadio,
  TvgTimeshift,
  TvgArchive,
  TvgTvgPlaylist,
  TvgAspectRatio,
  TvgAudioTrack,
  TvgClosedCaptions,
  TvgClosedCaptionsLanguage,
  TvgClosedCaptionsType,
  TvgContentType,
  TvgCopyright,
  TvgDuration,
  TvgExtXDiscontinuity,
  TvgExtXEndlist,
  TvgExtXKey,
  TvgExtXMediaSequence,
  TvgExtXProgramDateTime,
  TvgExtXVersion,
  TvgGap,
  TvgIndependentSegments,
  TvgMedia,
  TvgMediaSequence,
  TvgPlaylistType,
  TvgStart,
  TvgTargetDuration,
  TvgXByterange,
  TvgXEndlist,
  TvgXKey,
  TvgXMediaSequence,
  TvgXProgramDateTime,
  TvgXVersion,
  TvgResolution,
  TvgFramerate,
};
