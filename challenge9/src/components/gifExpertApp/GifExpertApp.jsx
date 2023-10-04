import {React, useState} from 'react'
import { AddCategory } from '../addCategory/AddCategory'
import {GifGrid} from '../gifGrid/GifGrid'

export const GiftGridExpertApp = () => {
    const [categories, setCategories] = useState(["Cumpleaños"])

    const onAddCategory = (category) => {
        setCategories(list => [...list, category])
    }
    
  return (
    <div>
        <h1>GifExpert</h1>
        <AddCategory onAddCategory={onAddCategory} />
        {
            categories.map(
                (category, key) =>
                {
                    return <GifGrid category={category} key={key}/>
                }
            )
        }
    </div>
  )
}