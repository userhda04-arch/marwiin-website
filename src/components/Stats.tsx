import { BsFillPeopleFill } from 'react-icons/bs';
import { LuBan } from 'react-icons/lu';
import { VscSmiley } from 'react-icons/vsc';
import { Fade } from 'react-awesome-reveal';

const Stats = () => {
    return (
        <section className='my-24' id='stats'>
            <div className='container mx-auto px-7'>
                <div className='flex flex-col sm:flex-row justify-center gap-10 items-stretch'>
                    <Fade>
                        <div className='border-accent border-4 rounded-xl p-10 text-center flex flex-col items-center'>
                            <strong className='text-xl md:text-3xl flex items-center gap-2'><BsFillPeopleFill /> Customers</strong>
                            <span><strong className='mt-5 text-2xl md:text-4xl text-accent inline-block'>xxxx</strong></span>
                        </div>
                    </Fade>
                    <Fade>
                        <div className='border-accent border-4 rounded-xl p-10 text-center flex flex-col items-center'>
                            <strong className='text-xl md:text-3xl flex items-center gap-2'><LuBan /> Bans</strong>
                            <span><strong className='mt-5 text-2xl md:text-4xl text-accent inline-block'>xxxx</strong></span>
                        </div>
                    </Fade>
                    <Fade>
                        <div className='border-accent border-4 rounded-xl p-10 text-center flex flex-col items-center'>
                            <strong className='text-xl md:text-3xl flex items-center gap-2'><VscSmiley /> Satisfaction</strong>
                            <span><strong className='mt-5 text-2xl md:text-4xl text-accent inline-block'>xxxx</strong></span>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Stats;