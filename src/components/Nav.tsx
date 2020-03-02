import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function NavComponent() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="logo">
                        <Link to="/">Simple Test</Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavComponent;