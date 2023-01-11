const mongoose = require("mongoose")
const Sport = require("../models/sport")
const HttpError = require("../models/http-error")

const getSport = async (req, res, next) => {
  let sports
  try {
    sports = await Sport.find({})
  } catch (error) {
    console.log(error)
    return next(error)
  }
  res.json({ sports: sports.map((sport) => sport.toObject({ getters: true })) })
}

const createSport = async (req, res, next) => {
  const { title, nation, date, hometeam, awayteam } = req.body
  // console.log(req.body)

  console.log(date)

  const createSport = new Sport({
    title,
    nation,
    date,
    teams: `${hometeam}vs${awayteam}`,
    hometeam,
    awayteam,
  })

  try {
    await createSport.save()
  } catch (err) {
    const error = new HttpError("Creating place failed, please try again.", 500)
    return next(error)
  }

  res.status(201).json({ sport: createSport })
}

exports.createSport = createSport
exports.getSport = getSport
