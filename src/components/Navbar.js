import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    <img src="..." class="img-fluid" alt="Responsive image"></img>
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-info">  {/* เปลี่ยนจาก bg-primary เป็น bg-info */}
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">แถบเมนู</a> {/* สีข้อความเป็นสีขาว */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#">หน้าแรก</a> {/* สีข้อความเป็นสีขาว */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">ห้องพัก</a> {/* สีข้อความเป็นสีขาว */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">ติดต่อ</a> {/* สีข้อความเป็นสีขาว */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-white" href="#" aria-disabled="true">Disabled</a> {/* สีข้อความเป็นสีขาว */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    );
};

export default Navbar;
