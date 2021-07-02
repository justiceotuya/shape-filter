import React, { FC,useEffect, useState, useCallback } from 'react'
import styled from "styled-components";
import { ReactComponent as Circle } from '../../assets/circle.svg'
import { ReactComponent as Cone } from '../../assets/cone.svg'
import { ReactComponent as Cube } from '../../assets/cube.svg'
import { ReactComponent as Cylinder } from '../../assets/cylinder.svg'
import { ReactComponent as Dodecahedron } from '../../assets/dodecahedron.svg'
import { ReactComponent as Hexagon } from '../../assets/hexagon.svg'
import { ReactComponent as Icosahedron } from '../../assets/icosahedron.svg'
import { ReactComponent as Octahedron } from '../../assets/octahedron.svg'
import { ReactComponent as Pentagon } from '../../assets/pentagon.svg'
import { ReactComponent as Pyramid } from '../../assets/pyramid.svg'
import { ReactComponent as Rectangle } from '../../assets/rectangle.svg'
import { ReactComponent as Sphere } from '../../assets/sphere.svg'
import { ReactComponent as Square } from '../../assets/square.svg'
import { ReactComponent as Tetrahedron } from '../../assets/tetrahedron.svg'
import { ReactComponent as Triangle } from '../../assets/triangle.svg'
interface IColorProps {
  id: string;
  color: string;
  shape: string;
}

interface IShapeButton {
  $shape: string;
  selectedShapes: string[];
}
interface IColorButton {
  $color: string;
  selectedColors: string[];
}

export const StyledColorChooser = styled.button<IColorButton>`
height: 50px;
width: 50px;
background-color: ${props => props.$color && `${props.$color}`};
border-radius: 100%;
cursor: pointer;
  border: ${props => props.selectedColors.includes(props.$color) ? "5px solid #337CFC": "none"};
  box-shadow:${props => props.selectedColors.includes(props.$color) && "2px 5px 16px #337CFC"};
  transition: .2s box-shadow ease-in,.2s border ease-in-out;

`

export const StyledButton = styled.button<IShapeButton>`
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 30px;
  border:1px solid silver;
  background: ${props => props.selectedShapes.includes(props.$shape) ? "#DFE7FB" : "#fff"};
  border-color: ${props => props.selectedShapes.includes(props.$shape) ? "#DFE7FB" : "silver"};
`;
export const StyledHome = styled.main`
padding: 50px;

.shapeList,.filter__color{
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.shapeList svg{
  width: 100px;
  margin: 10px;
}
.filter__color{
  margin: -20px;

}
.filter__color * {
  margin: 20px;
}
.colorContainer{
  margin-top: 40px;
  margin-bottom: 40px;
}
.filter__title{
  margin-bottom: 10px;
  color: blue;
  font-size: 24px;
}
.title{
  margin: 20px 0;
  font-size: 30px;
}
`;



export const CircleIcon = styled(Circle) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const ConeIcon = styled(Cone) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const CubeIcon = styled(Cube) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const CylinderIcon = styled(Cylinder) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const DodecahedronIcon = styled(Dodecahedron) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const HexagonIcon = styled(Hexagon) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const IcosahedronIcon = styled(Icosahedron) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const OctahedronIcon = styled(Octahedron) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const PentagonIcon = styled(Pentagon) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const PyramidIcon = styled(Pyramid) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const RectangleIcon = styled(Rectangle) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const SphereIcon = styled(Sphere) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const SquareIcon = styled(Square) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const TetrahedronIcon = styled(Tetrahedron) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;
export const TriangleIcon = styled(Triangle) <{ $color: string }>`
color: ${props => props.$color && `${props.$color}`};
`;


const handleRenderShape = (color: string, shape: string) => {
  switch (shape) {
    case "circle":
      return <CircleIcon data-testid={`svg-${shape}`} $color={color} />
    case "cone":
      return <ConeIcon data-testid={`svg-${shape}`} $color={color} />
    case "cube":
      return <CubeIcon data-testid={`svg-${shape}`} $color={color} />
    case "cylinder":
      return <CylinderIcon data-testid={`svg-${shape}`} $color={color} />
    case "dodecahedron":
      return <DodecahedronIcon data-testid={`svg-${shape}`} $color={color} />
    case "hexagon":
      return <HexagonIcon data-testid={`svg-${shape}`} $color={color} />
    case "icosahedron":
      return <IcosahedronIcon data-testid={`svg-${shape}`} $color={color} />
    case "octahedron":
      return <OctahedronIcon data-testid={`svg-${shape}`} $color={color} />
    case "pentagon":
      return <PentagonIcon data-testid={`svg-${shape}`} $color={color} />
    case "pyramid":
      return <PyramidIcon data-testid={`svg-${shape}`} $color={color} />
    case "rectangle":
      return <RectangleIcon data-testid={`svg-${shape}`} $color={color} />
    case "sphere":
      return <SphereIcon data-testid={`svg-${shape}`} $color={color} />
    case "square":
      return <SquareIcon data-testid={`svg-${shape}`} $color={color} />
    case "tetrahedron":
      return <TetrahedronIcon data-testid={`svg-${shape}`} $color={color} />
    case "triangle":
      return <TriangleIcon data-testid={`svg-${shape}`} $color={color} />

    default:
      break;
  }
}

interface IHomeProps {
  data: {
    id: string,
    color: string,
    shape:string
  }[]
}

const Home: FC<IHomeProps> = (props: IHomeProps) => {
  const { data } = props;

  const [filteredData, setFilteredData] = useState<IColorProps[]>([])
  const [colors, setColors] = useState<string[]>([])
  const [shapes, setShapes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedShapes, setSelectedShapes] = useState<string[]>([])





  useEffect(() => {
    const handleDisplayShapes = () => {
      setFilteredData([...data])
    }
    handleDisplayShapes()
  }, [])

  useEffect(() => {

 const handleExtractColors =() => {
   let newColors =  data.map(item => {
      return item.color
    })
var uniqueArray = Array.from(new Set(newColors));
    setColors([...uniqueArray])
  }
    handleExtractColors()
  }, [])

  useEffect(() => {

  const handleExtractShapes =() => {
   let newShapes =  data.map(item => {
      return item.shape
    })
var uniqueArray = Array.from(new Set(newShapes));
    setShapes([...uniqueArray])
  }
    handleExtractShapes()
  }, [])

  useEffect(() => {
    if (selectedShapes.length === 0) {
      setSelectedShapes([...shapes])
    }
    if (selectedColors.length === 0) {
      setSelectedColors([...colors])
    }
  }, [colors, shapes, selectedColors, selectedShapes
  ])

  const handleToggleShape = (shape: string) => {
    if (selectedShapes.includes(shape)) {
      let remainingShapes = selectedShapes.filter(item => item !== shape)
      setSelectedShapes(remainingShapes)
    } else {
      setSelectedShapes([...selectedShapes, shape])
    }
  }

  const handleToggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      let remainingColors = selectedColors.filter(item => item !== color)
      setSelectedColors(remainingColors)
    } else {
      setSelectedColors([...selectedColors, color])
    }
  }

  const handleFilterColorsAndShapes = useCallback(() => {
    const filtered = data.filter(item => {
      return selectedColors.includes(item.color) && selectedShapes.includes(item.shape)
    })
    setFilteredData(filtered)
  }, [selectedColors, selectedShapes])

  useEffect(() => {
    handleFilterColorsAndShapes()
  }, [handleFilterColorsAndShapes])

  const handleRenderTitle = () => {
    if(selectedColors.length === colors.length && selectedShapes.length === shapes.length){
      return `All items (${filteredData.length})`
    }else if(selectedColors.length === colors.length && selectedShapes.length === 1){
      return `All ${selectedShapes[0]} items (${filteredData.length})`
    }else if(selectedShapes.length === shapes.length && selectedColors.length === 1){
      return `All ${selectedColors[0]} items (${filteredData.length})`
    }else if((selectedColors.length !== colors.length &&  selectedColors.length > 1) &&( selectedShapes.length === 1 && filteredData.length > 0)){
      return `Multiple ${selectedShapes[0]} items (${filteredData.length})`
    }else if((selectedShapes.length !== shapes.length &&  selectedShapes.length > 1) &&( selectedColors.length === 1 && filteredData.length > 0)){
      return `Multiple ${selectedColors[0]} items (${filteredData.length})`
    }else if(( selectedShapes.length > 1) && ( selectedColors.length > 1) &&( filteredData.length > 0)){
      return `Multiple items (${filteredData.length})`
    }else if((selectedShapes.length === 1) && (selectedColors.length  === 1) &&( filteredData.length > 0)){
      return `${selectedColors} ${selectedShapes} items (${filteredData.length})`
    } else if (filteredData.length === 0) {
       return `no item (${filteredData.length})`
    }
  }

  return (
    <StyledHome>
      <div className="colorContainer">
        <p className="filter__title">
          Shapes
        </p>
        <div className="filter__color">
          {
            shapes.map((shape: string) => <StyledButton $shape={shape} selectedShapes={selectedShapes} key={shape} className="shape" onClick={() => handleToggleShape(shape)}>{shape}</StyledButton>)
          }
        </div>
      </div>

      <div className="colorContainer">
        <p className="filter__title">
          Colors
        </p>
        <div className="filter__color">
          {
            colors.map((color: string) => <StyledColorChooser role="button" data-testid={color} $color={color} selectedColors={selectedColors} key={color} onClick={() => handleToggleColor(color)} />)
          }
        </div>
      </div>



      <h1 className="title">{handleRenderTitle()}</h1>

      <div className="shapeList">
        {
          filteredData.map((item: IColorProps) => {
            const { id, color, shape } = item
            return <div key={id} >{handleRenderShape(color, shape)}</div>
          })
        }
      </div>
    </StyledHome>
  )
}

export default Home
