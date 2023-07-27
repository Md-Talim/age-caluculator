interface Props {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: Props) => {
  return (
    <label className="flex flex-col max-w-[30%] md:w-40 md:h-[100px] gap-1 md:gap-2">
      <span className="max-w-fit uppercase text-smokeGray text-sm font-bold tracking-[3.36px]">
        {label}
      </span>
      <input
        type="number"
        className="text-smokeGray md:w-40 text-[22px] md:text-[32px] font-bold leading-8 md:leading-9 tracking-[0.64px] md:px-6 px-[14px] md:py-4 py-[11px] border border-lightGray rounded-lg focus:outline-primary"
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputField;
