// This is the CardDisplay Component where all the passed details are displayed
export function CardDisplay({ item }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="image" src={item.image} alt="..."></img>
        <div className="card-body">
          <p className="course-title">{item.title}</p>
          <p className="course-description">{item.description}</p>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <hr className="card-hr"></hr>
          <span className="span-div">
            {item.date} &#x2022; {item.comments}
          </span>
        </div>
      </div>
    </div>
  );
}
