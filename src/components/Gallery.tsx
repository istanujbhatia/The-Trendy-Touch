import { useMemo, useState } from 'react'
import { galleryItems } from '../data'

const filters = ['All', 'Birthdays', 'Anniversaries', 'Weddings', 'Custom'] as const

export function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const items = useMemo(
    () =>
      filter === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  )

  return (
    <section id="gallery" className="section section--blush">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Inspiration</p>
          <h2>Inspiration Gallery</h2>
        </header>
        <div className="filters" role="tablist" aria-label="Gallery filters">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className={filter === item ? 'is-active' : ''}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="masonry">
          {items.map((item) => (
            <figure key={item.src + item.alt} className="masonry__item">
              <img src={item.src} alt={item.alt} />
            </figure>
          ))}
        </div>
        {items.length === 0 ? (
          <p className="empty">No pieces in this category yet. Try another filter.</p>
        ) : null}
      </div>
    </section>
  )
}
