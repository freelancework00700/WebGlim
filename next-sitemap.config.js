const siteUrl = "http://webglim.com/";

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