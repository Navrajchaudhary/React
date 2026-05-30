
import RightCard from './RightCard'

const RightContent = (props) => {
    
  return (
    <div id='right' className='h-full w-2/3  px-6 flex flex-nowrap  gap-5 overflow-x-auto rounded-4xl' >
      {props.users.map((elm, idx)=> {
        return <RightCard key={idx} img={elm.img} id={idx + 1} intro={elm.intro} tag={elm.tag} color={elm.color} />
      })}
    </div>
  )
}

export default RightContent
