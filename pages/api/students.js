import db from './db';

export default (req, res) => {
    db.query('SELECT * FROM students_tbl',(error, results) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json({ students: results });
        }
    });
}