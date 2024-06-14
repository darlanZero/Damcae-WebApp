
import FrontPageHeadeImage from '../assets/download.jpeg'

const FrontPageHeader = () => {
  return (
    <div 
            className='w-full h-96 items-center flex justify-center bg-opacity-30 bg-blur'
            style={{ backgroundImage: `url(${FrontPageHeadeImage})` }}
        >
        <div 
            className='hero w-3/4 h-3/4 bg-center rounded-sm blur-none'
            style={{ backgroundImage: `url(${FrontPageHeadeImage})` }}
        >
            <div className='hero-overlay bg-opacity-60'></div>
            <div className='hero-content text-center text-neutral-content'>
                <div className='max-w-md mx-auto'>
                    <h1 className='mb-5 text-5xl font-bold'>
                        DAMCAE Project
                    </h1>
                    <p className='mb-5 text-white'>
                        A WhatsApp RPG game created and improved for your fun and profit.
                    </p>

                    <button className='btn btn-primary'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default FrontPageHeader