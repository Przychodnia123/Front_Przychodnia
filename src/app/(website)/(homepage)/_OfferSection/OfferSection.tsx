import services from '@/lib/data/services.json'
import { Title } from '@/utilities/Title'
import Image from 'next/image'

export const OfferSection = () => {
  return (
    <section className='space-y-14 px-5 py-20 laptop:space-y-28 laptop:px-20 laptop:py-24 desktop:px-40'>
      <Title textAlign='text-center' size='text-5xl'>
        W czym możemy pomóc
      </Title>

      <div className='grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-3 desktop:gap-24'>
        {services.map((service) => (
          <div
            key={service.id}
            className='flex flex-col gap-y-6 rounded-md bg-white px-14 py-10 shadow-md duration-200 hover:-translate-y-3 hover:shadow-xl laptop:px-7'
          >
            <Image
              className='self-center'
              src={service.image}
              alt='service image'
              width={152}
              height={152}
            />
            <div className='space-y-3'>
              <Title textAlign='text-left' size='text-2xl'>
                {service.title}
              </Title>
              <svg
                width='90'
                height='3'
                viewBox='0 0 90 3'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line
                  y1='1.5'
                  x2='89.0505'
                  y2='1.5'
                  stroke='#DED4E3'
                  strokeWidth='3'
                />
              </svg>
              <p className='text-md'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
