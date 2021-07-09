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

.greeting{
  font-size: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between
}
.name{

}
.logout{
  font-size: 13px;
  border:none;
  padding: none;
  background: transparent;
  text-decoration:underline;
  cursor: pointer;
}
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
