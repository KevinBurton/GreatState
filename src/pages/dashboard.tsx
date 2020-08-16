import React from "react";

import Evolution from "../assets/img/progression-lose-weight.png";
import Excercise from "../assets/img/exercise-words.jpg";
import Bike from "../assets/img/conditioning-bike.jpg";
import Sharp from "../assets/img/weight-lifting-women-back.jpg";
import Load from "../assets/img/weight-lifting-load.jpg";
import Start from "../assets/img/weight-lifting-start.jpg";

import CarouselBanner from "../components/Banner/CarouselBanner"
import { CarouselItem } from '../components/Banner/CarouselItem';

const items: CarouselItem[] = [
  {
      Name: "Lose Weight",
      Caption: "Lose Weight",
      contentPosition: "left",
      Items: [
          {
              Name: "Evolution",
              Image: Evolution
          },
          {
              Name: "Did you do it?",
              Image: Excercise
          }
      ]
  },
  {
      Name: "Conditioning",
      Caption: "Conditioning",
      contentPosition: "middle",
      Items: [
          {
              Name: "Bike",
              Image: Bike
          },
          {
              Name: "Sharp",
              Image: Sharp
          }
      ]
  },
  {
      Name: "Strength",
      Caption: "Lift weights",
      contentPosition: "right",
      Items: [
          {
              Name: "Ready",
              Image: Load
          },
          {
              Name: "Set",
              Image: Start
          }
      ]
  }
]

 
const Dashboard = () => {
  return (<CarouselBanner items={items}/>);
}

export default Dashboard;