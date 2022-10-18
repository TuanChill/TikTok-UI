import React from 'react';
import Footer from '~/layouts/components/Footer';
import Header from '~/layouts/components/Header/Header';

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
