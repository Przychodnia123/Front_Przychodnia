export const CounterSection = () => {
    return (
        <section className='flex w-full justify-center px-5 py-10 laptop:px-20 desktop:px-40'>
            <div className='flex w-full flex-col justify-between space-y-5 rounded-md bg-white px-5 py-12 shadow-md laptop:flex-row laptop:space-y-0 laptop:px-10 desktop:px-28'>
                <h2 className='text-center text-2xl font-semibold text-dark-blue'>
                    Ponad{' '}
                    <span className='animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-visits)] before:content-[counter(num)]'>
                        <span className='sr-only'>1000</span> zrealizowanych
                        wizyt
                    </span>
                </h2>
                <h2 className='text-center text-2xl font-semibold text-dark-blue'>
                    <span className='animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-patients)] before:content-[counter(num)]'>
                        <span className='sr-only'>98</span>% zadowolonych
                        pacjentów
                    </span>
                </h2>
                <h2 className='text-center text-2xl font-semibold text-dark-blue'>
                    <span className='animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-access)] before:content-[counter(num)]'>
                        <span className='sr-only'>
                            Dostęp do opieki medycznej 24
                        </span>
                        /7
                    </span>
                </h2>
            </div>
        </section>
    )
}
