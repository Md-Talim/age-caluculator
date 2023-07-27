import InputField from '@/components/InputField';

export default function Home() {
  return (
    <main className="bg-white py-12 px-6 w-[90.6%]">
      <section className="flex gap-[17px] justify-between items-center">
        <InputField label="day" placeholder="DD" />
        <InputField label="month" placeholder="MM" />
        <InputField label="year" placeholder="YYYY" />
      </section>
      <section>Divider</section>
      <section>Result</section>
    </main>
  );
}
