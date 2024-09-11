// Topbar.js
import React, { useState } from 'react';
import '../../css/layout/layout.css'; // 사이드바의 스타일을 정의하는 CSS 파일


const Topbar = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="topbar">
            <ul className="topbar-list">
                {items.map((item) => (
                    <li
                        key={item}
                        className={`topbar-item ${selectedItem === item ? 'selected' : ''}`}
                        onClick={() => setSelectedItem(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Topbar;
