import React from 'react'
import showReel from "../images/ShowReel.svg"
import text from "../images/Text.svg"


export const ShowreelText = () => {
  return (
    <div className='d-flex justify-content-between align-items-center px-4'>
        <div className="showReel">
            <img src={showReel} alt="" />
        </div>
        <div className="text">
            <img src={text} alt="" />
        </div>
    </div>
  )
}
