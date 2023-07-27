import InputField from '@/components/InputField';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white py-12 px-6 w-[90.6%] flex gap-[30px] flex-col">
      <section className="flex gap-[17px] justify-between items-center">
        <InputField label="day" placeholder="DD" />
        <InputField label="month" placeholder="MM" />
        <InputField label="year" placeholder="YYYY" />
      </section>
      <section className="relative h-[65px]">
        <hr className="absolute h-[2px] -z-1 w-full top-1/2" />
        <button className="absolute right-1/2 translate-x-1/2 mx-auto w-[65px] h-[65px] z-1 p-5 bg-primary flex items-center justify-center rounded-full">
          <Image
            src="/images/arrow.svg"
            alt="arrow-icon"
            width={65}
            height={65}
            className="w-[65px] h-[65px]"
          />
        </button>
      </section>
      <section>Result</section>
    </main>
  );
}
