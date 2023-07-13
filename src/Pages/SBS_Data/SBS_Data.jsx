import { useRef, useState } from "react";
import Sbs_Table_data from "./ROWS/Sbs_Table_data";
import MonthList from "../../Shared/MonthList/MonthList";
import { DownloadTableExcel } from "react-export-table-to-excel";
import SBS_Vertical_Total from "./ROWS/SBS_Vertical_Total";
import SBS_Sector_title from "./ROWS/SBS_Sector_title";
import SBS_Sector_Code_Row from "./ROWS/SBS_Sector_Code_Row";
import Constant_Titles from "./ROWS/Constant_Titles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';


const SBS_Data = () => {
    const [currentMonth, setCurrentMonth] = useState(null)
    const [sbs_data, setSbsData] = useState([])
    const tableRef = useRef(null);
    const handleData = (event) => {
        event.preventDefault();
        const month = event.target.month.value
        setCurrentMonth(month)

        fetch(`https://sbs-server-mojaer.vercel.app/sbs_data?month=${month}`)
            .then(response => response.json())
            .then(res => setSbsData(res.data))

    }

    return (
        <section>
            <form onSubmit={handleData} className="flex flex-row items-center">
                <select className="select bg-gray-300 select-bordered ps-4 w-full text-xl max-w-xs p-2 border-spacing-1 rounded-xl outline-1" name="month">
                    <option disabled defaultValue>Month</option>
                    <MonthList></MonthList>
                </select>
                <input className="btn btn-sm ms-5" type="submit" value='Show' />
            </form>
            <DownloadTableExcel
                filename='SBS file'
                sheet={currentMonth}
                currentTableRef={tableRef.current}
            >
                {currentMonth && <button className="btn btn-primary mt-4"> Convert to excel </button>}
            </DownloadTableExcel>

            <div className="mt-5">
                <div className="overflow-x-auto w-full">
                    <Swiper
                        direction={'horizontal'}
                        slidesPerView={1}
                        spaceBetween={15}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide>
                            <table className="table text-center cursor-pointer" ref={tableRef}>
                                {/* head */}
                                <thead>
                                    <Constant_Titles></Constant_Titles>
                                </thead>
                                <tbody className="">
                                    {/*  row  */}
                                    <SBS_Sector_title></SBS_Sector_title>
                                    {/*  row  */}
                                    <SBS_Sector_Code_Row></SBS_Sector_Code_Row>
                                    {/*  row  */}
                                    {sbs_data.map((data, index) => <Sbs_Table_data
                                        key={data.code} data={data}
                                        index={index} >
                                    </Sbs_Table_data>)}
                                    {/*  row  */}
                                    {<SBS_Vertical_Total data={sbs_data}></SBS_Vertical_Total>}
                                </tbody>
                            </table>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default SBS_Data;