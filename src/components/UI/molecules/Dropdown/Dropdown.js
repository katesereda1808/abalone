import { useState, useEffect, useRef } from "react";
import styles from "./Dropdown.module.css";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const Dropdown = ({ placeHolder, options, onChange }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const inputRef = useRef();
    useEffect(() => {
        const handler = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
            
        };
        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });
    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };
  const getDisplay = () => {
    if (selectedValue) {
        return selectedValue.label;
    }
    return placeHolder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
    onChange(option)
  };

  const isSelected = (option) => {
    if (!selectedValue) {
        return false;
    }
    return selectedValue.value === option.value;
  };

  return (
    <div className={styles.dropdown_container}>
      <div className={styles.dropdown_input} ref={inputRef} onClick={handleInputClick}>
        <div className={styles.dropdown_selected_value}>{getDisplay()}</div>
        <div className={styles.dropdown_tools}>
          <div className={styles.dropdown_tool}>
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className={styles.dropdown_menu}>
          {options.map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`${styles.dropdown_item} ${isSelected(option) && styles.selected}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
