import React from "react"
import ContentLoader from "react-content-loader"

const Preloader = () => (
    <ContentLoader
        className={"pizza-block"}
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="138" cy="136" r="135" />
        <rect x="4" y="281" rx="3" ry="3" width="270" height="24" />
        <rect x="6" y="317" rx="6" ry="6" width="270" height="85" />
        <rect x="79" y="444" rx="0" ry="0" width="1" height="0" />
        <rect x="10" y="416" rx="0" ry="0" width="92" height="28" />
        <rect x="118" y="409" rx="33" ry="33" width="152" height="45" />
    </ContentLoader>
)

export default Preloader
