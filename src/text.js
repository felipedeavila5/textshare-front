import axios from 'axios';

function new_text(content = " ") {
    return axios({
        method: "post",
        url: import.meta.env.VITE_API_URL + "text/api/texts/",
        data: {
            content: content
        },
    });
}

function get_text(text_id) {
    return axios({
        method: "get",
        url: import.meta.env.VITE_API_URL + "text/api/texts/" + text_id,
    });
}

function update_text(text_id, content) {
    return axios({
        method: "patch",
        url: import.meta.env.VITE_API_URL + "text/api/texts/" + text_id,
        data: {
            content: content
        }
    });
}

function not_found_text(url_redirect) {
    window.location.href = url_redirect;
}

export {
    new_text,
    get_text,
    update_text,
    not_found_text
}