import React , {useState} from 'react';
import pic from './profile.png';
import Profile from './profile';

function ProfileParent() {
    
    
    
    

    const me={
        name:"Emna Abdessalem",
        bio:'I am a web developper',
        image:pic,
        show:false
    }


    const [card,setCard]=useState(false);


    const toggleCard = ()=>{
          setCard(!card)
}


    return (
        <div className="Parent">
            <button onClick={toggleCard}> {card ? 'Click to hide ': 'Click to show'} </button>
                         {card ? <Profile x={me}/> :null}
           
        </div>
    )
    }

export default ProfileParent


