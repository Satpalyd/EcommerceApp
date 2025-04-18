import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cupiditate, repellat veniam et repudiandae tenetur! Facilis alias deleniti voluptatum fugit?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Virat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cupiditate, repellat veniam et repudiandae tenetur! Facilis alias deleniti voluptatum fugit?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 3,
    name: "Rahul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cupiditate, repellat veniam et repudiandae tenetur! Facilis alias deleniti voluptatum fugit?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 4,
    name: "Ritvik",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cupiditate, repellat veniam et repudiandae tenetur! Facilis alias deleniti voluptatum fugit?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 5,
    name: "Ritesh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cupiditate, repellat veniam et repudiandae tenetur! Facilis alias deleniti voluptatum fugit?",
    img: "https://picsum.photos/101/101",
  },
];
const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    Infinite: true,
    speed: 500,
    slideToscroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slideToShow: 3,
          slideToscroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          initialSlider: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };
  return <div className="py-10 mb-10">
    <div className="container">
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-blue-700">What our customers are saying </p>
        <h1 data-aos="fade-up" className="texr-3xl font-bold">Testomonials</h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aliquid, iste animi iure velit temporibus eum modi obcaecati veritatis blanditiis.</p>
      </div>
      <div data-aos="zoom-in">
        <Slider {...settings}>
        {TestimonialsData.map((data)=>(
            <div className="my-6">
                <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-black/10 relative">
                 <div className="mb-4">
                  <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                 </div>
                 <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-xs dark:text-slate-300 text-gray-500">{data.text}</p>
                    <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                    {data.name}
                    </h1>
                  </div>
                 </div>
                 <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
            </div>
        ))}
        </Slider>

      </div>
    </div>
  </div>;
};

export default Testimonials;
