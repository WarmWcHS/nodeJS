import express from "express"
import moment from "moment";
import connect from "../db.js"
import connect2 from "../db2.js"
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  // res.send("導向今天日期");
  const today = moment().format("YYYY-MM-DD")
  res.redirect("/expe/d/" + today)
});

router.get('/d/:date', async (req, res) => {
  // res.send("讀取指定內容所有消費紀錄");
  const date1 = req.params.date;
  // let sort = await getSort().then(data => data.sort)
  let sort = await getSort().catch(err => {
    console.log(err);
    // return [{id:1,name:"壞掉了"}]
    return []
  })
  let [data] = await connect2.execute(
    "SELECT * FROM `expense` WHERE `date` = ?",
    [date1]
  )
  // console.log(data);
  res.render('index', { date: date1, sort,data });
});

router.post('/', async (req, res) => {
  // res.send("新增指定日期消費");
  let { title, sort, money, date } = req.body
  sort = parseInt(sort)
  money = parseInt(money)
  const [results] = await connect2.execute(
    "INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?);", [title, sort, money, date]
  ).catch(err => {
    console.log(err)
    return [[]]
  })
  if (results.insertId) {
    res.redirect("/expe/d/" + date)
  } else {
    res.send("發生錯誤")
  }
});

router.put('/', (req, res) => {
  res.send("修改指定日期消費");
});

router.delete('/', (req, res) => {
  res.send("刪除指定日期消費");
});


function getSort() {
  return new Promise((resolve, reject) => {
    connect.query(
      "SELECT * FROM `sort`",
      (err, results) => {
        if (err) {
          reject(err)
          return
        }
        const sort = results.map(item => {
          return { id: item.id, name: item.name }
        })
        // resolve({sort})
        resolve(sort)
      }
    )
  });
}

export default router