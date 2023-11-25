const { Goal } = require('../models');
const name = "/goal";

GoalEndpoint = (app) => {
   
    app.get(name, async (req, res) => {
        try {
          const goals = await Goal.findAll();
          return res.json({ goals });
        } catch (error) {
          console.log("Error", error);
          return res.status(500).json({ message: "Internal server error" });
        }
      });
      app.post(name, async (req, res) => {
        const body = req.body;
        
        await Goal.create({
          name:body.name,
          description:body.description,
        });


    } 
      );
  
};


module.exports = {
    GoalEndpoint
};
