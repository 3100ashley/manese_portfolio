
export default function Footer() {
  return (
    <footer className="bg-brown mt-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span
            
            className="flex items-center mb-4 sm:mb-0"
          >
 
            <span className="self-center text-2xl font-mono font-bold whitespace-nowrap text-pink tracking-widest">
              ASHLEY
            </span>
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://www.linkedin.com/in/ashleymanese/" className="mr-4 hover:underline md:mr-6 text-pink">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/3100ashley" className="mr-4 hover:underline md:mr-6 text-pink">
                Github
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto text-pink lg:my-8" />
        <span className="block text-sm text-pink sm:text-center">
          © 2023AshleyManese
        </span>
        
      </div>
    </footer>
  );
}
