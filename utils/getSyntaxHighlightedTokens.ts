import { codeToTokens } from "shiki";

export async function getSyntaxHighlightedTokens(
  code: string,
  theme: string = "rose-pine"
) {
  return await codeToTokens(code, { theme });
}
