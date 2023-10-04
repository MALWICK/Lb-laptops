/* 
export const options = [
  {
    title: 'Computers',
    links: [
      { title: 'Laptops', link: '/laptops' },
      { title: 'Desktops', link: '/desktops' },
      { 
        title: 'Tablets', 
        links: [
          { title: 'Android Tablets', link: '/android-tablets' },
          { title: 'iPad', link: '/ipad' },
        ],
      },
    ],
  },
  {
    title: 'Computer Accessories',
    links: [
      { title: 'Keyboards', link: '/keyboards' },
      { 
        title: 'Mice', 
        links: [
          { title: 'Wired Mice', link: '/wired-mice' },
          { title: 'Wireless Mice', link: '/wireless-mice' },
        ],
      },
      { title: 'Monitors', link: '/monitors' },
    ],
  },
];

 */


const Options = [
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

export default Options;