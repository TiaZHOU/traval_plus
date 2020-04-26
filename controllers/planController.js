const plans = require("../models/plans.js");
const alerts = require("../models/alerts.js");
// function to handle a request to get all plans
const getAllPlans = (req, res) => {
    res.send(plans); // return the list of plans
};

//need fixed once move on mongoDB
const testPlanByID = (req,res) => {
    const plan = plans.find(plan => plan.id === req.params.id);
    for (let i=0,len=alerts.length; i<len; i++) {
        const alert = alerts.find(alert => alert.id === i.toString());
        if (alert.country === plan.des_con){
            res.send('not allowed for trip by Alert');
        }
    }
};
// function to handle a request to a particular plan
const getPlanByID = (req, res) => {
    // search for plan in the database via ID
    const plan = plans.find(plan => plan.id === req.params.id);

    if (plan) {
        // send back the plan details
        res.send(plan);
    } else {
        // you can decide what to return if plan is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// function to handle request to add plan
const addPlan = (req, res) => {
    // extract info. from body
    const plan = req.body;

    // add plan to array
    plans.push(plan);
    res.send(plans);
};

// function to modify plan by ID
const updatePlan = (req, res) => {
    const new_plan = req.body;

    // search for plan in the database via ID
    const plan = plans.find(plan => plan.id === req.params.id);
    if (!plan) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_plan into the original plan object
    // it is assumed that user input is well-formed (a dangerous assumption)
    Object.assign(plan, new_plan);

    // return updated plan
    res.send(plan);
};

// remember to export the functions
module.exports = {
    getAllPlans,
    getPlanByID,
    testPlanByID,
    addPlan,
    updatePlan
};