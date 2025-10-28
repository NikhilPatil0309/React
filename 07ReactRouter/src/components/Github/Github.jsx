/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const[data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary').then(response => response.json()).then(data=>{
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4  text-black p-4 text-2xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github
export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}