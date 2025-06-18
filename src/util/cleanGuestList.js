export function cleanGuestList(input) {
  return input
    .replace(/\s*,\s*/g, ",")     // Remove space around commas
    .replace(/,+/g, ",")          // Collapse duplicates
    .replace(/,\s*$/, "")         // Remove trailing comma
    .split(",")                   // Turn into array
    .map(name => name.trim())     // Trim names
    .filter(Boolean)              // Remove empty entries
}