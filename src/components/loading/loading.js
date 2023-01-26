import React,{memo} from 'react'
import {LoadingWrapper} from "./style";


const Loading = memo(function () {


  return (
    <LoadingWrapper>

      <section className="loader">

        <div style={{i:0}} className="slider">
        </div>
        <div style={{i:1}} className="slider">
        </div>
        <div style={{i:2}} className="slider">
        </div>
        <div style={{i:3}} className="slider">
        </div>
        <div style={{i:4}} className="slider">
        </div>
      </section>


    </LoadingWrapper>
  )
})

export default Loading