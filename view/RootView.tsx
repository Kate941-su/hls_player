import React, { useEffect } from 'react';
import CounterView from "./CounterView";


const RootView = () => {

  useEffect(() => {
    console.debug("Build up in this timing")
    return () => {
      console.debug("Cleanup on component")
    }
  }, []);

  return (
    <CounterView></CounterView>
  )
}

export default RootView