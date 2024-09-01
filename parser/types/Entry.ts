import { Entry } from ".";

const defaultEntry: Entry = { contentURL: "", duration: 0 };

const clearEntry = (entry: Entry) => {
  entry = structuredClone(entry);
};

export default clearEntry
