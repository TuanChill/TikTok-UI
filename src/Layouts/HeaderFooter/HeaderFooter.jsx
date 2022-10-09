import React from 'react';
import Footer from '~/Layouts/components/Footer';
import Header from '~/Layouts/components/Header/Header';

function HeaderFooter({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}

export default HeaderFooter;
