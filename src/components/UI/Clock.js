import React, { useState, useEffect } from 'react';
import '../../styles/clock.css';

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval;

  const countDown = () => {
    const destination = new Date('Dec 20, 2025').getTime(); // Cập nhật ngày đích
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;

      // Tính toán số ngày, giờ, phút, giây
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (different < 0) {
        clearInterval(interval); // Dừng countdown khi thời gian đã qua
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000); // Cập nhật mỗi giây
  };

  useEffect(() => {
    countDown(); // Gọi hàm countdown khi component mount
    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []); // Dependency array rỗng để chỉ chạy một lần

  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{days}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{hours}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{minutes}</h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{seconds}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
