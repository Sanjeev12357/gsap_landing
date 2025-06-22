import gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='text-3xl flex-center text-indigo-600'>
      <h1>App</h1>
    </div>
  )
}

export default App