import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <section className='border-primary border p-3 rounded-3xl'>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl text-primary font-medium'>{days}</h1>
        <p className='text-gray-700 font-medium'>Days</p>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl text-primary font-medium'>{hours}</h1>
        <p className='text-gray-700 font-medium'>Hours</p>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl text-primary font-medium'>{minutes}</h1>
        <p className='text-gray-700 font-medium'>Minutes</p>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl text-primary font-medium'>{seconds}</h1>
        <p className='text-gray-700 font-medium'>Seconds</p>
      </div>
    </section>
  );
};

export default CountdownTimer;