import { ChangeEvent } from "react";
import { Search } from "lucide-react";
import { StyleSearchBar } from "./SearchBar.style";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <StyleSearchBar>
      <div className="search-box">
        <button className="btn-search">
          <Search size={24} color="#eeeeee" strokeWidth={2} />
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Поиск лекций..."
          onChange={handleChange}
        />
      </div>
    </StyleSearchBar>
  );
}
