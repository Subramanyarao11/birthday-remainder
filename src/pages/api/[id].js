import dbconnection from "@/lib/dbconn";
import Birthday from "@/models/Birthday";
import Cors from 'cors'
dbconnection();

const cors = Cors({
    methods: ['PUT', 'DELETE'],
})

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

export default async (req, res) => {
    await runMiddleware(req, res, cors)
    const { method } = req;
    const { id } = req.query;
    switch (method) {
        case "PUT":
            try {
                const { name, date } = req.body;
                if ((!name, !date)) throw "invalid data";
                await Birthday.updateOne({ _id: id }, { name, date });
                res.status(200).json({ sucess: true });
            } catch (error) {
                console.log(error)
                res.status(500).json({
                    sucess: false,
                    error
                })
            }
            break;

        case "DELETE":
            try {
                await Birthday.deleteOne({
                    _id: id
                })
                res.status(200).json({ sucess: true });
            } catch (error) {
                console.log(error)
                res.status(500).json({
                    sucess: false,
                    error
                })
            }
            break;

    }
};
