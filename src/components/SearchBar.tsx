import { ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск лекций..."
      onChange={handleChange}
      className="border p-2 rounded-md w-full mb-4"
    />
  );
}
