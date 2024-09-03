import React from 'react';
// import "./footer.css";

type MenuItem = {
  id: number;
  name: string;
  link: string;
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
};

const footerMenuItems: MenuCategory[] = [
  {
    title: 'Customer Service',
    items: [
      { id: 1, name: 'Help Center', link: '#' },
      { id: 2, name: 'Track an Order', link: '#' },
      { id: 3, name: 'Return an Item', link: '#' },
      { id: 4, name: 'Return Policy', link: '#' },
      { id: 5, name: 'Privacy & Security', link: '#' },
      { id: 6, name: 'Feedback', link: '#' },
    ],
  },
  {
    title: 'My Account',
    items: [
      { id: 7, name: 'Login/Register', link: '#' },
      { id: 8, name: 'Browsing History', link: '#' },
      { id: 9, name: 'Order History', link: '#' },
      { id: 10, name: 'Returns History', link: '#' },
      { id: 11, name: 'Address Book', link: '#' },
      { id: 12, name: 'Wish Lists', link: '#' },
      { id: 13, name: 'My Build Lists', link: '#' },
      { id: 14, name: 'My Build Showcase', link: '#' },
      { id: 15, name: 'Email Notifications', link: '#' },
      { id: 16, name: 'Subscriptions Orders', link: '#' },
      { id: 17, name: 'Auto Notifications', link: '#' },
    ],
  },
  {
    title: 'Company Information',
    items: [
      { id: 18, name: 'About Us', link: '#' },
      { id: 19, name: 'Careers', link: '#' },
      { id: 20, name: 'Press', link: '#' },
      { id: 21, name: 'Terms of Service', link: '#' },
      { id: 22, name: 'Awards/Rankings', link: '#' },
      { id: 23, name: 'Hours and Locations', link: '#' },
      { id: 24, name: 'Press Inquiries', link: '#' },
      { id: 25, name: 'investors Policy', link: '#' },
      { id: 26, name: 'Buying Policy', link: '#' },
    ],
  },
  {
    title: 'Tools & Resources',
    items: [
      { id: 27, name: 'Become a supplier', link: '#' },
      { id: 29, name: 'Sell on Newegg.com', link: '#' },
      { id: 30, name: 'For Your Business', link: '#' },
      { id: 31, name: 'Newegg Partner Services', link: '#' },
      { id: 32, name: 'Become an Affiliate', link: '#' },
      { id: 33, name: 'Newegg Creators', link: '#' },
      { id: 34, name: 'Site Map', link: '#' },
      { id: 35, name: 'Shop by Brand', link: '#' },
      { id: 36, name: 'Rebates', link: '#' },
      { id: 37, name: 'Mobile Apps', link: '#' },
      { id: 38, name: 'Newegg Store Credit Card', link: '#' },
      { id: 39, name: 'Student Discount', link: '#' },
    ],
  },
  {
    title: 'Service',
    items: [
      { id: 16, name: 'Consulting', link: '#' },
      { id: 17, name: 'Maintenance', link: '#' },
      { id: 18, name: 'Repair', link: '#' },
      { id: 19, name: 'Installation', link: '#' },
      { id: 20, name: 'Training', link: '#' },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <div className="div-footer w-full mt-5 flex items-center justify-center ">
      <footer className='w-full    mt-3  flex justify-items-start items-center topb' >
        <div className="innerfooter w-[88%] flex items-start justify-between p-5">
          {footerMenuItems.map((category) => (
            <div key={category.title}>
              <h3 className='text-2xl text-sky-900   mb-2 font-bold'>{category.title}</h3>
              <ul className='leading-4'>
                {category.items.map((item) => (
                  <li key={item.id} className='mt-3 font-medium text-base hover:cursor-pointer hover:underline'>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;