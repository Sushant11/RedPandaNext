"use client"; // Add this directive at the top

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    id: 1,
    name: "K G",
    role: "First home buyers",
    content:
      "We had a great experience working with Bigyan Gurung at Red Panda Finance for our home loan. He helped us secure the best possible rate and guided us through every step of the process.",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    id: 2,
    name: "Kim Ngan Nguyen",
    role: "First home buyer",
    content:
      "Bigyan is very knowledgeable and professional. As a first home buyer, I didn't have much understanding about all the process, Bigyan was very good at explaining, which made everything happen smoothly.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 3,
    name: "Anil Moktan Tamang",
    role: "First home buyer",
    content:
      "Bigyan Gurung dai from Red Panda Finance made our first home buying experience smooth and stress-free. He helped us secure a great borrowing capacity, even though my partner isn't a PR or Australian citizen.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    name: "Angela Shakya",
    role: "First home buyer",
    content:
      "Bigyan ji was amazing throughout the mortgage process. As first home buyers, we were quite overwhelmed and unsure about the loan process but Bigyan ji was so patient throughout.",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    id: 5,
    name: "Kroshyo Gurung",
    role: "First home buyer",
    content:
      "Bigyan was truly amazing! He made the process of buying our first home seamless and stress-free. His expertise, patience, and dedication were exceptional.",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from Melbourne homeowners who've worked with us.
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2">
              <div className="flex flex-col items-start bg-gray-50 p-6 rounded-lg shadow-md h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-xl mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
