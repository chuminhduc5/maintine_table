import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SystemSidebar.css';

function SystemSideBar() {
  const [isSystemOpen, setIsSystemOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleSystem = () => setIsSystemOpen(!isSystemOpen);
  const handleToggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterItems = (items) => {
    return items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const systemItems = ["Công việc đang xử lý", "Quá trình duyệt", "Loại tài liệu", "Số hồ sơ"];
  const settingsItems = ["Thiết lập bảng giá bán"];

  return (
    <div className="sidebar">
      <input
        type="text"
        className="sidebar-search"
        placeholder="Tìm kiếm..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      
      <div className="sidebar-item" onClick={handleToggleSystem}>
        Hệ thống
        <span className={`arrow ${isSystemOpen ? 'arrow-up' : 'arrow-down'}`}></span>
      </div>
      {isSystemOpen && (
        <div>
          {filterItems(systemItems).map((item, index) => (
            <div key={index} className="sidebar-subitem">{item}</div>
          ))}
        </div>
      )}

      <div className="sidebar-item" onClick={handleToggleSettings}>
        Thiết lập hệ thống
        <span className={`arrow ${isSettingsOpen ? 'arrow-up' : 'arrow-down'}`}></span>
      </div>
      {isSettingsOpen && (
        <div>
          {filterItems(settingsItems).map((item, index) => (
            <div key={index} className="sidebar-subitem">{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SystemSideBar;



