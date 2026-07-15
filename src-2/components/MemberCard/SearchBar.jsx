import React from "react";

function SearchBar({ searchVal, setSearchVal }) {
  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="이름으로 팀원을 검색해보세요..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        {searchVal && (
          <button className="clear-btn" onClick={() => setSearchVal("")} aria-label="검색어 지우기">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="clear-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
