import React from "react";

function MemberCard({ member, onCardClick }) {
  const getRoleBadgeClass = (role) => {
    switch (role) {
      case "Developer":
        return "badge-dev";
      case "Designer":
        return "badge-design";
      case "Manager":
        return "badge-manager";
      case "Researcher":
        return "badge-research";
      default:
        return "badge-default";
    }
  };

  return (
    <div className="member-card" onClick={() => onCardClick(member)}>
      <div className="card-top">
        <div className={`status-indicator ${member.status.toLowerCase()}`}>
          <span className="indicator-dot"></span>
          <span className="indicator-text">{member.status}</span>
        </div>
      </div>

      <div className="card-avatar-wrapper">
        <img src={member.avatar} alt={member.name} className="card-avatar" />
        <div className="avatar-glow"></div>
      </div>

      <div className="card-info">
        <h3 className="member-name">{member.name}</h3>
        <span className={`role-badge ${getRoleBadgeClass(member.role)}`}>
          {member.role}
        </span>
        <p className="member-email">{member.email}</p>
        <p className="member-bio-short">{member.bio}</p>
      </div>

      <div className="card-footer">
        <span className="detail-link">
          자세히 보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="arrow-icon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default MemberCard;
