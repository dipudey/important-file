const row = {
    id: 1,
    intro: "sadfasdf",
    resume: "sadf",
    user_id: 1,
    mod_by: 0,
    add_date: "2022-07-04 14:18:34",
    mod_date: "2022-07-04 14:18:35",
    users: {
        ID: 1,
        user_login: "wp-test",
        user_pass: "$P$BZcy6HS3KdJEgEPo38Ck0lurU7in2L0",
        user_nicename: "wp-test",
        user_email: "wp-test@mail.com",
        user_url: "http://wp-dev.test",
        user_registered: "2022-06-17 10:05:26",
        user_activation_key: "",
        user_status: 0,
        display_name: "wp-test",
    },
};

let key = "users.display_name";

function findValue(object, key) {
    key = key.split(".");
    data = object;
    key.forEach((el) => {
        data = data[el.toString()];
    });

    if (typeof data == "undefined") {
        return "";
    }

    return data;
}

console.log(findValue(row, key));
