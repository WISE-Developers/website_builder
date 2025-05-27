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
  const getInitialTab = () => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    if (tabParam && tabs.some(tab => tab.id === tabParam)) {
      return tabParam;
    }
    return tabs.find(tab => tab.isDefault)?.id || tabs[0]?.id || '';
  };

  const [activeTab, setActiveTab] = useState<string>(getInitialTab());

  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (tabParam && tabs.some(tab => tab.id === tabParam)) {
        setActiveTab(tabParam);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [tabs]);

  const handleTabClick = (tabId: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set('tab', tabId);
    const newUrl = `${window.location.pathname}${window.location.hash.split('?')[0]}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
    setActiveTab(tabId);
    return false;
  };

  return (
    <div className="tab-container">
      <ul id="tabs">
        {tabs.map(tab => (
          <li key={tab.id} style={{ display: 'inline' }}>
            <button
              type="button"
              onClick={() => handleTabClick(tab.id)}
              className={activeTab === tab.id ? 'selected tab-link' : 'tab-link'}
            >
              {tab.title}
            </button>
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