import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Detailplanet() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  console.log(id);

  let { data: detailPlanet = [], isLoading } = useQuery(
    ["planetDetailCache"],
    async () => {
      const response = await axios.get(id);
      console.log(response.data);
      return response.data;
    }
  );

  return (
    <div>
      {isLoading ? (
        <div className="App">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <Container className="text-light">
          <h3 className="textBrand mt-4">Detail Planet :</h3>
          <div>
            <h4 className="mt-4">{`Name : ${detailPlanet.name} `}</h4>
            <h4 className="mt-4">{`Climate : ${detailPlanet.climate}`}</h4>
            <h4 className="mt-4">{`Diameter : ${detailPlanet.diameter}`} </h4>
            <h4 className="mt-4">{`Gravity : ${detailPlanet.gravity} `}</h4>
            <h4 className="mt-4">{`Periode Orbit : ${detailPlanet.orbital_period} `}</h4>
            <h4 className="mt-4">{`Surface Water : ${detailPlanet.surface_water}`}</h4>
            <h4 className="mt-4">{`Terrain : ${detailPlanet.terrain}`}</h4>
          </div>
          ;
        </Container>
      )}
    </div>
  );
}

export default Detailplanet;
