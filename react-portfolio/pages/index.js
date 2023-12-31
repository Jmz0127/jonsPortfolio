import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import deved from '../public/dev-ed-wave.png';
import code from '../public/code.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import Image from 'next/image';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>Jon Mezzadri's Portfolio</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/avatar.png' />
			</Head>
			<main className=' bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
				<section className='min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between dark:text-white'>
						<h1 className='font-jungleeast text-xl'>developedbyJon.</h1>
						<ul className='flex items-center'>
							<li>
								<BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-2xl' />
							</li>
							<li>
								<a className='bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8' href='https://docs.google.com/document/d/1yceZ7pcwbghY78btheluJvYGeof_oIMEfwAjLZoS-qI/edit?usp=sharing'>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className='text-center p-10 py-10'>
						<h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>Jon Mezzadri</h2>
						<h3 className='text-2xl py-2 dark:text-white md:text-3xl'>Developer, Accountant, Dad.</h3>
						<p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'>Freelancer providing services for programming and financial needs. I would love to hear more about your projects and how I could help!</p>
						<div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
							<a href='https://www.linkedin.com/in/jmezz/'>
								<AiFillLinkedin />
							</a>
							<a href='https://github.com/Jmz0127'>
								<AiFillGithub />
							</a>
						</div>
						<div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96'>
							<Image src={deved} layout='fill' objectFit='cover' />
						</div>
					</div>
				</section>
				<section>
					<div>
						<h3 className='text-3xl py-1 dark:text-white '>Services I offer</h3>
						<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
							Since the beginning of my journey as a certified public accountant, researcher and programmer I've enjoyed building things - whether that be tax workpapers, healthcare data points or <span className='text-teal-500'> fullstack software </span>. Throughout my professional career, I have
							collaborated with talented people to create digital products for both business and consumer use across a multitude of industries.
						</p>
						<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>I offer from a wide range of services, including work paper design, documentation brainstorming and being an intermediary between the finance and tech world.</p>
					</div>
					<div className='lg:flex gap-10'>
						<div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
							<Image src={design} width={100} height={100} />
							<h3 className='text-lg font-medium pt-8 pb-2  '>Beautiful Designs</h3>
							<p className='py-2'>Creating insightful designs suited for your needs.</p>
							<h4 className='py-4 text-teal-600'>Visualization Tools I Use</h4>
							<p className='text-gray-800 py-1'>Google Sheets</p>
							<p className='text-gray-800 py-1'>Tableau</p>
						</div>
						<div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
							<Image src={code} width={100} height={100} />
							<h3 className='text-lg font-medium pt-8 pb-2 '>Automate your dream project</h3>
							<p className='py-2'>Do you have an idea for your next great financial product? Let's build it into reality.</p>
							<h4 className='py-4 text-teal-600'>Product Development Tools I Use</h4>
							<p className='text-gray-800 py-1'>Python</p>
							<p className='text-gray-800 py-1'>React</p>
							<p className='text-gray-800 py-1'>Javascript</p>
						</div>
						<div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
							<Image src={consulting} width={100} height={100} />
							<h3 className='text-lg font-medium pt-8 pb-2 '>Consulting</h3>
							<p className='py-2'>Are you interested in feedback for your current project work papers or workflow? I can give you tips and tricks to level it up.</p>
							<h4 className='py-4 text-teal-600'>Financial Tools I Use</h4>
							<p className='text-gray-800 py-1'>Excel</p>
							<p className='text-gray-800 py-1'>Alteryx</p>
							<p className='text-gray-800 py-1'>Python</p>
						</div>
					</div>
				</section>
				<section className='py-10'>
					<div>
						<h3 className='text-3xl py-1 dark:text-white '>Portofolio</h3>
						<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
							Since the beginning of my journey as a freelance developer, I've built automations and digital products across <span className='text-teal-500'> multiple programming languages</span>.
						</p>
						<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>My main inspiration is helping people solve problems in their everyday life through the things I build. Check out my Github link above!</p>
					</div>
					{/* uncomment once web files in public folder are updated! */}
					{/* <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
						<div className='basis-1/3 flex-1 '>
							<Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web1} />
						</div>
						<div className='basis-1/3 flex-1'>
							<Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web2} />
						</div>
						<div className='basis-1/3 flex-1'>
							<Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web3} />
						</div>
						<div className='basis-1/3 flex-1'>
							<Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web4} />
						</div>
						<div className='basis-1/3 flex-1'>
							<Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web5} />
						</div>
						<div className='basis-1/3 flex-1'>
							<Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web6} />
						</div>
					</div> */}
				</section>
			</main>
		</div>
	);
}
