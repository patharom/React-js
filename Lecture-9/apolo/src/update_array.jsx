import react from 'react'
import { usestate } from 'react'
/* updating array in state */

const Update_array = () => {

    const [name , setname] = usestate("om")
    const [profile , setprofile] = usestate(["om"])

    console.log(profile);
    console.log(name);

    
    let Ids = 0;

    let array = []
    return (
        <div>
               <input classname='p-2 border-2 border-solide border-black' value={name} onChange={(e) => setname(e.target.value)} />
               <button classname='btn' onClick={() => setprofile([{
                id: Ids++,
                name:name
               }])}>submit</button>
        </div>
    )
}

export default Update_array


