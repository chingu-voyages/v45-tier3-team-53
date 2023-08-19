

const LandingPage=()=> {

    return (
        <div>
            <div>
                {/* logo/signin/sign up */}
            </div>
            <div className="container md:columns-2 flex flex-col md:flex-row">
                <div className="flex items-center" >
                    <div className="max-w-[800px]">
                        <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                        Are you ready <br />
                        <span className="text-primary ">for your next adventure?</span>
                        </h2>
                        <p className="text-lg text-neutral-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                        officia consequatur adipisci tenetur repudiandae rerum quos.
                        </p>
                    </div>
                </div>
                <div className="container ">
                    <img src={'/LandingPageHeroImage.jpg'} className="object-contain "/>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;