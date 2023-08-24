import { CardDisplay } from "./CardDisplay";

// This is the All Component where we display all the course in the json data
export function All({ details }) {
  return (
    // All data like image, title, description and etc are displayed in a card which is responsive.
    <section className="py-5">
      <div className="container px-3 px-lg-3 mt-0">
        <div className="row gx-3 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
          {/* Here the details is mapped and displayed only the type of course is clicked */}
          {/* Here CardDisplay component is called for displaying the data */}
          {details.map((item) => {
            return (
              <CardDisplay item={item} />
            )
          })}
        </div>
      </div>
    </section>
  );
}
