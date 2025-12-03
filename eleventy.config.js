module.exports = function (eleventyConfig) {

    // Kopier css og images til output
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");

    // Dansk datoformatering
    eleventyConfig.addFilter("daDato", function (date) {
        const måneder = [
            "januar", "februar", "marts", "april", "maj", "juni",
            "juli", "august", "september", "oktober", "november", "december"
        ];
        const d = new Date(date);
        return `${d.getDate()}. ${måneder[d.getMonth()]} ${d.getFullYear()}`;
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};