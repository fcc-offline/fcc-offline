import showdown from "showdown";

const converter = new showdown.Converter({
    rawHeaderId: true,
    tasklists: true
});

export default converter;