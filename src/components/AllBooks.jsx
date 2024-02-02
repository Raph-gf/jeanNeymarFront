import React from "react";
import BookCard from "./bookCard";

function AllBooks() {
  return (
    <div className="wrapper h-full p-5 text-black bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg w-screen mb-10 ">
      <div className="artwork title mb-14 mt-10 ml-4 text-4xl font-extrabold ">
        <h1>ArtWork 📚</h1>
      </div>
      <div className="bookgrid grid  grid-cols-3 gap-6">
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
      <div className="textdescription  mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quam
        aliquam veritatis est odit molestias eos sunt quos, dolorem, dolore a
        esse facere? Nemo incidunt itaque totam numquam adipisci qui. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Ex animi porro magni
        maiores temporibus ut error laborum eveniet fuga, perspiciatis dolore,
        quae, pariatur maxime iure ipsa eaque impedit numquam eos? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Suscipit, labore ad ipsa
        totam, ea quaerat voluptatem dolorum atque necessitatibus et corrupti
        placeat, magni dolore quos sint odio sed nihil officia.
      </div>
    </div>
  );
}

export default AllBooks;
