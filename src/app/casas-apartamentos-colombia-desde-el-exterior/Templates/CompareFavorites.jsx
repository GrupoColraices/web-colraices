import React from 'react'
import ItemFavorite from '../molecules/ItemFavorite'

export const CompareFavorites = ({ selectedItems }) => {
  console.log(selectedItems)
  return (
    <section>
      {selectedItems?.map(item => (
        <ItemFavorite key={item.id} itemProperty={item} />
      ))}
    </section>

  )
}
