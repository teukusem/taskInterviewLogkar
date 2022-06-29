import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Detailship() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  console.log(id);

  let { data: detailShip = [], isLoading } = useQuery(
    ["shipDetailCache"],
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
          <h3 className="textBrand mt-4">Detail Ship :</h3>
          <div>
            <h4 className="mt-4">{`Name : ${detailShip.name} `}</h4>
            <h4 className="mt-4">{`Model : ${detailShip.model}`}</h4>
            <h4 className="mt-4">{`Length : ${detailShip.length} M`} </h4>
            <h4 className="mt-4">{`Capacity Crew : ${detailShip.crew} `}</h4>
            <h4 className="mt-4">{`Class : ${detailShip.starship_class} `}</h4>
            <h4 className="mt-4">{`Max Atmosfer Speed : ${detailShip.max_atmosphering_speed}`}</h4>
            <h4 className="mt-4">{`manufacturer : ${detailShip.manufacturer}`}</h4>
          </div>
          ;
        </Container>
      )}
    </div>
  );
}

export default Detailship;
