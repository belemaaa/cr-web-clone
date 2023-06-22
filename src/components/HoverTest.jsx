import React from 'react'

const HoverTest = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    
    return (
      <div className="relative inline-block">
        <div className='mb-32'>
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}

          >
            Hover Me
          </span>
          {isOpen && (
            <div className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Option 3
              </a>
            </div>
          )}
        </div>
        
      </div>
    );
  };
    

export default HoverTest