import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const items = [
  {
    title: 'Navigation One',
    key: 'sub1',
    icon: <MailOutlined />,
    children: [
      { title: 'Option 1', key: '1' },
      { title: 'Option 2', key: '2' },
      { title: 'Option 3', key: '3' },
      { title: 'Option 4', key: '4' },
    ],
  },
  {
    title: 'Navigation Two',
    key: 'sub2',
    icon: <AppstoreOutlined />,
    children: [
      { title: 'Option 5', key: '5' },
      { title: 'Option 6', key: '6' },
      {
        title: 'Submenu',
        key: 'sub3',
        children: [
          { title: 'Option 7', key: '7' },
          { title: 'Option 8', key: '8' },
        ],
      },
    ],
  },
  {
    title: 'Navigation Three',
    key: 'sub4',
    icon: <SettingOutlined />,
    children: [
      { title: 'Option 9', key: '9' },
      { title: 'Option 10', key: '10' },
      { title: 'Option 11', key: '11' },
      { title: 'Option 12', key: '12' },
    ],
  },
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const App = () => {
  const [openKeys, setOpenKeys] = useState<string[]>(['sub1']);

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const renderMenuItems = (menuItems: any[]): React.ReactNode => {
    return menuItems.map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      } else {
        return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
      }
    });
  };

  return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      {renderMenuItems(items)}
    </Menu>
  );
};

export default App;