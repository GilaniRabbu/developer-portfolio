import React from "react";
import CodeWrapper from "@/components/CodeWrapper";

export const CodeBlockEducation = () => {
  const largeCode = `const education = [
  {
    2023 - Current
    MBA in Management
    National University
  },
  {
    2017 - 2021
    BBA in Management
    National University
  }
]`;

  return (
    <main className="p-6">
      <CodeWrapper code={largeCode} theme="rose-pine" />
    </main>
  );
};
