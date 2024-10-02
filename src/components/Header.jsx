import React from "react";

const Header = ({ title }) => {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:p-5">
      <h3 className="wrapper h3-bold text-center sm:text-left">
        Actors {title}
      </h3>
    </section>
  );
};

export default Header;
