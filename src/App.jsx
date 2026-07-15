import React, { useState } from "react";
import { members } from "./data/members";
import SearchBar from "./components/SearchBar";
import FilterChips from "./components/FilterChips";
import MemberGrid from "./components/MemberGrid";
import MemberModal from "./components/MemberModal";
import "./style.css";

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedMember, setSelectedMember] = useState(null);

  // 역할 및 검색어 기준 동적 필터링
  const filteredMembers = members.filter((member) => {
    const matchesFilter = activeFilter === "All" || member.role === activeFilter;
    const matchesSearch = member.name
      .toLowerCase()
      .includes(searchVal.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Team Directory</h1>
        <p className="app-subtitle">
          혁신을 만들어가는 우수한 전문가 팀원들을 소개합니다. <br />
          이름 검색과 역할 필터링으로 원하는 팀원을 빠르게 찾아보세요.
        </p>
      </header>

      <main>
        <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
        <FilterChips
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <MemberGrid
          members={filteredMembers}
          onCardClick={setSelectedMember}
        />
      </main>

      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}

export default App;
