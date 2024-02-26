import Image from 'next/image'

type SectionBlockProps = {
    title: string
    snippet: string
    children: string
}

const SectionBlock = ({ title, snippet, children }: SectionBlockProps) => {
    return (
        <section className="mb-32">
            <div className="container mx-auto text-center lg:text-left xl:px-16">
                <div className="mx-12">
                    <div className="mb-12 lg:mb-0">
                        <div className="relative block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                            <h2 className="mb-8 text-3xl font-bold">{title}</h2>
                            <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                                {snippet}
                            </p>

                            <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                                <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" className="mr-2 h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Best team
                                </p>

                                <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" className="mr-2 h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Best quality
                                </p>

                                <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" className="mr-2 h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Best experience
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="-mt-16 ml-12 z-10 relative">
                        <Image src="/placeholder.jpg" width={300} height={300} className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                    </div>
                </div>
            </div>
        </section>)
}

export default SectionBlock