function Location() {
  return (
    <section id="map" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-amber-600">
            Find Us
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Visit Our Parish
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-text)]">
            We would love to welcome you. Find us using the map below.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl shadow-lg" id="map">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.6804589108874!2d8.324064673494952!3d4.992645639060604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106787eab548fa39%3A0xf04fa14eb216d257!2sSt%20Charles%20Lwanga%20Catholic%20Church!5e0!3m2!1sen!2sng!4v1790956208090!5m2!1sen!2sng"
  width="100%"
  height="450"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="strict-origin-when-cross-origin"
  title="Great Saint Charles Lwanga Catholic Parish location"
></iframe>

<a
  href="https://www.google.com/maps/search/?api=1&query=St+Charles+Lwanga+Catholic+Church"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
>
  Get Directions
</a>
        </div>

      </div>
    </section>
  );
}

export default Location;