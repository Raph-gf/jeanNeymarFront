import React from "react";

function BookCard() {
  return (
    <div className="w-80 rounded-lg bg-zinc-900 transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl border-solid border-4 border-black max-h-full overflow-y-auto">
      <a href="#">
        <img
          className="rounded-t-lg h-60 w-96 object-cover"
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-base tracking-tight text-gray-900 dark:text-white">
            Au-delà de la mer Méditerranée
          </h5>
        </a>
        <p className="mb-3 text-base font-normal text-gray-700 dark:text-gray-400">
          Découvrez le dernier livre de l'écrivain Jean Neymar, intitulé
          "Au-delà de la mer Méditerranée". Plus incisif, plus provocateur et
          plus audacieux et surtout plusque jamais, ce nouveau récit captivera
          un large public.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-amber-900 dark:hover:bg-amber-700"
        >
          En savoir plus
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default BookCard;
