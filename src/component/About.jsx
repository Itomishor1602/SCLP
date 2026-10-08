import about from "../assets/about.jpg";

function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Image */}
        <div>
          <img
            src={about}
            alt="Great Saint Charles Lwanga Catholic Parish"
            className="`h-[400px]` w-full rounded-2xl"
          />
        </div>

        {/* Content */}
        <div>
          <p className="font-semibold uppercase tracking-wider text-amber-600">
            About Us
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            A Place of Faith, Community and Service
          </h2>

          <p className="mt-6 leading-7 text-gray-600 dark:text-gray-300">
            Great Saint Charles Lwanga Catholic Parish is a community
            of catholic faithful committed to growing in faith, worshipping
            God, and serving one another.
          </p>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
            We welcome individuals and families to join us in
            celebrating the Eucharist, deepening their relationship
            with Christ, and participating in the life of the Church.
          </p>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
            The parish is named after Saint Charles Lwanga, one of the Ugandan Martyrs who was burned to death in 1886 for his faith and defense of Christian youth. He was later canonized as the patron saint of youth and Catholic action in Africa.
          </p>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
            SCLP was established 50 years ago to serve the growing Catholic community in the Essien Town, Calabar, Operating under the Metropolitan Archdiocese of Calabar.
          </p>

          {/* <a
            href="#contact"
            className="mt-6 inline-block rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white hover:bg-amber-700"
          >
            Learn More
          </a> */}
        </div>

      </div>
    </section>
  );
}

export default About;