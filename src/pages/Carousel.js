import React from "react";

function Carousel() {
    return (
        <div className="row">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* First image */}
                        <img
                            src="https://ascott-kuala-lumpur-hotel.hotelmix.co.th/data/Photos/OriginalPhoto/15726/1572633/1572633890/Ascott-Kuala-Lumpur-Hotel-Exterior.JPEG"
                            className="d-block w-100"
                            alt="..."
                        />
                        <h1 className="text-primary">บริการห้องพักติดทะเล SEA VIEW</h1>

                        <p>ทะเลสวย น้ำใส บรรยากาศดี บริการให้พักสุดหรู สะอาดปลอดภัย มีมาตราฐาน ที่สามารถมองเห็นวิวทะเล และสามารถเดินลงทะเลไปได้ มีความเป็นส่วนตัวสูง</p>
                        <p>บ้านพักแบบส่วนตัว มาแบบครอบครัว หรือ กลุ่มเพื่อน มีสระว่ายน้ำแบบส่วนตัว บ้านพักที่มีความเป็นส่วนตัวสูง ให้ความปลอดภัยตลอด 24 ชั่วโมง มี รปภ. ดูแลความเรียบร้อยอยู่ห่างๆ สามารถทำอาหาร เล่นสระน้ำ</p>
                        <p>ปาร์ตี้ได้สนุกสนาน บริการอาหารสุดพิเศษ อาหารอร่อย รสชาติดี มีหลากหลายเมนู ให้บริการอาหารเช้า กลางเย็น และมื้อค่ำ อันสุดแสนพิเศษ ใช้วัตถุดิบในพื้นที่ ราคาอาหารไม่แพง สดใหม่ทุกวัน พิเศษสุด สามารถโทรสั่งอาหารให้ไปสั่งถึงห้องพักได้ ไม่มีชาร์ตเพิ่ม</p>
                        <hr />
                        <h1 className="text-primary">ห้องพัก</h1>

                        {/* Add row for two images */}
                        <div className="row">
                            {/* Left image */}
                            <div className="col-md-6">
                                <img
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/500182789.jpg?k=eb164e7fbbc156f93f1dfcf6bda64ba681ec89b0f6231cb03c33400b698b5e69&o=&hp=1"
                                    className="d-block w-100"
                                    alt="ห้องพัก"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                            {/* Right image */}
                            <div className="col-md-6">
                                <img
                                    src="https://ascott-ifc-guangzhou-hotel.hotelmix.co.th/data/Photos/OriginalPhoto/15912/1591240/1591240801/Ascott-Ifc-Guangzhou-Apartment-Exterior.JPEG"
                                    className="d-block w-100"
                                    alt="ห้องพัก"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                        </div>

                        {/* Contact information with background color */}
                        <div className="contact-info" style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
                            <h5 style={{ textAlign: 'left', marginLeft: '20px' }}>
                                รายละเอียดการติดต่อ <br />
                                71/2-13 โครงการโอโซนพลาซ่า ห้อง H1C,H2C ถนนคู้บอน <br />
                                แขวงรามอินทรา เขตคันนายาว กรุงทพฯ 10230 <br />
                                081-3433149 <br />
                                info@websitebigbang.com <br />
                                @websitebigbang <br />
                                websitebigbang
                            </h5>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/500182789.jpg?k=eb164e7fbbc156f93f1dfcf6bda64ba681ec89b0f6231cb03c33400b698b5e69&o=&hp=1"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://ascott-ifc-guangzhou-hotel.hotelmix.co.th/data/Photos/OriginalPhoto/15912/1591240/1591240801/Ascott-Ifc-Guangzhou-Apartment-Exterior.JPEG"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>

                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
