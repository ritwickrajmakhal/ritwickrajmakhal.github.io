import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Tab(props) {
  const [activeTab, setActiveTab] = useState(props.activeTab);

  const tabs = props.tabs.map((tab, index) => (
    <li
      className="nav-item"
      onClick={() => {
        setActiveTab(tab);
        props.handleTabClick(tab);
      }}
      style={{ cursor: "pointer" }}
      key={index}
    >
      <p
        className={`nav-link ${
          activeTab.name === tab.name
            ? "active text-bg-primary"
            : "text-bg-secondary"
        }`}
      >
        {tab.name}
      </p>
    </li>
  ));
  return <ul className="nav nav-tabs">{tabs}</ul>;
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      modalBody: PropTypes.element.isRequired,
    }).isRequired
  ).isRequired,
  activeTab: PropTypes.shape({
    name: PropTypes.string.isRequired,
    modalBody: PropTypes.element.isRequired,
  }).isRequired,
  handleTabClick: PropTypes.func.isRequired,
};
