"use client";

import { useEffect, useState } from "react";
import { getSyntaxHighlightedTokens } from "@/utils/getSyntaxHighlightedTokens";
import CodeBlockRenderer from "@/components/CodeBlock";
import { TokensResult } from "shiki";

interface CodeWrapperProps {
  code: string;
  theme?: string;
}

const themeStyles: Record<string, { background: string; text: string }> = {
  "github-dark": { background: "#0D1117", text: "#C9D1D9" },
  "github-light": { background: "#FFFFFF", text: "#24292F" },
  dracula: { background: "#282A36", text: "#F8F8F2" },
  nord: { background: "#2E3440", text: "#D8DEE9" },
  monokai: { background: "#272822", text: "#F8F8F2" },
  "solarized-dark": { background: "#002B36", text: "#839496" },
  "solarized-light": { background: "#FDF6E3", text: "#586E75" },
  "rose-pine": { background: "#191724", text: "#E0DEF4" },
};

const CodeWrapper: React.FC<CodeWrapperProps> = ({
  code,
  theme = "rose-pine",
}) => {
  const [tokens, setTokens] = useState<TokensResult | null>(null);

  useEffect(() => {
    const fetchTokens = async () => {
      const highlightedTokens: TokensResult = await getSyntaxHighlightedTokens(
        code,
        theme
      );
      setTokens(highlightedTokens);
    };
    fetchTokens();
  }, [code, theme]);

  const { background, text } = themeStyles[theme] || {
    background: "#000",
    text: "#FFF",
  };

  return tokens ? (
    <CodeBlockRenderer
      tokens={tokens}
      backgroundColor={background}
      textColor={text}
    />
  ) : (
    <p>Loading...</p>
  );
};

export default CodeWrapper;
