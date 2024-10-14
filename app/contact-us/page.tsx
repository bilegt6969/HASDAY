import React from 'react';

function page() {
  return (
    <div className="min-h-screen w-full custom-gradient mt-[-4rem]">
      <section className="pt-[20vh] mx-auto">
        <div className="relative flex flex-col lg:flex-row lg:space-x-8 text-gray-700 p-6">
          {/* Text Section */}
          <div className="flex-1 text-white max-w-xl mx-auto justify-center items-center my-auto text-center lg:text-left">
            <h4 className="block font-sans text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug tracking-tight">
              INTERESTED IN JOINING US?
            </h4>
            <p className="block mt-4 font-sans font-light leading-relaxed text-lg sm:text-xl lg:text-2xl">
              WE ARE always looking for motivated, keen people to join our teams
              and are driven by our employees’ success. Whatever stage you are
              at in your career, whether you are an apprentice or an experienced
              construction worker, we want to hear from you.
            </p>
          </div>

          {/* Form Section */}
          <form className="flex-1 max-w-screen-lg mt-8 lg:mt-0 mb-2 w-full sm:w-96 lg:w-full p-6 bg-white text-black rounded-3xl shadow-lg">
            <div className="flex flex-col gap-6 mb-1 lg:grid lg:grid-cols-2 lg:gap-8">
              {/* First Name */}
              <div className="relative">
                <input
                  placeholder="First Name"
                  className="border-b-1 border-gray-300 peer w-full h-12 bg-white/30 px-4 py-2 text-black placeholder-gray-500 outline-none transition-all duration-300 hover:bg-white/40"
                />
              </div>

              {/* Last Name */}
              <div className="relative">
                <input
                  placeholder="Last Name"
                  className="border-b-1 border-gray-300 peer w-full h-12 bg-white/30 px-4 py-2 text-black placeholder-gray-500 outline-none transition-all duration-300 hover:bg-white/40"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  placeholder="Email"
                  className="border-b-1 border-gray-300 peer w-full h-12 bg-white/30 px-4 py-2 text-black placeholder-gray-500 outline-none transition-all duration-300 hover:bg-white/40"
                />
              </div>

              {/* Message */}
              <div className="relative lg:col-span-2">
                <textarea
                  placeholder="Your message here..."
                  className="peer w-full h-12 border-b-1 border-gray-300 bg-white/30 px-4 py-2 text-black placeholder-gray-500 outline-none transition-all duration-300 hover:bg-white/40"
                ></textarea>
              </div>

              {/* CV Upload */}
              <div className="relative lg:col-span-2">
                <h6 className="block mb-1 font-sans text-base text-gray-500">
                  Upload Your CV
                </h6>
                <input
                  type="file"
                  className="peer w-full h-12 bg-white/30 px-4 py-2 text-black placeholder-gray-500 outline-none transition-all duration-300 hover:bg-white/40 file:border-none file:text-black file:px-4 file:py-2 file:rounded-lg hover:file:bg-gray-300 ease-in-out"
                />
              </div>

              {/* Subscribe Checkbox */}
              <div className="relative flex items-center lg:col-span-2 h-12 bg-white/30 px-4 py-2 transition-all duration-300 hover:bg-white/40">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="h-5 w-5 rounded-md border border-black bg-transparent"
                />
                <label
                  htmlFor="subscribe"
                  className="ml-2 font-sans text-sm text-black"
                >
                  Subscribe for daily letters
                </label>
              </div>
            </div>

            <button className="mt-6 w-full lg:w-auto px-6 py-3 bg-blue-800 text-white rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default page;
