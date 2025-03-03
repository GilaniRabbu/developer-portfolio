"use client";

import { useState } from "react";

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <div className="relative p-5 rounded-lg font-mono bg-gray-900 text-white dark:bg-gray-400 dark:text-gray-900">
      <div className="flex justify-start gap-2 absolute top-3 left-3">
        <button className="w-2.5 h-2.5 rounded-full transition-all bg-red-500 hover:bg-red-600" />
        <button className="w-2.5 h-2.5 rounded-full transition-all bg-yellow-400 hover:bg-yellow-500" />
        <button className="w-2.5 h-2.5 rounded-full transition-all bg-green-500 hover:bg-green-600" />
      </div>
      <button
        className="absolute top-2 right-2 text-xs px-2 py-1 rounded-md border border-white dark:border-gray-900"
        onClick={copyToClipboard}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
