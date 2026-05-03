import { services } from "../constants/services";

const Services = () => {
  return (
    <section
      id="services"
      className="px-5 py-30 lg:py-40 md:px-12 xl:px-18 border-b bg-[#111] text-white border-gray-400"
    >
      <div>
        <h1 className="uppercase font-semibold flex items-center gap-2">
          ■ my services
        </h1>
      </div>

      <div className="md:w-2/3 lg:w-1/2 mt-10">
        <h2 className="text-3xl lg:text-4xl font-medium">
          Web design, development, SEO and maintenance. I do that for you so you
          can focus on your core business.
        </h2>
      </div>

      <div className="pt-25 lg:pt-30 grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-22 gap-x-22 xl:gap-x-30">
        {services.map((service) => (
          <div key={service.id}>
            <h3 className="text-2xl lg:text-3xl font-medium">
              <span className="text-gray-400">0{service.id}.</span>{" "}
              {service.title}
            </h3>
            <hr className="my-6 border-gray-400" />
            <p className="text-lg mt-4">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
