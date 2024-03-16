import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [urdu, setUrdu] = useState(0)
    const [english, setEnglish] = useState(0)
    const [hindi, setHindi] = useState(0)
    const [bangla, setBangla] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (urdu < 50) {
                setUrdu(prevCount => prevCount + 1);
            }
            if (english < 60) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (hindi < 50) {
                setHindi(prevCount => prevCount + 1);
            }
            if (bangla < 90) {
                setBangla(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [urdu, english,hindi,bangla])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-gray-300 text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center  justify-center gap-y-2">
                        <Progress strokeColor="#d631c6" type="circle" percent={bangla} size={35} />
                        <span className='text-xs font-bold  text-gray-300'>Bangla</span>
                    </div>
                    <div className="flex flex-col items-center  justify-center gap-y-2">
                        <Progress strokeColor="#d631c6" type="circle" percent={english} size={35} />
                        <span className='text-xs font-bold text-gray-300'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#d631c6" type="circle" percent={hindi} size={35} />
                        <span className='text-xs font-bold text-gray-300'>Hindi</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#d631c6" type="circle" percent={urdu} size={35} />
                        <span className='text-xs font-bold text-gray-300'>Urdu</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages