import React from "react";

function MapComponent() {
  return (
    <div class="container flex items-center justify-center">
      <div>
        <h2 class="text-gray-700 text-4xl font-bold m-12 text-center">
          Map of Hotel Beveren
        </h2>
        <iframe
          class="mx-auto place-self-center rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40001.567797119875!2d4.1534826!3d51.1988461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38b6fa33f451d%3A0x94c95de75284ab34!2sVan%20der%20Valk%20Hotel%20Beveren!5e0!3m2!1sen!2sbe!4v1717059266176!5m2!1sen!2sbe"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
export default MapComponent;
