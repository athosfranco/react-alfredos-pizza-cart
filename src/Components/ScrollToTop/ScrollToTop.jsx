import React, { useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { ScrollBtn } from "./ScrollToTop.styles";

const ScrollToTop = () => {
  //states
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollVisibility = () => {
    if (!showScroll && window.pageYOffset > 600) setShowScroll(true);
    else if (showScroll && window.pageYOffset <= 600) setShowScroll(false);
  };

  window.addEventListener("scroll", checkScrollVisibility);

  return (
    <ScrollBtn
      onClick={scrollToTopHandler}
      display={showScroll}
      data-tip={"Voltar ao Topo"}
    >
      <FaRegArrowAltCircleUp />
    </ScrollBtn>
  );
};

export default ScrollToTop;
