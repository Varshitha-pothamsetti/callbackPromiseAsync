const getStudents = (req, res) => {
    let stdData = {name: "satya", roll : "2022"};
    res.status(200).json({data: stdData});
};
const addStudents = (req, res) => {
    res.status(201).json({message: "data added"});
}
export {getStudents, addStudents};