import  './Card.css';
import Skills from './Skills';

export default function Card() {
      return(
    <div className='App'>
        <div className='card'>
            <img className="avatar" src="girl.jpg" alt="No" />
            <h2 > James</h2>
            <p>This is for demo project</p>
            <Skills/>
        
        </div>
    </div>
      );
}

