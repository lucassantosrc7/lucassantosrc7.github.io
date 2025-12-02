import React from 'react'

const Calendly = () => {
    return (
        <div className="w-full">
            {/* Widget em linha do Calendly - início */}
            <div
                className="
                    calendly-inline-widget 
                    rounded-lg 
                    overflow-hidden 
                    ml-[60px]
                    sm:ml-0
                    w-[300px]
                    sm:w-full 
                    h-[1100px] 
                    sm:h-[1000px] 
                    md:h-[1100px]
                    lg:h-[860px]
                "
                data-url="https://calendly.com/mentalplusdev/reuniao-mentalplus"
            ></div>

            <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
            ></script>
            {/* Widget em linha do Calendly - fim */}
        </div>
    )
}

export default Calendly
