import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { BackgroundLines } from '../../components/ui/background-lines'
import { PlaceholdersAndVanishInput } from '../../components/ui/placeholders-and-vanish-input'
import Tags from '../../components/Common-tags/Tags';
import Cards from '../../components/Cards/Cards';
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards';
import CourseImg from '../../Photo/courseimg.jpg'
import Bottom from '../../components/Bottom/bottom';



function Dashboard() {

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className=''>
          <Navbar/>
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Sanjana Airlines, <br /> Sajana Textiles.
          </h2>
          {/* <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Get the best advices from our experts, including expert artists,
            painters, marathon enthusiasts and RDX, totally free.
          </p> */}
           <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
              <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
                Ask Aceternity UI Anything
              </h2>
              {/* <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              /> */}
            </div>
       </BackgroundLines>
       {/* Add middle sectin for the dashboard */}
        <div className=' max-h-max  p-5 w-[95%]  mx-auto rounded-2xl mb-10' style={{backgroundColor:'#f0f4ff'}}>
          <p className='text-3xl font-semibold text-center mb-24 translate-y-7'>Search courses for your future</p>
           <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
           />  

           <div className='w-[90%] mx-auto mt-6 flex  items-center gap-4 mb-4'>
             <h3 className='mb-4 text-lg font-semibold'>Common tags</h3>
             <ul className='flex gap-1'>
               <Tags name='Computer Science and Technology'></Tags>
               <Tags name='Business'></Tags>
               <Tags name='Health'></Tags>
             </ul>
           </div>

            <div className='flex gap-5 flex-col md:flex-row mb-3'>
              <Cards title='hsdfjlksdfgl;kjsadf;ajsdflajsfa sdf;lkasjdf;lkj' tutor='wert' price='23000'/>
              <Cards title='Machine Learning' tutor='wert' price='23000'/>
              <Cards title='Computer Science' tutor='wert' price='23000'/>
              <Cards title='Data Science' tutor='wert' price='23000'/>
              </div>
              <div>
                <button className="px-3 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:shadow-xl mb-3 text-sm">
                  Explore all Courses
                </button>
             </div>

        </div>

        
        <div className="flex justify-between mx-auto w-[95%] items-center bg-white p-8 rounded-xl ">
            {/* Left Section */}
            <div className="space-y-2">
              <p className="text-3xl font-bold tracking-wide text-gray-900">
                Where Teaching
              </p>
              <p className="text-lg font-medium uppercase text-gray-600 tracking-wide">
                and
              </p>
              <p className="text-3xl font-bold tracking-wide text-gray-800">
                Learning Come Together
              </p>
            </div>

              {/* Right Section */}
              <div className="relative max-w-xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={CourseImg}
                  alt="Futuristic Learning"
                  className="rounded-2xl shadow-lg border-4  "
                />
                <div className="absolute inset-0 border border-dashed   rounded-2xl animate-pulse"></div>
              </div>
        </div>



        <div className="h-auto rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-20">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
          </div>
          <Bottom/>

    </div>
  )
}

export default Dashboard
