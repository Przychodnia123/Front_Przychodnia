import { Carousel } from '@homepage/_ReviewsSection/Carousel'
import reviews from '@lib/data/reviews.json'
import { Title } from '@utilities/Title'

export const ReviewsSection = () => {
  return (
    <section className='relative mb-24 space-y-14 overflow-x-hidden laptop:space-y-28'>
      <div className='space-y-5'>
        <Title textAlign='text-center' size='text-5xl'>
          Opinie naszych użytkowników
        </Title>
        <p className='mb-28 text-center'>
          Odkryj, co nasi pacjenci mówią o naszym podejściu i dlaczego warto nam
          zaufać. Dołącz do grona zadowolonych użytkowników i ciesz się
          kompleksową opieką zdrowotną na jaką zasługujesz.
        </p>
      </div>
      <Carousel reviews={reviews} />
    </section>
  )
}
