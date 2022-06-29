import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Detailpeople() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  console.log(id);

  let { data: detailPeople = [], isLoading } = useQuery(
    ["peopleDetailCache"],
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
          <h3 className="textBrand mt-4">Detail People :</h3>
          <div>
            <h4 className="mt-4">{`Name : ${detailPeople.name} `}</h4>
            <h4 className="mt-4">{`Eye Color   : ${detailPeople.eye_color}`}</h4>
            <h4 className="mt-4">{`Gender : ${detailPeople.gender}`} </h4>
            <h4 className="mt-4">{`Height : ${detailPeople.height} Cm `}</h4>
            <h4 className="mt-4">{`Skin Color : ${detailPeople.skin_color} `}</h4>
            <h4 className="mt-4">{`Mass : ${detailPeople.mass} Kg`}</h4>
            <h4 className="mt-4">{`Hair Color : ${detailPeople.hair_color}`}</h4>
          </div>
          ;
        </Container>
      )}
    </div>
  );
}

export default Detailpeople;
