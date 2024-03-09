import React from 'react'

function Card() {

  const data = [
    {
      image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Amazon basics", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  accusamus, ipsa blanditiis! Pariatur, quae magnam.", instock: true,},
    {  image: 'https://images.unsplash.com/photo-1621786805943-572c1dab0ae1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Allay", description: "Lorem l dolor sit amet consectetur s elit.  accusamus, ipsa s! Pariatur, quae s.", instock: false,},
    {  image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "apple", description: "Lorem l dolor sit amet consectetur s elit.  accusamus, ipsa s! Pariatur, quae s.", instock: true,},
   
  ]


  return (
   <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
   {data.map((elem, index)=>(
     <div  className=' w-52 bg-zinc-100 rounded-md overflow-hidden'>
     <div className=' w-full h-42 bg-zinc-300'>
       <img className='w-full h-full object-cover' src={elem.image} alt="" />
     </div>
       <div className='w-full px-3 py-4'>
         <h2 className='font-semibold'>{elem.name}</h2>
         <p className='text-xs mt-3'>{elem.description}</p>
         <button className={`px-4 py-1 ${elem.instock ? "bg-blue-700" : "bg-red-700"} text-xs rounded text-zinc-100 mt-3 cursor-pointer`}>
                {elem.instock ? "Add to cart" : "Out of stock"}
         </button>
       </div>
     
   </div>
   ))}
   </div>
  );
}

export default Card;