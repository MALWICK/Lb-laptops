import React from "react";
import NestedDropdown from "@/components/homepage/components/dropdownmenu1/ NestedDropdown";
import Options from "@/data/DropdownOption.js";

const MyPage = () => {
  const handleItemClick = (pageLink: string) => {
    console.log("Item clicked:", pageLink);
    // Handle the click event here
  };

  return (
    <div>
      <h1>My Page</h1>
      <NestedDropdown
        title="Products"
        options={Options}
        onItemClick={handleItemClick}
      />
    </div>
  );
};

export default MyPage;
