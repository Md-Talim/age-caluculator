import InputField from '@/components/InputField';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white py-12 px-6 md:p-[55px] w-[90.6%] lg:w-fit flex gap-[30px] flex-col rounded-3xl rounded-ee-[200px]">
      <section className="flex gap-[17px] md:w-fit">
        <InputField label="day" placeholder="DD" />
        <InputField label="month" placeholder="MM" />
        <InputField label="year" placeholder="YYYY" />
      </section>
      <section className="relative h-[65px] md:flex md:w-fit">
        <hr className="absolute lg:relative h-[2px] md:w-[633px] -z-1 w-full top-1/2" />
        <div className="flex items-center justify-center lg:justify-end bg-transparent w-full md:w-auto">
          <button className="absolute md:relative right-1/2 translate-x-1/2 translate-y-1/2 md:translate-y-0 mx-auto w-[65px] h-[65px] z-1 p-5 bg-primary flex items-center justify-center rounded-full md:w-[96px] md:h-[96px] md:p-[10px]">
            <Image
              src="/images/arrow.svg"
              alt="arrow-icon"
              width={65}
              height={65}
              className="w-[65px] h-[65px]"
            />
          </button>
        </div>
      </section>
      <section className="md:max-w-fit">
        <p className="text-[56px] md:text-[102px] font-bold italic tracking-[-1.12px] leading-[62px] md:leading-[115px] text-offBlack flex gap-2 md:max-w-fit">
          <span className="text-primary">38</span>years
        </p>
        <p className="text-[56px] md:text-[102px] font-bold italic tracking-[-1.12px] leading-[62px] md:leading-[115px] text-offBlack flex gap-2 md:max-w-fit">
          <span className="text-primary">3</span>months
        </p>
        <p className="text-[56px] md:text-[102px] font-bold italic tracking-[-1.12px] leading-[62px] md:leading-[115px] text-offBlack flex gap-2 md:max-w-fit">
          <span className="text-primary">36</span>days
        </p>
      </section>
    </main>
  );
}
