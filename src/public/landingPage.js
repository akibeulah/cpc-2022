import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Confetti from 'react-confetti'

import backdrop from '../assets/images/fayo.png'
import kufo from '../assets/images/kufo.png'
import lara from '../assets/images/lara.png'
import man_project from '../assets/images/man_project.png'
import girl_sitting from '../assets/images/girl_sitting.png'
import insta from '../assets/images/insta.png'
import twitter from '../assets/images/twitter.png'
import group7 from '../assets/images/group7.svg'
import image4 from '../assets/images/image4.svg'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const LandingPage = (props) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const [events, setEvents] = useState([])

    useEffect(() => {
        window.addEventListener('resize', (e) => handleResize(e))

        return (() => window.removeEventListener('resize', (e) => handleResize(e)))
    }, [])

    useEffect(() => {
        axios.get('/api/events/')
            .then(res => {
                setEvents(res.data.events)
            })
    }, [])

    const handleResize = (e) => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    return (
        <>
            <div className="absolute h-screen w-full overflow-hidden">
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                />
            </div>
            <section
                className="py-24 max-w-7xl mx-auto px-16 lg:px-8 w-full bg-white h-screen relative flex flex-col justify-center">

                <div className="relative z-10">
                    <div className="">
                        <h1 className={'text-base lg:text-2xl mb-8 text-purple-600'}>
                            #The17thSet.
                        </h1>

                        <h1 className='font-extrabold text-2xl lg:text-4xl mb-8'>
                            Graduation is here.
                            <br />
                            <br />
                            Welcome to the digital <br />
                            view of convocation.
                        </h1>
                    </div>

                    <div className="">
                        <div className="lg:h-20 w-full lg:w-3/4 mb-4 lg:mb-12 relative">
                            <input type="text" value={""} onClick={() => props.setOp(true)} onChange={() => props.setOp(true)} className={"w-full lg:h-20 px-4 py-2 rounded-lg outline-none border border-gray-600"} />
                            <span className="absolute text-2xl lg:text-5xl top-1/2 transform -translate-y-1/2 right-6 text-gray-600"><FontAwesomeIcon icon={faSearch} /></span>
                        </div>
                        <div className="bg-gray-200 h-10 lg:h-20 w-3/4 lg:w-2/4 rounded" />
                    </div>
                </div>
                <div
                    className="absolute w-11/12 lg:w-2/4 top-1/2 right-1/2 lg:right-8 transform translate-x-1/2 lg:translate-x-0 -translate-y-1/2 z-0">
                    <img src={backdrop} className={'hidden lg:block w-full lg:w-2/3 lg:ml-auto'} alt={'Backdrop image'} />
                </div>
            </section>

            <section className={'bg-purple-50 py-12 px-4 w-full bg-white relative md:px-16'}>
                <div className="max-w-7xl mx-auto">
                    <h1 className={'font-extrabold text-2xl lg:text-4xl mb-8'}>The Lineup of Events</h1>

                    <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-12">
                        <div className="w-full mx-auto col-span-4">
                            <img src={group7} alt="Events banner" className="w-full" />
                        </div>

                        <div className="my-4 md:my-0 overflow-y-scroll py-4 md:py-0 col-span-8 no-scrollbar">
                            {
                                events.map((i, k) =>
                                    <div key={k} className="bg-white px-2 lg:px-8 py-4 border border-purple-200 ">
                                        <h1 class="title-font text-lg font-black text-grey-900 mb-3 capitalize">{i.title}</h1>
                                        <h2 class="tracking-widest mb-2 text-xs title-font text-grey-600 mb-1 text-light">{i.subtitle}</h2>

                                        <a className="text-xs underline text-purple-600" href={i.link}>{i.link === "/" ? "Home" : i.link}</a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-white py-24 px-8 lg:px-16 max-w-7xl mx-auto'>
                <div className="grid mb-12 grid-cols-1 lg:grid-cols-2 lg:gap-8">
                    <div className="grid grid-cols-2 mb-5 lg:mb-0 gap-2">
                        <div className="flex flex-col">
                            <img src={kufo} className="w-10/12 mb-4 ml-auto lg:mb-2" alt="Kuforiji" />
                            <img src={girl_sitting} className="w-8/12 mb-4 ml-auto" alt="Kuforiji" />
                        </div>
                        <div className="">
                            <img src={lara} className="w-10/12 mb-4 ml-auto" alt="Lara" />
                        </div>
                    </div>


                    <div className="lg:flex flex-col justify-center">
                        <h1 className={'text-base lg:text-2xl mb-8'}>
                            #17&18MatricNo
                        </h1>

                        <h1 className='font-extrabold text-2xl lg:text-5xl mb-8'>
                            <span className="hidden lg:block">
                                Celebrating <br />
                                Our Exit <br />
                                Out Of Hebron.
                            </span>
                            <span className="block lg:hidden">
                                Celebrating Our Exit <br />
                                Out Of Hebron.
                            </span>
                        </h1>
                    </div>
                </div>

                <div className='my-12 lg:my-24 text-center'>
                    <h1 className='text-xl font-bold mb-4'>The MANTRA Remains</h1>

                    <h3>
                        To create knowledge and restore the dignity of the black race via  Human Development and Total Man Concept-driven curricula; employing innovative, leading-edge teaching and learning methods, research, and professional services that promote integrated, life-applicable, life-transforming education relevant to Science, Technology, and Human Capacity Building.
                    </h3>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 my-12 lg:my-16'>
                    <img src={man_project} className="w-10/12 mb-4 ml-auto" alt="Lara" />


                    <div className="p-8 lg:flex flex-col justify-center">
                        <h1 className='font-extrabold text-2xl py-2 lg:text-5xl'>
                            <span className="hidden pl-6 lg:block">
                                Celebrate <br />
                                in <br />
                                Pixels
                            </span>
                            <span className="block lg:hidden">
                                Celebrate in Pixels
                            </span>
                        </h1>
                        <a href="#" className='underline py-1 lg:pl-6 lg:text-xl'>View the Ladies & Gents</a>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:flex flex-row-reverse lg:items-center'>
                    <div className="w-full mx-auto col-span-4">
                        <img src={image4} alt="Events banner" className="w-full lg:w-2/3 mx-auto" />
                    </div>

                    <div className="py-8 pr-8 lg:w-1/2">
                        <h1 className='font-extrabold text-2xl py-2 lg:text-5xl'>
                            <span className="hidden lg:block">
                                Souvenirs <br />
                                are <br />
                                Ready
                            </span>
                            <span className="block lg:hidden">
                                Souvenirs are Ready
                            </span>
                        </h1>
                        <a href="#" className='underline py-1 lg:text-xl'>See your Package</a>
                    </div>
                </div>
            </section>

            <section className={'p-8'}>
                <h1 className="text-xl font-extrabold text-center">Enquiries</h1>

                <div className={'flex flex-row justify-between py-12 w-full max-w-2xl mx-auto'}>
                    <a href="https://www.instagram.com/the17thsetcu/"><img src={insta} alt="Instagram link" /></a>
                    <a href="https://instagram.com/"><img src={twitter} alt="twitter link" /></a>
                </div>
            </section>
        </>
    )
}

export default LandingPage