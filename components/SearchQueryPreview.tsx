import React from "react";
import Link from "next/link";

interface SearchPreviewProps {
  query: string;
  text: string;
  id: number;
}

function insert(str: string, index: number, value: string) {
  return str.substr(0, index) + value + str.substr(index);
}

export default function SearchPreview({ query, text, id }: SearchPreviewProps) {
  const startToken = "%%%";
  const endToken = "%%%";
  // TODO: Handle multiple matches
  const start = text.toLocaleLowerCase().indexOf(query.toLocaleLowerCase());
  const end = start + query.length + startToken.length;
  let buffer = insert(text, start, startToken);
  buffer = insert(buffer, end, endToken);
  const parts = buffer.split(startToken);
  // TODO: Handle multiple matches... batch by 3? [[before match, match, after match]]
  const result = parts.reduce<React.ReactNode[]>((memo, string, index) => {
    if (index % 2 === 0) {
      return [...memo, <span key={index}>{string}</span>];
    } else {
      return [
        ...memo,
        <span className="bg-yellow-200" key={index}>
          {string}
        </span>,
      ];
    }
  }, []);

  return (
    <Link href={`/workspace/${id}`}>
      <a>{result}</a>
    </Link>
  );
}
