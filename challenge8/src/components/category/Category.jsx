import {React, useState} from 'react'

export const Category = () => {
    const [categories, setCategories] = useState(["Zapatos","Botas"])
    const [category, setCategory] = useState("")

    const onSetCategory = (event) => {
        setCategory(event.target.value)
    };

    const onAddCategory = () => {
        setCategories(list => [...list, category])
        setCategory("")
    }
    
  return (
    <div>
        <h1>GifExpert</h1>
        <input type="text" value={category}
            onChange={(event) => onSetCategory(event)}/>
        <button onClick={() => onAddCategory()}>Añadir categoria</button>

        <ol>
            {
                categories.map(
                    (category,key) =>
                    {
                        return <li key={key}>{category}</li>
                    }
                )
            }
        </ol>
    </div>
  )
}
