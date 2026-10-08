import heroImage from "../assets/hero.webp";

function Hero() {
  return (
    <>
      {/* Hero section */}
      <section className="relative h-[70vh] `min-h-[400px]` w-full overflow-hidden shadow-lg">
        {/* Hero image */}
        <img
          src={heroImage}
          alt="Church worship"
          className="h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text on image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
            Welcome to Great Saint Charles Lwanga
            <br className="hidden sm:block" />
            Catholic Parish
          </h1>

          <p className="mt-4 max-w-2xl text-base md:text-xl">
            A place called home.
          </p>

          <a
            href="#about"
            className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Mass times section */}
      <section className="`bg-[var(--section-bg)]` px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">

          {/* Section heading */}
          <h2 className="text-2xl font-bold md:text-3xl">
            Worship with Us
          </h2>

          <p className="mt-3 `text-[var(--muted-text)]` md:text-lg">
            Join our parish community for Holy Mass and other spiritual
            activities.
          </p>

          {/* Mass and activities */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Sunday Mass */}
            <div className="rounded-2xl `bg-[var(--card-bg)]` p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold">
                Sunday Mass
              </h3>

              <div className="mt-4 space-y-2 `text-[var(--muted-text)]`">
                <p>6:30 AM</p>
                <p>9:30 AM</p>
                <p>6:00 PM</p>
              </div>
            </div>

            {/* Weekday Mass */}
            <div className="rounded-2xl `bg-[var(--card-bg)]` p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold">
                Weekday Mass
              </h3>

              <p className="mt-4 `text-[var(--muted-text)]`">
                Every weekday
              </p>

              <p className="mt-2 font-semibold">
                6:15 AM
              </p>
            </div>

            {/* Saturday Mass */}
            <div className="rounded-2xl `bg-[var(--card-bg)]` p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold">
                Saturday Mass
              </h3>

              <p className="mt-4 `text-[var(--muted-text)]`">
                Every Saturday morning
              </p>

              <p className="mt-2">
                After Confession
              </p>
            </div>

            {/* Confession */}
            <div className="rounded-2xl `bg-[var(--card-bg)]` p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold">
                Confession
              </h3>

              <p className="mt-4 `text-[var(--muted-text)]`">
                Every Saturday
              </p>

              <p className="mt-2 font-semibold">
                6:00 AM
              </p>
            </div>

            {/* Benediction */}
            <div className="rounded-2xl `bg-[var(--card-bg)]` p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold">
                Benediction
              </h3>

              <p className="mt-4 `text-[var(--muted-text)]`">
                Every Saturday
              </p>

              <p className="mt-2">
                After Confession
              </p>
            </div>

            {/* Office Hours */}
            <div className="rounded-2xl `bg-[var(--card-bg)]` p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold">
                Office Hours
              </h3>

              <p className="mt-4 `text-[var(--muted-text)]`">
                Monday to Friday
              </p>

              <p className="mt-2">
                9AM to 2PM
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

