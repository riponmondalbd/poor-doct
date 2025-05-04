import React from "react";
import PageTopSection from "../../../components/PageTopSection/PageTopSection";
import MoreQuestion from "../MoreQuestion/MoreQuestion";
import Question from "../Question/Question";

const Faq = () => {
  return (
    <div>
      <title>Poor Doct | Faq's</title>
      <PageTopSection title={"Faq's"} />
      <Question />
      <MoreQuestion />
    </div>
  );
};

export default Faq;
