
export function formattedKebabCase(text) {
  return text[0].toUpperCase() + text.substring(1).replace(/-/g, ' ')
}