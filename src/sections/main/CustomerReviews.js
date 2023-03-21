import { Icon } from "@iconify/react";
import { useState } from "react";
import styled from "styled-components";
import CustomerReviewCard from "../../components/cards/CustomerReviewCard";
import { CUSTOMERS } from "../../_mocks";

const RootStyle = styled.div`
  width: "100%";
  background-color: #e9ecf4;
`;
export default function CustomerReviews() {
  const [reivewIndex, setReviewIndex] = useState(0);
  const nextReview = () => {
    if (reivewIndex < CUSTOMERS.length) {
      setReviewIndex(reivewIndex + 1);
    } else setReviewIndex(0);
  };
  const prevReview = () => {
    if (reivewIndex > 0) {
      setReviewIndex(reivewIndex - 1);
    } else setReviewIndex(0);
  };
  return (
    <RootStyle>
      <div className="container py-8 md:py-16 text-black">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex gap-4 items-center mb-8">
            <Icon
              icon="octicon:code-review-16"
              width={48}
              className="text-yellow-400"
            />
            <label className="text-4xl ">
              Quem usou e <span className="text-yellow-400">curtiu!</span>
            </label>
          </div>
          <div className="flex flex-row gap-2 items-center overflow-hidden w-full">
            <a
              className="btn btn-sm  btn-circle "
              href={`#customer-review-${reivewIndex}`}
              onClick={prevReview}
            >
              <Icon
                icon="ic:baseline-arrow-back-ios-new"
                className="cursor-pointer"
              />
            </a>
            <div className="flex-1 carousel">
              {CUSTOMERS.map((customer, index) => (
                <div
                  id={`customer-review-${index}`}
                  className="p-2 md:px-4 min-w-full lg:min-w-[50%]"
                  key={index}
                >
                  <CustomerReviewCard customer={customer} />
                </div>
              ))}
            </div>
            <a
              className="btn btn-sm   btn-circle"
              href={`#customer-review-${reivewIndex}`}
              onClick={nextReview}
            >
              <Icon
                icon="ic:baseline-arrow-forward-ios"
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </RootStyle>
  );
}
