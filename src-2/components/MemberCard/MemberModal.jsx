import React, { useEffect } from "react";

function MemberModal({ member, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!member) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="모달 닫기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            className="close-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="modal-header">
          <div className="modal-avatar-wrapper">
            <img src={member.avatar} alt={member.name} className="modal-avatar" />
            <div className="modal-avatar-glow"></div>
          </div>
          <div className="modal-header-info">
            <h2 className="modal-name">{member.name}</h2>
            <div className="modal-role-status">
              <span className="modal-role">{member.role}</span>
              <span
                className={`modal-status-badge ${member.status.toLowerCase()}`}
              >
                {member.status}
              </span>
            </div>
            <p className="modal-email">{member.email}</p>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h4 className="section-title">소개</h4>
            <p className="modal-bio">{member.bio}</p>
          </div>

          <div className="modal-section">
            <h4 className="section-title">보유 기술 및 스택</h4>
            <div className="modal-skills">
              {member.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberModal;
