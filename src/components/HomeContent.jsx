import React from "react";
import BookCard from "./bookCard";

function HomeContent() {
  return (
    <div className="wrapper h-full p-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg w-screen shadow-xl">
      <div className="title">
        <h1 className="title mb-14 mt-10 ml-4 text-4xl font-extrabold">
          A retrouver prochainement chez Jean Neymar le Raciste Originel FUCK LE
          CSS TANT QU'ON Y EST 🙅🏾 🔫 🤬 😡
        </h1>
      </div>
      <div className="Newbook flex justify-between">
        <div className="book">
          <BookCard />
        </div>
        <div className="text ml-12 self-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          dolorum modi dolor sunt suscipit non explicabo, ad laborum autem eum
          quas animi impedit quam laboriosam nam nobis quo ipsa repudiandae.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, nobis
          reprehenderit beatae provident perferendis illo. Suscipit iste ut
          accusamus earum recusandae. Quisquam nesciunt optio, placeat
          voluptatibus similique cupiditate. Consectetur, beatae! Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Suscipit laudantium ab
          recusandae temporibus ipsum perspiciatis expedita vitae tempora.
          Voluptates explicabo molestiae expedita obcaecati provident. Quo unde
          aperiam laborum recusandae illo. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quidem, consequuntur? Eligendi sapiente
          neque asperiores praesentium vel eos quisquam aperiam ipsa tempora,
          maxime tenetur? Quam animi inventore molestiae! Iusto, quisquam
          asperiores! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Id magni dolorum aperiam amet quam perspiciatis obcaecati veritatis
          earum dolorem eveniet, molestias dolores totam consequatur at dolor
          iusto, sint corrupti incidunt. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Cupiditate ipsum officia nesciunt, ad, ea explicabo
          neque rerum alias officiis voluptatem fugit quae voluptates incidunt,
          tenetur perferendis sapiente reiciendis illum corrupti?
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
