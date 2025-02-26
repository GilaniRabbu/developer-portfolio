"use client";

import { CodeBlock } from "react-code-block/shiki";
import { TokensResult } from "shiki";

interface CodeBlockProps {
  tokens: TokensResult;
  backgroundColor?: string;
  textColor?: string;
}

const CodeBlockRenderer: React.FC<CodeBlockProps> = ({
  tokens,
  backgroundColor,
  textColor,
}) => {
  return (
    <CodeBlock tokens={tokens}>
      <CodeBlock.Code
        className="p-6 rounded-xl overflow-x-auto"
        style={{ backgroundColor, color: textColor }}
      >
        <div className="table-row">
          <CodeBlock.LineNumber
            className="table-cell pr-4 text-sm text-right select-none"
            style={{ color: textColor, opacity: 0.8 }}
          />
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
};

export default CodeBlockRenderer;
