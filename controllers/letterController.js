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
    const teacherName = ["이영국", "유미선", "김도형", "김성인", "조영식", "박경은", "서민정", "김명수", "이미현", "송창용", "최승호", "김영국", "권순용", "권성현", "정동엽", "류주희", "김경애"];

    if (teacher === "select" || teacherName.indexOf(teacher) < 0) return res.render("letter.ejs");

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
