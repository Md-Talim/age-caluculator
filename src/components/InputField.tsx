const InputField = () => {
  return (
    <label className="flex flex-col gap-2">
      <span className="uppercase text-smokeGray text-sm font-bold tracking-[3.36px]">
        day
      </span>
      <input
        type="number"
        className="text-smokeGray text-[32px] font-bold leading-9 tracking-[0.64px] px-6 py-4 border border-lightGray rounded-lg"
        placeholder="DD"
      />
    </label>
  );
};

export default InputField;
