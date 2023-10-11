import React, { useState } from "react";
import Delivery from "./Delivery";
import Dineout from "./Dineout";
import Nightlife from "./Nightlife";
import "./tab.css"


const Tab = () => {

    const delimgurl1 = "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
    const delimgurl2 = "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"

    const doutimgurl1 = "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
    const doutimgurl2 = "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"

    const nightimgurl1 = "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
    const nightimgurl2 = "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"


    const [tab, setTab] = useState(<Delivery />)
    const [deldivcolor, setDeldivcolor] = useState(true)
    const [dinedivcolor, setDinedivcolor] = useState(false)
    const [nightdivcolor, setNightdivcolor] = useState(false)
    const [delimg, setDelimg] = useState(delimgurl2)
    const [doutimg, setDoutimg] = useState(doutimgurl1)
    const [nightimg, setNightimg] = useState(nightimgurl1)

    const activeTab = (tabType) => {
        switch (tabType) {
            case "delivery":
                setTab(<Delivery />)
                setDeldivcolor(true);
                setDinedivcolor(false);
                setNightdivcolor(false);
                setDelimg(delimgurl2)
                setDoutimg(doutimgurl1)
                setNightimg(nightimgurl1)
                break;
            case "dine out":
                setTab(<Dineout />)
                setDeldivcolor(false);
                setDinedivcolor(true);
                setNightdivcolor(false);
                setDelimg(delimgurl1)
                setNightimg(nightimgurl1)
                setDoutimg(doutimgurl2)
                break;
            case "night out":
                setTab(<Nightlife />)
                setDeldivcolor(false);
                setDinedivcolor(false);
                setNightdivcolor(true);
                setDelimg(delimgurl1)
                setDoutimg(doutimgurl1)
                setNightimg(nightimgurl2)
                break;
            default:
                break;

        }
    }

    return (
        <>
            <div className="tab-options">
                <div className="eatoption">
                    <div className="delivery tab" onClick={() => activeTab("delivery")}>
                        <div className={deldivcolor ? "deldivafterclick" : "imgdiv"}>
                            <img className="tabimg" src={delimg} />
                        </div>
                        Delivery</div>

                    <div className="dineout tab" onClick={() => activeTab("dine out")}>
                        <div className={dinedivcolor ? "dinedivafterclick" : 'imgdiv'}>
                            <img className="tabimg" src={doutimg} alt="" />
                        </div>
                        Dine out</div>
                    <div className="lightlife tab" onClick={() => activeTab("night out")}>
                        <div className={nightdivcolor ? "nightdivafterclick" : 'imgdiv'}>
                            <img className="tabimg" src={nightimg} alt="" />
                        </div>
                        Nightlife</div>
                </div>
                <div className="linebreak"></div>
            </div>
            <div>
                {tab}
            </div>

        </>

    )
}

export default Tab;