import React from "react";
import { Navbar, Container } from "react-bootstrap";
import IconNav from "../assets/image/death.png";
import { useNavigate } from "react-router-dom";

function NavbarPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar variant="dark" className="navClr">
        <Container>
          <Navbar.Brand
            className="d-flex "
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img
              alt=""
              src={IconNav}
              width="40"
              height="40"
              className="d-inline-block align-top img-fluid"
            />{" "}
            <h3 className="textBrand ms-3 mt-1">StarWars</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPage;
