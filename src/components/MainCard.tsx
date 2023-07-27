import InputField from './InputField';
import Divider from './Divider';
import Results from './Results';

const MainCard = () => {
  return (
    <main className="bg-white py-12 px-6 md:p-[55px] w-[90.6%] lg:w-fit flex gap-[30px] flex-col rounded-3xl rounded-ee-[200px]">
      <section className="flex gap-[17px] md:w-fit">
        <InputField label="day" placeholder="DD" />
        <InputField label="month" placeholder="MM" />
        <InputField label="year" placeholder="YYYY" />
      </section>
      <Divider />
      <Results />
    </main>
  );
};

export default MainCard;
