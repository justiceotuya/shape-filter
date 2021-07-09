import React, { FC,useEffect,useContext, useState, useCallback } from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/auth';
import data from '../../data/data.json'
import {
  CircleIcon,
ConeIcon,
CubeIcon,
CylinderIcon,
DodecahedronIcon,
HexagonIcon,
IcosahedronIcon,
OctahedronIcon,
PentagonIcon,
PyramidIcon,
RectangleIcon,
SphereIcon,
SquareIcon,
TetrahedronIcon,
TriangleIcon,
StyledColorChooser,
StyledButton,
StyledHome,
} from './Home.style'


interface IColorProps {
  id: string;
  color: string;
  shape: string;
}





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

const Home: FC<IHomeProps> = () => {

  const [filteredData, setFilteredData] = useState<IColorProps[]>([])
  const [colors, setColors] = useState<string[]>([])
  const [shapes, setShapes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedShapes, setSelectedShapes] = useState<string[]>([])

  const {logout, user} = useContext(AuthContext)
  const history = useHistory();



  useEffect(() => {
    console.log(user)
    const handleDisplayShapes = () => {
      if (Object.values(user).length > 0) {
        setFilteredData([...data])
      } else {
        history.push('/login')
      }
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

  const handleLogout = () => {
    history.push('/login')
    logout()
  }

  return (
    <StyledHome>
      <div className="greeting">
        <p>Hello <span className="name">{user?.name}</span></p>
      <button className="logout" onClick={handleLogout}>Logout</button>
      </div>
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
