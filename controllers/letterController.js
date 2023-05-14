import Letter from "../models/Letter.js";

const toStringByFormatting = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return [year, month, day].join("-");
}

const toAuthorName = (classroom, number) => {
    return `1학년 ${classroom}반 ${number}번`;
}

export const postUpload = async (req, res) => {
    const { content, teacher, classRoom, number } = req.body;
    const date = toStringByFormatting();
    const author = toAuthorName(classRoom, number);
    const returnData = {
        warning: "편지를 보낼 선생님을 정확히 지정해주세요!",
        content: content
    }

    if (teacher === "select") return res.render("letter.ejs", { data: { returnData } })

    // console.log(author);

    // console.log("Create", title, author, content, teacher);
    await Letter.create({
        date, author, content, teacher
    });

    return res.render("main.html");
}

export const handleWatch = async (req, res) => {
    const { id } = req.params;
    const nowLetter = await Letter.findById(id);
    return res.render("view.ejs", { data: { nowLetter } });
}

export const getLetterList = async (req, res) => {
    const { teacher } = req.query;
    let letters;

    if (teacher === "all" || teacher === undefined) {
        letters = await Letter.find({});
    } else {
        letters = await Letter.find({ teacher: teacher })
    }

    return res.render("list.ejs", { data: { letters } });
}

export const getEnter = (req, res) => {
    return res.render("index.html");
}

export const postEnter = (req, res) => {
    const { password } = req.body;
    console.log(password)
    if (password !== "digitech") return res.render("index.html")
    return res.render("main.html")
}
export const getUpload = async (req, res) => {
    return res.render("letter.ejs");
}
