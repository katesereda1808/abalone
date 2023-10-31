import { useState, useEffect, useRef } from 'react';

import Icon from './Icon';

import styles from './Dropdown.module.css';

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
        window.addEventListener('click', handler);
        return () => {
            window.removeEventListener('click', handler);
        };
    });

    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (selectedValue) return selectedValue.label;

        return placeHolder;
    };

    const onItemClick = (option) => {
        setSelectedValue(option);
        onChange(option);
    };

    const isSelected = (option) => {
        if (!selectedValue) return false;

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
