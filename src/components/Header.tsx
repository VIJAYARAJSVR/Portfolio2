import * as React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import MainNav from "./navbar";

// @ts-ignore
export const Header = ({siteTitle, menuLinks}) => {
    console.log(menuLinks);
    return (
        <div className="container rounded-3">
            {/*<div>{siteTitle}</div>*/}
            <MainNav menuLinks={menuLinks}/>
        </div>
        )
};

Header.propTypes = {
    siteTitle: PropTypes.string,
    siteDescription: PropTypes.string,
    menuLinks: PropTypes.array,
}

Header.defaultProps = {
    siteTitle: ``,
    siteDescription: ``,
    menuLinks: [],
}

export default Header


