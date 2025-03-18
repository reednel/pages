import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarDay,
  FaQuestion,
} from "react-icons/fa";

type Props = {
  cards: string[];
};

const getTodayIndex = () => {
  const today = new Date();
  const year = today.getFullYear();
  const startOfYear = new Date(year, 0, 0);
  const diff = today.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  let leapYearAdjustment = 0;
  if (
    ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) &&
    dayOfYear > 59
  ) {
    leapYearAdjustment = 1;
  }

  return dayOfYear + leapYearAdjustment - 1;
};

const ConversationSwiper = ({ cards }: Props) => {
  const todayIndex = getTodayIndex();
  const [swiper, setSwiper] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(todayIndex);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0, 0);
      setCurrentIndex(0);
      swiper.on("slideChange", () => setCurrentIndex(swiper.realIndex));
    }
  }, [swiper]);

  return (
    <div className="conversation-swiper">
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(s) => setCurrentIndex(s.realIndex)}
        spaceBetween={10}
        slidesPerView={1}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="col-10 sm:col-8 md:col-6 mx-auto p-4 my-12 min-h-64 text-center content-center glass rounded-lg">
              <h3>{card}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <nav className="flex justify-center pb-8">
        <div className="flex-col glass justify-center rounded-md p-2 m-2 w-48">
          <div className="row items-center">
            <div
              className="cursor-pointer col text-txt-p w-0 p-0 dark:text-darkmode-txt-p text-center align-middle"
              onClick={() => swiper?.slidePrev()}
            >
              <FaArrowLeft className={"m-4 inline-block"} />
            </div>
            <div className="col text-txt-p dark:text-darkmode-txt-p text-center p-0 m-4">
              <input
                type="number"
                className="w-16 text-center bg-transparent border-none"
                min="1"
                max={cards.length}
                value={currentIndex + 1}
                onChange={(e) => {
                  const newIndex = parseInt(e.target.value, 10) - 1;
                  if (
                    !isNaN(newIndex) &&
                    newIndex >= 0 &&
                    newIndex < cards.length
                  ) {
                    swiper?.slideTo(newIndex);
                    setCurrentIndex(newIndex);
                  }
                }}
              />
            </div>
            <div
              className="cursor-pointer col text-txt-p dark:text-darkmode-txt-p text-center w-0 p-0"
              onClick={() => swiper?.slideNext()}
            >
              <FaArrowRight className="m-4 inline-block" />
            </div>
          </div>
          <div className="row content-center justify-center">
            <div
              className="cursor-pointer col text-txt-p w-0 p-0 dark:text-darkmode-txt-p text-center align-middle"
              onClick={() => swiper?.slideTo(todayIndex)}
            >
              <FaCalendarDay className={"-mt-1 inline-block"} />
            </div>
            {/* <button onClick={() => swiper?.slideTo(todayIndex)}>
              Jump to Today
            </button> */}
            <div
              className="cursor-pointer col text-txt-p w-0 p-0 dark:text-darkmode-txt-p text-center align-middle"
              onClick={() =>
                swiper?.slideTo(Math.floor(Math.random() * cards.length))
              }
            >
              <FaQuestion className={"-mt-1 inline-block"} />
            </div>
          </div>
          {/* <div className="row content-center justify-center">
            <button
              onClick={() =>
                swiper?.slideTo(Math.floor(Math.random() * cards.length))
              }
            >
              Jump to Random
            </button>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default ConversationSwiper;
