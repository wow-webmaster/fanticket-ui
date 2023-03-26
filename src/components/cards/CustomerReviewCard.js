import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const CardStyle = styled.div`
  padding: 12px 16px;
  display: flex;
  gap: 16px;
  border:1px;
  border-style:solid;
  border-color:#CECECE;
  border-radius: 16px;
  width: 100%;
`;
export default function CustomerReviewCard({ customer }) {
  return (
    <CardStyle className="flex-col md:flex-row ">
      <div className="flex flex-row gap-4">
        <LazyLoadImage
            alt="avatar"
          src={customer.avatar}
          className="rounded-full w-20 h-20 md:w-24 md:h-24 aspect-square"
        />
        <div className="flex flex-col gap-2">
          <label className="text-xl">{customer.name}</label>
          <label className="text-stone-400 mb-2">{customer.role}</label>
          <p  className="hidden md:block text-ellipsis overflow-hidden">{customer?.lastReview}</p>
        </div>
      </div>

      <p className="block md:hidden text-ellipsis overflow-hidden">{customer?.lastReview}</p>
    </CardStyle>
  );
}
