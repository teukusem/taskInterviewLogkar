import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { Row, Col, Spinner } from "react-bootstrap";
import { data } from "../component/Dummydata";
import { useNavigate } from "react-router-dom";
import Star from "../assets/image/star.png";
import axios from "axios";

function Home() {
  const title = "Home";
  document.title = "StarWars | " + title;

  const navigate = useNavigate();

  // const fetchData = () => {
  //   return axios
  //     .get("https://swapi.dev/api/planets")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(".." + err);
  //     });
  // };

  // useEffect(() => () => fetchData());

  return (
    <div className="App">
      <img src={Star} height={100} className="mb-3" />

      <Row>
        {data.map((item, index) => {
          return (
            <Col>
              <Card
                image={item.image}
                text={item.text}
                onClick={() => navigate(item.path)}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Home;
