import React from 'react';
import {
  render,
  screen
} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Home from '../Home';
import FAKE_JSON from './fixtures/data.json'

describe('When Home Page loads', () => {
  it('Users can see all the selected shapes', () => {
    render(<Home data={FAKE_JSON}/>);
  const titleElem = screen.getByText(/All items/i)
    expect(titleElem).toBeInTheDocument()
    expect(titleElem).toHaveTextContent(FAKE_JSON.length)
  })

  it('Users can see all shapes and color filters', () => {
    render(<Home data={FAKE_JSON} />);
    //test the shape filter
    expect(screen.getByText("sphere")).toBeInTheDocument()
    expect(screen.getByText("square")).toBeInTheDocument()
    expect(screen.getByText("triangle")).toBeInTheDocument()
    expect(screen.getByText("circle")).toBeInTheDocument()

    //test the color filter
     expect(screen.getByTestId("blue")).toHaveStyle("background-image: blue")
     expect(screen.getByTestId("fuchsia")).toHaveStyle("background-image: fuchsia")
     expect(screen.getByTestId("navy")).toHaveStyle("background-image: navy")
    expect(screen.getByTestId("teal")).toHaveStyle("background-image: teal")

    let blueSphereElem = screen.getByTestId("svg-sphere")
    let fuchsiaSquareElem = screen.getByTestId("svg-square")
    let navyTriangleElem = screen.getByTestId("svg-triangle")
    let tealCircleElem = screen.getByTestId("svg-circle")

 expect(blueSphereElem).toBeInTheDocument()
 expect(blueSphereElem).toHaveStyle("color: blue")

 expect(fuchsiaSquareElem).toBeInTheDocument()
 expect(fuchsiaSquareElem).toHaveStyle("color: fuchsia")

 expect(navyTriangleElem).toBeInTheDocument()
 expect(navyTriangleElem).toHaveStyle("color: navy")

 expect(tealCircleElem).toBeInTheDocument()
 expect(tealCircleElem).toHaveStyle("color: teal")
  })

  it("User see multiple items when one shape is clicked", () => {
    render(<Home data={FAKE_JSON} />);
    let sphereButton = screen.getByText("sphere")

    //before select
    expect(sphereButton).toHaveStyle("background:#DFE7FB")
    //select one item
    userEvent.click(screen.getByText("sphere"))
//after select
     expect(sphereButton).toHaveStyle("background:#fff")

    expect(screen.getByText(/items/i)).toHaveTextContent("3")
    expect(screen.getByText(/Multiple items/i)).toBeInTheDocument()
  })


  it("User see multiple items when one color is clicked", async () => {
    render(<Home data={FAKE_JSON} />);
    let blueButton = screen.getByTestId("blue")
expect(blueButton).toHaveStyle("border: 5px solid #337cfc;")

    //select one item
    userEvent.click(blueButton)
//after select
     expect(blueButton).toHaveStyle("border:none")

    expect(screen.getByText(/items/i)).toHaveTextContent("3")
    expect(screen.getByText(/Multiple items/i)).toBeInTheDocument()
  })

  it("User selects only one color and all shapes", async () => {
    render(<Home data={FAKE_JSON} />);
let blueColorButton =screen.getByTestId("blue")
let fuchsiaColorButton =screen.getByTestId("fuchsia")
let navyColorButton =screen.getByTestId("navy")
let tealColorButton =screen.getByTestId("teal")


    //before select
    expect(blueColorButton).toHaveStyle("border: 5px solid #337cfc;")
    expect(fuchsiaColorButton).toHaveStyle("border: 5px solid #337cfc;")
    expect(navyColorButton).toHaveStyle("border: 5px solid #337cfc;")
    expect(tealColorButton).toHaveStyle("border: 5px solid #337cfc;")

    //select all but one item
    userEvent.click(blueColorButton)
    userEvent.click(fuchsiaColorButton)
    userEvent.click(navyColorButton)

    //after select
     expect(blueColorButton).toHaveStyle("border:none")
     expect(fuchsiaColorButton).toHaveStyle("border:none")
     expect(navyColorButton).toHaveStyle("border:none")
    expect(tealColorButton).toHaveStyle("border: 5px solid #337cfc;")

    expect(screen.getByText(/items/i)).toHaveTextContent("1")
    expect(screen.getByText(/All teal items/i)).toBeInTheDocument()
  })

    it("User selects only one color and one shape", async () => {
    render(<Home data={FAKE_JSON} />);
let blueColorButton =screen.getByTestId("blue")
let fuchsiaColorButton =screen.getByTestId("fuchsia")
let navyColorButton =screen.getByTestId("navy")
let tealColorButton =screen.getByTestId("teal")

      let sphereButton =screen.getByText("sphere")
let squareButton =screen.getByText("square")
let triangleButton =screen.getByText("triangle")
let circleButton =screen.getByText("circle")


    //before select
    expect(blueColorButton).toHaveStyle("border: 5px solid #337cfc;")
    expect(fuchsiaColorButton).toHaveStyle("border: 5px solid #337cfc;")
    expect(navyColorButton).toHaveStyle("border: 5px solid #337cfc;")
      expect(tealColorButton).toHaveStyle("border: 5px solid #337cfc;")
          expect(sphereButton).toHaveStyle("background:#DFE7FB")
    expect(squareButton).toHaveStyle("background:#DFE7FB")
    expect(triangleButton).toHaveStyle("background:#DFE7FB")
    expect(circleButton).toHaveStyle("background:#DFE7FB")

    //select all but one shape and one color
    userEvent.click(blueColorButton)
    userEvent.click(fuchsiaColorButton)
      userEvent.click(navyColorButton)
          userEvent.click(sphereButton)
    userEvent.click(squareButton)
    userEvent.click(triangleButton)

    //after select
     expect(blueColorButton).toHaveStyle("border:none")
     expect(fuchsiaColorButton).toHaveStyle("border:none")
     expect(navyColorButton).toHaveStyle("border:none")
    expect(tealColorButton).toHaveStyle("border: 5px solid #337cfc;")
expect(sphereButton).toHaveStyle("background:#fff")
     expect(squareButton).toHaveStyle("background:#fff")
     expect(triangleButton).toHaveStyle("background:#fff")
    expect(circleButton).toHaveStyle("background:#DFE7FB")

    expect(screen.getByText(/items/i)).toHaveTextContent("1")
    expect(screen.getByText(/teal circle items/i)).toBeInTheDocument()
    })

   it("User unselects all colors", async () => {
    render(<Home data={FAKE_JSON} />);
let blueColorButton =screen.getByTestId("blue")
let fuchsiaColorButton =screen.getByTestId("fuchsia")
let navyColorButton =screen.getByTestId("navy")
let tealColorButton =screen.getByTestId("teal")


    //before select
    expect(blueColorButton).toHaveStyle("border: 5px solid #337cfc;")
    expect(fuchsiaColorButton).toHaveStyle("border: 5px solid #337cfc;")
    expect(navyColorButton).toHaveStyle("border: 5px solid #337cfc;")
    expect(tealColorButton).toHaveStyle("border: 5px solid #337cfc;")

    //select all colors but the last one
     userEvent.click(blueColorButton)
     expect(blueColorButton).toHaveStyle("border:none")

     userEvent.click(fuchsiaColorButton)
     expect(fuchsiaColorButton).toHaveStyle("border:none")

    userEvent.click(navyColorButton)
     expect(navyColorButton).toHaveStyle("border:none")

     userEvent.click(tealColorButton)

     //resets button backgrounds
    expect(blueColorButton).toHaveStyle("border: 5px solid #337cfc;")
    expect(fuchsiaColorButton).toHaveStyle("border: 5px solid #337cfc;")
    expect(navyColorButton).toHaveStyle("border: 5px solid #337cfc;")
    expect(tealColorButton).toHaveStyle("border: 5px solid #337cfc;")
   })


  it("User unselects all shapes", async () => {
    render(<Home data={FAKE_JSON} />);
let sphereButton =screen.getByText("sphere")
let squareButton =screen.getByText("square")
let triangleButton =screen.getByText("triangle")
let circleButton =screen.getByText("circle")


    //before select
    expect(sphereButton).toHaveStyle("background:#DFE7FB")
    expect(squareButton).toHaveStyle("background:#DFE7FB")
    expect(triangleButton).toHaveStyle("background:#DFE7FB")
    expect(circleButton).toHaveStyle("background:#DFE7FB")


    //select all but one item
    userEvent.click(sphereButton)
         expect(sphereButton).toHaveStyle("background:#fff")
    userEvent.click(squareButton)
         expect(squareButton).toHaveStyle("background:#fff")
    userEvent.click(triangleButton)
    expect(triangleButton).toHaveStyle("background:#fff")

    //click the last shape
    userEvent.click(circleButton)

    //check that the button colors reset
       expect(sphereButton).toHaveStyle("background:#DFE7FB")
    expect(squareButton).toHaveStyle("background:#DFE7FB")
    expect(triangleButton).toHaveStyle("background:#DFE7FB")
    expect(circleButton).toHaveStyle("background:#DFE7FB")
    //after select


  })


})
