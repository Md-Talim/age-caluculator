import Image from 'next/image';

const Divider = () => {
  return (
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
  );
};

export default Divider;
