import React from 'react';
import NestedDropdown from '@/components/homepage/components/dropdownmenu1/ NestedDropdown';

const MyPage = () => {
  const handleItemClick = (pageLink: string) => {
    console.log('Item clicked:', pageLink);
    // Handle the click event here
  };

  const options = [
    {
      title: 'Laptops',
      pageLink: '/Laptops',
      options: [
        {
          title: 'Option 1',
          pageLink: '/laptops/option1',
        },
        {
          title: 'Option 2',
          pageLink: '/Laptops/option2',
        },
      ],
    },
    {
      title: 'PC',
      pageLink: '/Pc',
    },
    {
      title: 'PS5',
      pageLink: '/ps5',
    },
  ];

  return (
    <div>
      <h1>My Page</h1>
      <NestedDropdown title="Products" options={options} onItemClick={handleItemClick} />
    </div>
  );
};

export default MyPage;