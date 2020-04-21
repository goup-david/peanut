import React from "react"
import Img from "gatsby-image"
import Moment from "react-moment"

const PolaroidItem = ({ data }) => {
  const randomRotation = Math.floor(Math.random() * (6 - -6 + 1) + -6)
  const sty = { transform: `rotate(${randomRotation}deg)` }

  return (
    <div className="polaroid one" style={sty}>
      <div className="polaroid__content">
        <div className="polaroid__content-image">
          <Img fluid={data.node.fluid} />
        </div>
        <div className="polaroid__content-caption">
          {data.node.fields && (
            <Moment
              duration="2019-04-24T23:59-0000"
              date={data.node.fields.exif.meta.dateTaken}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PolaroidItem
