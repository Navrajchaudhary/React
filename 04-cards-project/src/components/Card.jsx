
const Card = (props) => {
  return (
     <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <i className="fa-regular fa-bookmark"></i></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className="buttons">
            <button>{props.tag1}</button>
            <button>{props.tag2}</button>
          </div>
        </div>

        <div className="bottom">
          <div className="price-status">
            <div className="price">
              <h3>{props.pay}</h3>
              <span>{props.location}</span>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
  )
}

export default Card
