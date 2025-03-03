import CodeBlock from "@/components/CodeBlock";

export default function EducationSection() {
  const educationCode = `
const education = [
  {
    institution: "National University",
    degree: "Master's of Business Administrator",
    field: "Management",
    year: 2023 - Current,
  },
  {
    institution: "National University",
    degree: "Bachelor of Business Administrator",
    field: "Management",
    year: 2017 - 2021,
  },
];
  `;

  return (
    <div>
      <CodeBlock code={educationCode} />
    </div>
  );
}
