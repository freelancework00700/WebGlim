const siteUrl = "https://webglim.com.au/";

module.exports = {
    siteUrl,
    robotTxtOptions: {
        policies: [
            { userAgent: "*", disallow: "/secret" },
            { userAgent: "*", allow: "/" }
        ]
    },
    exclude: ["/secret"]
}