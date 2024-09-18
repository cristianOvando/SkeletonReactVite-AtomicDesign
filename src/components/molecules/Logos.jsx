
import viteLogo from '../../assets/vite.svg';
import reactLogo from '../../assets/react.svg';
import tailwindinLogo from '../../assets/tailwind.svg';
function Logos() {
  return (

    <div className="flex space-x-7">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src={tailwindinLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>
   );
}

export default Logos;