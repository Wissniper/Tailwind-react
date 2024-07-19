import React from "react";

function NotFound() {
    return (
      <body class="bg-black h-screen w-screen">
        <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-50 overflow-x-hidden overflow-y-hidden">
          <h1 class="text-white font-bold text-5xl">404</h1>
          <h2 class=" text-white"> This page could not be found.</h2>
          <p>The page you are looking for does not exist.</p>
        </div>
      </body>
    );
  }

export default NotFound;