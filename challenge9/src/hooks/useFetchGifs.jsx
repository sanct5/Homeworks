import {useEffect, useState } from 'react'
import { getGifts } from '../helpers/GetGifts';

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);

    const getImages = async() => {
        const images = await getGifts(category)
        setimages(images)
    }

    useEffect(() => {
        getImages()
    }, [])
    
  return{
    images: images,
    isoading: false
  }
}
