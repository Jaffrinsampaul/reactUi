import React, { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

const TopLoading = ({isCompleted }) => {
  const loadingRef = useRef(null);
  useEffect(()=>{
    loadingRef.current.continuousStart()
    setTimeout(()=>{
        loadingRef.current.complete()
        isCompleted()
    },3000)
  },[])
  return <LoadingBar color="#f11946" ref ={loadingRef}/>;
};

export default TopLoading;
