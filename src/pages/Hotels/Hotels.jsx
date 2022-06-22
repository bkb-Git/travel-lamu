import { useState } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Hotels = () => {
  const [filterMenu, setFilterMenu] = useState(false);

  return (
    <>
      <Section1 setMenuOpen={setFilterMenu} />
      <Section2 setMenuOpen={setFilterMenu} filterMenu={filterMenu} />
    </>
  );
};

export default Hotels;
