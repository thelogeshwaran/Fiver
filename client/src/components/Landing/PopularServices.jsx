import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function PopularServices() {
  const router = useRouter();
  const popularServicesData = [
    { name: "Ai Artists", label: "Add talent to AI", image: "/service1.png" },
    { name: "Logo Design", label: "Build your brand", image: "/service2.jpeg" },
    {
      name: "Wordpress",
      label: "Customize your site",
      image: "/service3.jpeg",
    },
    {
      name: "Voice Over",
      label: "Share your message",
      image: "/service4.jpeg",
    },
    {
      name: "Social Media",
      label: "Reach more customers",
      image: "/service5.jpeg",
    },
    { name: "SEO", label: "Unlock growth online", image: "/service6.jpeg" },
    {
      name: "Illustration",
      label: "Color your dreams",
      image: "/service7.jpeg",
    },
    { name: "Translation", label: "Go global", image: "/service8.jpeg" },
  ];
  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl mb-5">PopularServices</h2>
      <ul className="flex gap-16 flex-wrap">
        {popularServicesData.map((item, index) => {
          return (
            <li className="relative cursor-pointer" key={index}>
              <div className="absolute text-white top-5 left-4 z-10">
                <span>{item.label}</span>
                <div className="text-2xl font-extrabold">{item.name}</div>
              </div>
              <div className="h-80 w-72 ">
                <Image src={item.image} fill />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopularServices;
