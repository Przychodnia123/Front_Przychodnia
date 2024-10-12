export const CounterSection = () => {
  return (
    <section className="w-full px-5 py-10 laptop:px-20 desktop:px-40 flex justify-center">
      <div className="w-full flex flex-col laptop:flex-row space-y-5 px-5 laptop:space-y-0 justify-between rounded-md bg-white laptop:px-10 desktop:px-28 py-12 shadow-md">
        <h2 className="font-semibold text-center text-dark-blue text-2xl">
          Ponad{" "}
          <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-visits)] before:content-[counter(num)]">
            <span className="sr-only">1000</span> zrealizowanych wizyt
          </span>
        </h2>
        <h2 className="font-semibold text-center text-dark-blue text-2xl">
          <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-patients)] before:content-[counter(num)]">
            <span className="sr-only">98</span>% zadowolonych pacjentów
          </span>
        </h2>
        <h2 className="font-semibold text-center text-dark-blue text-2xl">
          <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-access)] before:content-[counter(num)]">
            <span className="sr-only">Dostęp do opieki medycznej 24</span>/7
          </span>
        </h2>
      </div>
    </section>
  );
};
