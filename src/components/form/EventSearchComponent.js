import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SimpleBar from "simplebar-react";
import styled from "styled-components";
import GradientBorderWrapper from "../wrappers/GradientBorderWrapper";
import useAuth from "../../hooks/useAuth";
import { fDateTime, fShortDate, fToNow } from "../../utils/formatTime";
import { useSelector } from "../../redux/store";

const SearchWrapper = styled.div`
  border-radius: 1rem;
  width: 100%;
  border: 1px;
  border-style: solid;
  border-color: transparent;
  padding: 0.5rem 1rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  background: linear-gradient(#1c1c1c, #1c1c1c) padding-box,
    linear-gradient(to bottom, #828282, #323232) border-box;
`;

export default function EventSearchComponent({
  small = false,
  handleSelected,
}) {
  const [visible, setVisible] = useState(false);
  const { events } = useSelector((state) => state.event);
  const [keyword, setKeyword] = useState("");
  const { t } = useTranslation();
  const [filteredEvents, setFilteredEvents] = useState([]);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const onSelected = (evt) => {
    if (handleSelected) {
      handleSelected(evt);
      setVisible(false);
    } else {
      navigate(`/event/${evt._id}/basic`);
    }
  };
  useEffect(() => {
    if (keyword && keyword !== "") {
      if (!visible) setVisible(true);
      setFilteredEvents(
        events?.filter(
          (e) =>
            e.name.toLowerCase().includes(keyword.trim()) ||
            e.place.toLowerCase().includes(keyword.trim())
        )
      );
    }
  }, [keyword]);
  return (
    <div className="w-full relative">
      <SearchWrapper>
        <Icon icon="ri:search-line" width={24} />
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value.toLowerCase())}
          className={`input border-none flex-1 ${small ? "input-sm" : ""} `}
          aria-label="search-input"
        />
        <button
          className="btn btn-circle btn-sm bg-transparent border-none"
          aria-label="search-products"
        >
          <Icon icon="ic:outline-filter-list" width={24} />
        </button>
      </SearchWrapper>
      {keyword && keyword !== "" && visible && (
        <div className="absolute z-40 top-20 w-full left-0 rounded-lg -mt-3 ">
          <GradientBorderWrapper>
            <SimpleBar style={{ maxHeight: "40vh" }}>
              <div className="flex w-full justify-center flex-col p-4 gap-2">
                <label className="text-stone-400 text-lg">
                  {t("title.search_result")}
                </label>
                {filteredEvents?.length === 0 && (
                  <div className="flex flex-col justify-center items-center p-4 gap-4">
                    <label className="text-xl">
                      {t("message.not_found_event")}
                    </label>
                    <button
                      className="btn btn-primary capitalize"
                      onClick={() => {
                        if (isAuthenticated) navigate("/event/add");
                      }}
                    >
                      {(!isAuthenticated && (
                        <label
                          htmlFor="auth-modal-check"
                          className="cursor-pointer"
                        >
                          {t("action.register_event")}
                        </label>
                      )) || (
                        <label className="cursor-pointer">
                          {t("action.register_event")}
                        </label>
                      )}
                    </button>
                  </div>
                )}
                {filteredEvents?.map((e, index) => (
                  <div
                    className="flex justify-between p-2 w-full hover:bg-secondary cursor-pointer rounded-lg"
                    key={index}
                  >
                    {/* <Link to={`/event/${e._id}/basic`}> */}
                    <div
                      className="flex gap-2 items-center cursor-pointer "
                      onClick={() => onSelected(e)}
                    >
                      <Icon icon="arcticons:eventyayattendee" width={24} />
                      <div className="flex flex-col gap-1">
                        <h6 className="text-lg ">{e.name}</h6>
                        <h6 className="text-primary ">
                          {e.containsTime
                            ? fDateTime(e.dateTime)
                            : fShortDate(e.dateTime)}
                          , {e.place}
                        </h6>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                ))}
              </div>
            </SimpleBar>
          </GradientBorderWrapper>
        </div>
      )}
    </div>
  );
}
