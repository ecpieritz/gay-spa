import React from "react";
import Featurebox from './Featurebox';
import iconCardioExercise from '../images/icons/icon__cardio-exercise.svg';
import iconFlexMuscle from '../images/icons/icon__flex-your-muscle.svg';
import iconSpecificMuscle from '../images/icons/icon__specific-muscle.svg';
import iconWeightLifting from '../images/icons/icon__weight-lifting.svg';

function Feature() {

  return (
    <section id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <Featurebox image={iconCardioExercise} title="Cardio Exercise" />
        <Featurebox image={iconFlexMuscle} title="Flex Your Muscle" />
        <Featurebox image={iconSpecificMuscle} title="Specific Muscle" />
        <Featurebox image={iconWeightLifting} title="Weight Lifting" />
      </div>
    </section>
  )
}

export default Feature;