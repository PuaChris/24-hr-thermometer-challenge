import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Controller from '../controller/controller';
import Rocket from '../entities/rocket.entity';
import './styles/RocketDetails.css'

const RocketDetails = () => {
  // Retrieve flight number from URL param
  let { flightNum }: { flightNum: string } = useParams();
  const controller = new Controller();

  const [rocketDetails, setRocketDetails] = useState<Rocket>();

  // Get rocket details from flight number
  const initRocketDetails = async (flightNum: number) => {
    const newRocketDetails: Rocket = await controller.getRocketDetails(flightNum);
    setRocketDetails(newRocketDetails);
  }

  useEffect(() => {
    initRocketDetails(Number(flightNum));
  }, []);

  return (
    <div className="rocket-details">
      <p className="title">Rocket Name: {rocketDetails?.getName()}</p>
      <p className="description"> Rocket Type: {rocketDetails?.getType()}</p>
      <p className="description"> Reused: {rocketDetails?.getIsReused()}</p>
    </div>
  )
}

export default RocketDetails;