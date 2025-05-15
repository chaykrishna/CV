export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 max-w-3xl mx-auto"
    >
      <h2 className="text-5xl font-extrabold mb-8 text-primary">
        Let's Make Things Happen
      </h2>
       <p className="text-xl mb-6 text-gray-700 dark:text-gray-300 max-w-lg">
         Got a killer project? Wanna collab? 
        <br />
        Shoot me a message, I don’t bite… much.
      </p>
      <a
        href="mailto:radhakrishnachaitu@gmail.com"
        className="inline-block mt-4 px-8 py-4 bg-primary text-black font-bold rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 active:scale-95"
      >
        Hit Me Up
      </a>
    </section>
  );
}
