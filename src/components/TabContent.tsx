import { useState, useEffect } from 'react';
import '../styles/TabContent.css';

interface TabProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isDefault?: boolean;
}

interface TabContentProps {
  tabs: TabProps[];
}

const TabContent: React.FC<TabContentProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    // Set the default tab on initial render
    const defaultTab = tabs.find(tab => tab.isDefault)?.id || tabs[0]?.id || '';
    setActiveTab(defaultTab);
  }, [tabs]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    return false; // Prevent default link behavior
  };

  return (
    <div className="tab-container">
      <ul id="tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <a 
              href={`#${tab.id}`} 
              onClick={() => handleTabClick(tab.id)}
              className={activeTab === tab.id ? 'selected' : ''}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      {tabs.map(tab => (
        <div 
          key={tab.id}
          id={tab.id} 
          className={`tabContent ${activeTab === tab.id ? '' : 'hide'}`}
        >
          <div>{tab.children}</div>
        </div>
      ))}
    </div>
  );
};

export default TabContent;