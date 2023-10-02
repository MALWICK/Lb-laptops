import React, { useState } from 'react';
import styles from './NestedDropdown.module.css';

interface Option {
  title: string;
  pageLink: string;
  options?: Option[];
}

interface NestedDropdownProps {
  title: string;
  options: Option[];
  onItemClick?: (pageLink: string) => void;
}

const NestedDropdown: React.FC<NestedDropdownProps> = ({
  title,
  options,
  onItemClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemClick = (pageLink: string) => {
    if (onItemClick) {
      onItemClick(pageLink);
    }
    setIsExpanded(false);
    window.location.href = pageLink; // Redirect to the clicked page
  };

  return (
    <div
      className={`${styles.dropdown} ${isExpanded ? styles.open : ''}`}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <button className={styles.dropdownToggle} onClick={handleToggle}>
        {title}
      </button>
      {isExpanded && (
        <ul className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <li key={index} className={styles.dropdownMenuItem}>
              <a
                href={option.pageLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(option.pageLink);
                }}
              >
                {option.title}
              </a>
              {option.options && (
                <NestedDropdown
                  title={option.title}
                  options={option.options}
                  onItemClick={onItemClick}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NestedDropdown;