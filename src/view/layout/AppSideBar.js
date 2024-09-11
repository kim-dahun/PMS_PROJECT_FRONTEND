// Sidebar.js
import React, { useState } from 'react';
import '../../css/layout/layout.css'; // 사이드바의 스타일을 정의하는 CSS 파일

const Sidebar = ({ items, itemMap }) => {
    const [expandedItems, setExpandedItems] = useState({});

    const handleClick = (item) => {
        setExpandedItems((prev) => ({
            ...prev,
            [item]: !prev[item], // 클릭한 항목의 상태를 토글
        }));
    };

    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                {items.map((item) => (
                    <li key={item} className="sidebar-item">
                        <div
                            className={`item-header ${expandedItems[item] ? 'selected' : ''}`}
                            onClick={() => handleClick(item)}
                        >
                            {item}
                        </div>
                        {expandedItems[item] && (
                            <ul className="sub-items-list">
                                {(itemMap.get(item) || []).map((subItem, index) => (
                                    <li key={index} className="sub-item">{subItem}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;