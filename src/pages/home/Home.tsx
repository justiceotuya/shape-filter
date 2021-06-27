import React, { useEffect, useState,useCallback } from 'react'
import data from '../../data/data.json'
interface IColorProps {
  id: string;
  color: string;
  shape: string;
}

const Home = () => {

  const [colors, setColors] = useState<string[]>([])
  const [shapes, setShapes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedShapes, setSelectedShapes] = useState<string[]>([])


   const handleExtractColors = useCallback(() => {
    data.map(item => {
      if (!colors.includes(item.color)) {
        setColors([...colors, item.color])
      }
      return item
    })
    console.log(colors)
  },
     [colors],
   )

   const handleExtractShapes = useCallback(() => {
    data.map(item => {
      if (!shapes.includes(item.shape)) {
        setShapes([...shapes, item.shape])
      }
      return item
    })
    console.log(shapes)
  },
     [shapes],
   )

  useEffect(() => {
    handleExtractColors()
    handleExtractShapes()
  }, [handleExtractColors,handleExtractShapes])


  return (
    <div>
      <p>I am the Home</p>
    </div>
  )
}

export default Home
