import "./index.css";

const DishCategoryTab = (props) => {
  const { menuData, isActiveTab, onChangeTabId } = props;
  const { menuCategory, menuCategoryId } = menuData;

  const activeClass = isActiveTab ? "active-tab" : "";

  return (
    <li className={`category-tab ${activeClass}`}>
      <button
        type="button"
        onClick={() => onChangeTabId(menuCategoryId)}
        className="tab-btn"
      >
        {menuCategory}
      </button>
    </li>
  );
};

export default DishCategoryTab;




// export defaul
