import NestedDropdown from '@/components/homepage/components/dropdownmenu1/ NestedDropdown';


const MyPage: React.FC = () => {
  const dropdownData = [
    {
      title: 'Link 1',
      link: '/link1',
    },
    {
      title: 'Link 2',
      link: '/link2',
      children: [
        {
          title: 'Sublink 1',
          link: '/link2/sublink1',
        },
        {
          title: 'Sublink 2',
          link: '/link2/sublink2',
        },
      ],
    },
  ];

  return (
    <div>
      <h1>My Page</h1>
      <NestedDropdown />
    </div>
  );
};

export default MyPage;