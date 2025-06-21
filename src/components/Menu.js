import React from "react";

const Menu = ({ items }) => {
  return (
    <section className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, price, category } = menuItem;
        const testId = `menu-item-${category.toLowerCase()}`;
        return (
          <article key={id} className="menu-item" data-test-id={testId}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{category}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
