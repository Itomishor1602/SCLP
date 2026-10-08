import pastor1 from "../assets/pptwo.jpg";
import pastor2 from "../assets/beks.jpg";
import pastor3 from "../assets/app.webp";

const pastors = [
  {
    name: "His Lordship, Most Rev. Christopher Naseri-Mutiti Naseri.",
    role: "Auxillary Bishop of Calabar Archdiocese and Parish Priest ",
    image: pastor1,
  },
  {
    name: "Very Rev. Fr. Dr. Emmanuel Bekomson",
    role: "Assistant Parish Priest I",
    image: pastor2,
  },
  {
    name: "Rev. Fr. Anthony Ekpo",
    role: "Assistant Parish Priest II",
    image: pastor3,
  },
];

function Pastors() {
  return (
    <section className="px-6 py-20" id="pastors">
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-amber-600">
            Our Pastors
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Meet Our Pastors
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            Meet the priests who guide our parish community in faith,
            worship, and service.
          </p>
        </div>

        {/* Pastor cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {pastors.map((pastor) => (
            <article
              key={pastor.name}
              className="overflow-hidden rounded-2xl `bg-[var(--card-bg)]` shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Pastor image */}
              <img
                src={pastor.image}
                alt={pastor.name}
                className="h-80 w-full object-cover object-top"
              />

              {/* Pastor information */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">
                  {pastor.name}
                </h3>

                <p className="mt-2 font-medium text-amber-600">
                  {pastor.role}
                </p>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Pastors;